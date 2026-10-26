// generuj.mjs — buduje pliki wariantów bramki opłacalności (D-028) z jednego zestawu założeń.
// node docs/monetyzacja/warianty/generuj.mjs  → zapisuje docs/monetyzacja/warianty/*.json i oplacalnosc-wlasna.json
// Dlaczego generator: wszystkie warianty mają te same dane rynku i założenia; różni je tylko produkt i mnożnik konwersji,
// więc jedno miejsce na liczby (zasada Treningu „liczby w jednym miejscu”).
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const TU = dirname(fileURLToPath(import.meta.url));
const DATA = '2026-10-26';
const oceny = JSON.parse(readFileSync(join(TU, '../dowody/oceny-2026-10-26.json'), 'utf8'));
const Z = (opis) => `[ZAŁOŻENIE] ${opis} (${DATA})`;
const NBP = `NBP tabela 208/A/NBP/2026 z ${DATA}, api.nbp.pl`;

const kursy = {
  USD: { kurs: 3.9293, zrodlo: NBP },
  EUR: { kurs: 4.4026, zrodlo: NBP },
  GBP: { kurs: 5.2428, zrodlo: NBP },
};
const VAT_EU = `europa.eu/youreurope VAT rates („Last checked: 13/07/2026”), odczyt ${DATA}`;
const SBP = { stawka: 0.15, zrodlo: `developer.apple.com/app-store/small-business-program: „reduced commission rate of 15%”, odczyt ${DATA}; zgłoszenie właściciela 14.10.2026 (docs/18 Treningu) — to samo konto` };

// Ceny planów Treningu (model M5 S1, docs/18 Treningu 22.10.2026; ceny regionalne: store/asc-kontrola.json Treningu, odczyt 2026-10-26)
const CENY_TRENING = {
  USD: [0.99, 6.99, 14.99], EUR: [0.99, 7.99, 17.99], GBP: [0.99, 6.99, 14.99], PLN: [4.99, 19.99, 59.99],
};
// Przelicznik ceny USD na inne waluty dla wariantów bez ceny w ASC: proporcja do planu dożywotniego Treningu (rachunek, przybliżenie)
const przelicz = (usd, w) => Math.round((usd * CENY_TRENING[w][2]) / CENY_TRENING.USD[2] * 100) / 100;

const SKLEPY = [
  { kraj: 'us', waluta: 'USD', vat: { stawka: 0, zrodlo: Z('ceny w sklepie USA bez podatku sprzedaży; podatek doliczany osobno, 0 w rachunku') } },
  { kraj: 'gb', waluta: 'GBP', vat: { stawka: 0.2, zrodlo: `gov.uk/vat-rates: „Standard rate 20%”, odczyt ${DATA}` } },
  { kraj: 'de', waluta: 'EUR', vat: { stawka: 0.19, zrodlo: VAT_EU } },
  { kraj: 'fr', waluta: 'EUR', vat: { stawka: 0.2, zrodlo: VAT_EU } },
  { kraj: 'es', waluta: 'EUR', vat: { stawka: 0.21, zrodlo: VAT_EU } },
  { kraj: 'it', waluta: 'EUR', vat: { stawka: 0.22, zrodlo: VAT_EU } },
  { kraj: 'nl', waluta: 'EUR', vat: { stawka: 0.21, zrodlo: VAT_EU } },
  { kraj: 'pl', waluta: 'PLN', vat: { stawka: 0.23, zrodlo: `ustawa o VAT, Dz.U. 2026 poz. 1263, art. 146ef ust. 1 pkt 1 („wynosi 23 %”), odczyt ${DATA}` } },
  // reszta odczytanych storefrontów razem; cena = cena USD × 0,75 (ceny regionalne niższe w BR/MX/IN/UA), VAT/GST uśredniony
  { kraj: 'reszta', storefronty: ['au', 'br', 'ca', 'cz', 'in', 'jp', 'kr', 'mx', 'ua'], waluta: 'USD', mnoznikCeny: 0.75,
    vat: { stawka: 0.1, zrodlo: Z('VAT/GST uśredniony dla AU, BR, CA, CZ, IN, JP, KR, MX, UA; do sprawdzenia per kraj, gdy ten sklep zmienia werdykt') } },
];

const konkurenci = (s) => oceny.konkurenci.map((k) => ({
  oceny: (s.storefronty ?? [s.kraj]).reduce((a, c) => a + (k.oceny[c] ?? 0), 0),
  wydanie: k.wydanie,
  zrodlo: `${k.k}: itunes.apple.com/lookup?id=${k.id}&country=${(s.storefronty ?? [s.kraj]).join(',')} (userRatingCount), odczyt ${oceny.odczyt}`,
}));

// Założenia wspólne (pes ≤ norm ≤ opt; rozrzut instalacji na ocenę i udziału ≥ 10×, moduł oplacalnosc)
const ZAL = (mnoznikKonwersji = [1, 1, 1], konwersja = [0.01, 0.02, 0.04]) => ({
  pobrania_na_ocene: { s: [20, 60, 200], zrodlo: Z('pobrania na jedną ocenę w sklepie; brak przeczytanego benchmarku, rozrzut 10×') },
  udzial_nowej: { s: [0.003, 0.01, 0.03], zrodlo: Z('udział nowej aplikacji w pobraniach kategorii kalisteniki (13 konkurentów K-01…K-13), rozrzut 10×') },
  konwersja: { s: konwersja.map((x, i) => Math.round(x * mnoznikKonwersji[i] * 10000) / 10000), zrodlo: Z('pobranie → płacący; po premierze z App Store Connect') },
  darmowa_alternatywa: { s: [0.5, 0.7, 0.9], zrodlo: Z('mocne darmowe alternatywy: K-02 i K-12 z darmowymi progresjami (recenzje US 2026-10-26), darmowe filmy') },
});

const prod = (s, id, usdIdx, udzial, platnosci) => {
  const w = s.waluta;
  const base = w === 'USD' ? CENY_TRENING.USD[usdIdx] * (s.mnoznikCeny ?? 1) : CENY_TRENING[w][usdIdx];
  return { id, cena_brutto: Math.round(base * 100) / 100, ...(platnosci ? { platnosci_w_roku: platnosci, platnosci_zrodlo: Z('opłacone miesiące na płacącego w roku przy planie miesięcznym (retencja)') } : {}),
    ...(udzial ? { udzial: { s: udzial, zrodlo: Z('podział płacących na plany') } } : {}) };
};
const jeden = (s, id, usd) => ({ id, cena_brutto: Math.round((s.waluta === 'USD' ? usd * (s.mnoznikCeny ?? 1) : przelicz(usd, s.waluta)) * 100) / 100 });

const WARIANTY = {
  'm5s1-trening': { opis: 'Model Treningu M5 S1: darmowa z limitem 5 dni treningowych/mies., Pro 0,99 / 6,99 / 14,99 USD (= wariant właściciela D-029)',
    produkty: (s) => [prod(s, 'miesieczna', 0, [0.4, 0.3, 0.25], 5), prod(s, 'roczna', 1, [0.45, 0.5, 0.5]), prod(s, 'dozywotni', 2, [0.15, 0.2, 0.25])] },
  'miesieczna': { opis: 'Tylko subskrypcja miesięczna 0,99 USD', produkty: (s) => [prod(s, 'miesieczna', 0, null, 5)], mk: [0.9, 0.9, 0.9] },
  'roczna': { opis: 'Tylko subskrypcja roczna 6,99 USD', produkty: (s) => [prod(s, 'roczna', 1)], mk: [0.8, 0.8, 0.8] },
  'mies-rok': { opis: 'Miesięczna 0,99 + roczna 6,99 USD', produkty: (s) => [prod(s, 'miesieczna', 0, [0.45, 0.4, 0.35], 5), prod(s, 'roczna', 1, [0.55, 0.6, 0.65])], mk: [0.95, 0.95, 0.95] },
  'jednorazowy-4.99': { opis: 'Darmowa z limitem + jednorazowe odblokowanie 4,99 USD', produkty: (s) => [jeden(s, 'odblokowanie', 4.99)] },
  'jednorazowy-9.99': { opis: 'Darmowa z limitem + jednorazowe odblokowanie 9,99 USD', produkty: (s) => [jeden(s, 'odblokowanie', 9.99)], mk: [0.75, 0.75, 0.75] },
  'jednorazowy-19.99': { opis: 'Darmowa z limitem + jednorazowe odblokowanie 19,99 USD', produkty: (s) => [jeden(s, 'odblokowanie', 19.99)], mk: [0.5, 0.5, 0.5] },
  'platna-4.99': { opis: 'Płatna z góry 4,99 USD (bez darmowej części)', produkty: (s) => [jeden(s, 'aplikacja', 4.99)], konw: [0.002, 0.005, 0.01] },
  'napiwek': { opis: 'Wszystko darmowe + napiwek 2,99 USD (zużywalny, raz w roku)', produkty: (s) => [jeden(s, 'napiwek', 2.99)], konw: [0.002, 0.005, 0.01] },
  'ceny-rynku': { opis: 'Konstrukcja M5 S1 z cenami bliżej mediany rynku: 4,99 / 29,99 / 59,99 USD (tylko porównanie; model Treningu jest stały)',
    produkty: (s) => [jeden(s, 'miesieczna', 4.99), jeden(s, 'roczna', 29.99), jeden(s, 'dozywotni', 59.99)].map((p, i) => ({ ...p, ...(i === 0 ? { platnosci_w_roku: 5, platnosci_zrodlo: Z('retencja jak w M5 S1') } : {}), udzial: { s: [[0.4, 0.3, 0.25], [0.45, 0.5, 0.5], [0.15, 0.2, 0.25]][i], zrodlo: Z('podział płacących jak w M5 S1') } })),
    mk: [0.4, 0.4, 0.4] },
};

const MK_ZRODLO = 'mnożnik konwersji wobec M5 S1 (wyższa cena albo mniej planów → mniej płacących)';
for (const [nazwa, w] of Object.entries(WARIANTY)) {
  const d = {
    data: DATA, waluta: 'PLN', tryb: 'build', wariant: nazwa, opis_wariantu: w.opis, kursy,
    prog: { kwota: 500, waluta: 'USD', zrodlo: 'próg właściciela 500 USD netto/rok globalnie (D-024; Trening docs/18, 21.10.2026)' },
    platformy: { ios: { koszty_roczne: 0, koszty_zrodlo: 'brak kosztów tylko tej aplikacji; Apple Developer i AI to koszty portfela (D-024); 0 zł poza Apple (CLAUDE.md Treningu)' } },
    sklepy: SKLEPY.map((s) => {
      const p = w.produkty(s);
      const zal = ZAL(w.mk, w.konw);
      if (w.mk) zal.konwersja.zrodlo = Z(`${MK_ZRODLO} × ${w.mk[1]}`);
      return { platforma: 'ios', kraj: s.kraj, waluta: s.waluta, vat: s.vat, prowizja: SBP,
        ...(p.length === 1 ? { produkt: p[0] } : { produkty: p }), konkurenci: konkurenci(s), zalozenia: zal };
    }),
  };
  writeFileSync(join(TU, `${nazwa}.json`), JSON.stringify(d, null, 1) + '\n');
  if (nazwa === 'm5s1-trening') writeFileSync(join(TU, '../oplacalnosc-wlasna.json'), JSON.stringify(d, null, 1) + '\n');
}
console.log(`Zapisano ${Object.keys(WARIANTY).length} wariantów`);
