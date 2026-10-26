# Monetyzacja: aplikacja do kalisteniki (nazwa robocza)
Stan: E1b, krok 0 ścieżki greenfield (bramka opłacalności przed rolą 01) · Aktualizacja: 2026-10-26 · Wejście: opis pomysłu (Trening, docs/18: 25.10 i 26.10.2026), wstępna specyfikacja analityka z 26.10.2026 (hipoteza, ZAL-001…ZAL-006), karta „Stan projektu” przejęta z Treningu (`docs/decyzje.md`)

**Werdykt bramki: budować, warunkowo.** Wynik normalny 2765 zł netto/rok (ok. 704 USD) przy progu 500 USD (1964,65 zł). Werdykt jest kruchy: bez trzech młodych konkurentów o bardzo szybkim przyroście ocen (K-05…K-07) wynik spada do 1496 zł (ok. 381 USD), a werdykt zmienia się na „odłożyć” (niżej, „Wrażliwość”).

## Rynek (odczyt 2026-10-26)

Nazwy konkurentów i pełne cytaty są na Dysku (Trening App / 05 Research konkurencji, plik „Kalistenika — konkurencja 2026-10-26”). W repo są tylko kody K-nn i identyfikatory App Store (zasada Treningu „Treści cudze i nazwy innych firm”, 09.10.2026). Dane: `docs/monetyzacja/dowody/oceny-2026-10-26.json`.

| Kod | Model (US) | Cena pobrania | Najniższe ceny planów (US; PL) | Oceny US / PL | Języki | Motyw z recenzji (US, cytat, data) |
|---|---|---|---|---|---|---|
| K-01 | subskrypcja + napiwki | darmowa | mies. 9,99 $, rok 89,99 $; 39,99 zł, 239,99 zł | 12 406 / 277 | 1 | „Many of the exercises that used to be available prior to the latest patch have all been locked behind a paywall.” (2★, 2025-01-28) |
| K-02 | darmowa + subskrypcja „wspierający” | darmowa | mies. 14,99 $, rok 75 $; 69,99 zł, 249,99 zł | 2 981 / 17 | 1 | „I'd prefer if there was a one time buy option.” (4★, 2026-10-05) |
| K-03 | darmowa + Pro | darmowa | ceny Pro 3,99–99,99 $ (okres nieopisany) | 993 / 135 | 1 | „The pro subscription is super helpful and also pretty reasonably priced!” (5★, 2023-03-23) |
| K-04 | subskrypcja z próbą | darmowa | mies. 3,49 $, rok 18,49 $; 17,99 zł, 87,99 zł | 1 655 / 84 | 6 | „Can’t do a single thing without signing up for a free 7 day trial.” (1★, 2025-08-21) |
| K-05 | subskrypcja | darmowa | mies. 9,99 $, rok 12,99 $; 49,99 zł, 59,99 zł | 1 029 / 1 | 1 | — |
| K-06 | subskrypcja | darmowa | (nie odczytano) | 1 745 / 11 | 22 | — |
| K-07 | subskrypcja | darmowa | mies. 9,99 $, rok 19,99 $; rok 99,99 zł | 1 995 / 12 | 1 | — |
| K-08 | subskrypcja | darmowa | 3 mies. 49,99 $, rok 129,99 $; 299,99 zł, 499,99 zł | 469 / 23 | 1 | — |
| K-09 | subskrypcja + dożywotni | darmowa | mies. 9,99 $, rok 69,99 $, dożywotni 109,99 $; 49,99 / 349,99 / 499,99 zł | 207 / 10 | 7 | „This app is worth the money 10x over.” (5★, 2024-06-08) |
| K-10 | subskrypcja + dożywotni | darmowa | mies. 5,99 $, rok 44,99 $, dożywotni 179 $; 29,99 / 249,99 / 799,99 zł | 219 / 12 | 15 | — |
| K-11 | Premium (okres nieopisany) | darmowa | 12,49–88,99 $ | 1 458 / 279 | 1 | — |
| K-12 | darmowa + PRO | darmowa | mies. 4,49 $, rok 44,99 $; 21,99 zł, 219,99 zł | 1 156 / 31 | 1 | „Everything’s hidden behind a paywall. There are way better calisthenics apps for free out there.” (2★, 2024-03-02) |
| K-13 | darmowa + zakupy | darmowa | (nie odczytano) | 173 / 12 | 1 | — |

**Ceny konkurencji (D-028), najniższa cena planu u każdej aplikacji, 2026-10-26:**

| Plan | US: n, przedział, mediana | PL: n, przedział, mediana | Trening / ta aplikacja (M5 S1) |
|---|---|---|---|
| miesięczny | 8 · 3,49–14,99 $ · **9,99 $** | 7 · 17,99–69,99 zł · **39,99 zł** | 0,99 $ · 4,99 zł |
| roczny | 9 · 12,99–129,99 $ · **44,99 $** | 9 · 59,99–499,99 zł · **239,99 zł** | 6,99 $ · 19,99 zł |
| dożywotni | 2 · 109,99–179 $ | 2 · 499,99–799,99 zł | 14,99 $ · 59,99 zł |
| jednorazowy / płatna z góry | 0 w zestawie K (płatne z góry są tylko poza kalisteniką) | 0 | — |

Metoda: strona `apps.apple.com/<kraj>/app/id<id>` i polecenie `grep` z modułu `cena-i-rachunek`; plany bez nazwy okresu (K-03, K-11) pominięte w medianie. Model Treningu jest około 10 razy tańszy od mediany rynku kalisteniki.

**Recenzje o cenie i modelu (US, 3 strony najnowszych na aplikację, 8 aplikacji, 2026-10-26):** 159 z 642 wpisów zawiera słowa o cenie, płaceniu, subskrypcji albo darmowości (dopasowanie słów, nie klasyfikacja). Powtarzają się trzy motywy:
1. skarga na brak darmowej części albo na zamknięcie wcześniej darmowych treningów (K-01, K-04, K-09, K-12; przykład wyżej);
2. pochwała darmowej części, która „naprawdę działa” (K-02, K-04, K-12), i chęć zapłaty niewielkiej kwoty („I’d happily throw a buck or two a month”, K-02, 3★, 2025-09-24) albo jednorazowo (K-02, 2026-10-05);
3. płacący chwalą zaplanowaną progresję i dopasowanie planu (K-03, K-09) — to ta sama praca, którą ma wykonywać ta aplikacja (sygnał WTP-1 dla „plan prowadzący do umiejętności”, poziom R; pełna tabela WTP w sesji 2, po BRD).

Dodatkowo: brak pracy bez sieci jako wada (K-02, 3★, 2026-07-24: „No offline capability”) i zakup niewidoczny na drugim urządzeniu (K-04, 3★, 2021-03-25) — wspiera decyzje przejęte z Treningu: offline i dostęp z transakcji sklepu.

## Opłacalność (2026-10-26, próg: 500 USD netto/rok globalnie)

Skrypt: `node docs/monetyzacja/oplacalnosc.mjs docs/monetyzacja/oplacalnosc-wlasna.json` (kod wyjścia 0), wynik z godziną: `docs/monetyzacja/dowody/oplacalnosc-2026-10-26.txt`. Dane wariantów generuje `docs/monetyzacja/warianty/generuj.mjs` (jedno miejsce na liczby).

- **Sklepy:** tylko iOS (analogia: Trening wydaje tylko iOS, decyzja o Androidzie po 8 tygodniach od premiery, DEC-26). Storefronty: US, GB, DE, FR, ES, IT, NL, PL i „reszta” (AU, BR, CA, CZ, IN, JP, KR, MX, UA razem, cena = 0,75 × USD `[ZAŁOŻENIE]`). Pozostałe storefronty nie są liczone (wynik zaniżony).
- **Popyt:** oceny konkurentów na rok (13 aplikacji K-01…K-13): US 7059, reszta 2479, GB 1305, DE 635, ES 516, IT 307, FR 291, NL 197, PL 124. W PL łącznie 904 oceny (> 50), więc interpretacja B nie jest wymagana.
- **Założenia** (wszystkie `[ZAŁOŻENIE]`, pes. / norm. / opt.): pobrania na ocenę 20 / 60 / 200; udział nowej aplikacji 0,3% / 1% / 3%; konwersja pobranie → płacący 1% / 2% / 4%; darmowa alternatywa 0,5 / 0,7 / 0,9; podział płacących mies./rok/dożywotni 40/45/15%, 30/50/20%, 25/50/25%; plan miesięczny 5 opłaconych miesięcy na płacącego w roku. Prowizja 15% (Small Business Program, to samo konto co Trening).

| Wynik (zł netto/rok) | pes. | norm. | opt. |
|---|---|---|---|
| Razem, sam iOS (A) | 91 (ok. 23 USD) | **2765 (ok. 704 USD)** | 75 683 (ok. 19,3 tys. USD) |
| w tym US | 52 | 1580 (57%) | 43 185 |
| w tym PL | 1 | 21 | 576 |
| Odporność: bez K-05…K-07 (`docs/monetyzacja/odpornosc-bez-K05-07.json`) | 49 | 1496 (ok. 381 USD) → **odłożyć** | 40 973 |

**Wrażliwość.** Wynik normalny odwraca spadek dowolnego założenia mnożnikowego o co najmniej 29% (2765 → 1965 zł). Zmiana o 25% (warunek odświeżenia D-025) zostawia „budować” (2074 zł), ale tuż nad progiem. Największy wpływ: pobrania na ocenę (wszystkie sklepy) 922 → 9217 zł; udział nowej aplikacji 830 → 8295 zł; US osobno 1712 → 6452 zł. Prowizja 30% (gdyby Apple nie przyjęło zgłoszenia do programu) daje ok. 2277 zł (ok. 580 USD), czyli nadal „budować”. **Najtańsze sprawdzenie:** dane Treningu z App Store Connect po 8 tygodniach od premiery (pobrania na ocenę i konwersja z tej samej konstrukcji modelu) — przed startem budowy kalisteniki, bez nowych kosztów.

**Interpretacja K-05…K-07.** Trzy aplikacje wydane 2025-05…2025-12 mają razem 4769 ocen w US; skrypt dzieli oceny przez co najmniej 1 rok, więc dają 3953 z 7059 ocen na rok w US. Możliwe interpretacje: (A) prawdziwy, rosnący popyt na kalistenikę; (B) przyrost z płatnej reklamy, którego nowa aplikacja bez budżetu nie powtórzy. Tego nie rozstrzygnę bez danych o źródłach pobrań; dlatego „budować, warunkowo”.

**Rozbieżności z Treningiem (D-023; porównanie po zapisaniu własnego wyniku):** Trening, ten sam model M5 S1, wynik normalny ok. 471 USD/rok (Trening docs/monetyzacja.md, „Bramka W0”, dopisek 23.10.2026). Tu ok. 704 USD. Przyczyny: inny zestaw konkurentów (kalistenika ma więcej ocen na rok w US, głównie przez K-05…K-07), założenia liczone niezależnie (Trening: konwersja z raportu branżowego, tu `[ZAŁOŻENIE]` 2%), inny podział planów. Model portfela nie był otwierany.

### Macierz wariantów (D-028)

`node docs/monetyzacja/oplacalnosc.mjs docs/monetyzacja/warianty/*.json` (kod 0; tabela: `docs/monetyzacja/dowody/warianty-2026-10-26.txt`). Mnożniki konwersji wariantów wobec M5 S1 są `[ZAŁOŻENIE]` i to one ustawiają kolejność.

| Wariant | Razem pes. / norm. / opt. (zł) | Werdykt | Podłoga |
|---|---|---|---|
| ceny rynku 4,99 / 29,99 / 59,99 USD (konwersja × 0,4) | 162 / 4827 / 130 435 | budować | przechodzi, ale zmienia model Treningu (reguła właściciela: model stały) |
| jednorazowy 19,99 USD (× 0,5) | 125 / 3498 / 89 959 | budować | przechodzi |
| **M5 S1 jak Trening, 0,99 / 6,99 / 14,99 USD (= wariant właściciela D-029)** | 91 / **2765** / 75 683 | **budować** | przechodzi |
| jednorazowy 9,99 USD (× 0,75) | 94 / 2622 / 67 435 | budować | przechodzi |
| miesięczna + roczna (× 0,95) | 71 / 2020 / 52 843 | budować | przechodzi |
| tylko roczna (× 0,8) | 69 / 1936 / 49 794 | odłożyć | przechodzi |
| jednorazowy 4,99 USD | 62 / 1747 / 44 911 | odłożyć | przechodzi |
| tylko miesięczna (× 0,9) | 54 / 1517 / 39 000 | odłożyć | przechodzi |
| płatna z góry 4,99 USD | 12 / 437 / 11 228 | odłożyć | przechodzi |
| napiwek 2,99 USD | 7 / 262 / 6 728 | odłożyć | przechodzi |
| reklamy | nie liczone | — | **nie przechodzi**: standard marki wysoki (bez reklam i SDK śledzących, jak Trening) |

**Model optymalny w podłodze i regule właściciela: M5 S1 jak w Treningu.** Warianty z wyższym wynikiem (ceny rynku, jednorazowy 19,99 USD) zależą wyłącznie od założonego mnożnika konwersji i zmieniałyby model, który właściciel ustalił jako stały i wspólny dla aplikacji studia. Zostają jako informacja na punkt kontrolny.

### Standard marki
Wysoki (bez reklam, bez SDK śledzących, App Privacy „Data Not Collected”) — przejęty z Treningu (14.10 i 21.10.2026, Q9 A). Wariant reklamowy nie jest liczony.

### Przesiew języków (dla roli 09)
Polityka „szeroka”: 35 języków jak w Treningu (analogia). Przesiew daje tylko kolejność przeglądu rodzimego i mapowań nazw ćwiczeń według popytu (oceny na rok): EN (US, GB, CA, AU) → DE → ES (ES, MX) → PT-BR → FR → IT → NL → JA/KO → PL. Luka lokalizacji: 9 z 13 konkurentów ma tylko angielski (`languageCodesISO2A`), więc każdy język poza EN to mnożnik szansy, nie popyt. Język do 1.0: wszystkie 35 (jak Trening); treści krytyczne (opisy kroków, bezpieczeństwo) z przeglądem człowieka.

## Opcje modelu (wstęp; pełne E2 w sesji 2, po BRD)
Model przejęty z Treningu (reguła właściciela 26.10.2026): **M5 S1** — cała aplikacja darmowa do 5 dni treningowych w miesiącu, Pro: subskrypcja miesięczna 0,99 USD, roczna 6,99 USD, dostęp dożywotni 14,99 USD, bez okresu próbnego.
- Reguła sklepu: 3.1.2(a) „you must provide ongoing value to the customer” (MS-02) — spełnia ją plan rozwoju (nowe drabiny i kroki); dożywotni jako Non-Consumable (3.1.1, MS-01).
- Ryzyko etyczne: limit dotyczy tylko startu treningu na żywo w nowym dniu; plan, historia, testy i eksport zawsze dostępne (dane nigdy jako zakładnik).
- Koszt utrzymania: subskrypcja zobowiązuje do aktualizacji treści.
- Do sprawdzenia w sesji 2: czy „5 dni w miesiącu” ma ten sam sens przy kalistenice (plany 2–4 sesje w tygodniu; ZAL-008).

## Rachunek
`docs/monetyzacja/rachunek.mjs` jest dołączony jako biblioteka wzoru wpływu dla `oplacalnosc.mjs`; osobny `rachunek.json` (lejek) powstaje w sesji 2 (E2).

## Kontrakt płatności
Sesja 2 (E3). Przejęte z Treningu jako wymagania: źródło dostępu = transakcje sklepu, błąd odczytu sklepu = „nieznany” (nigdy „darmowy”), offline 7 dni, przywracanie w Ustawieniach i na ekranie zakupu, Family Sharing TAK, produkty z własnymi ID (przenośność między kontami).

## Źródła
| ID | Adres | Miejsce | Cytat | Odczyt | Szczebel | Przegląd |
|---|---|---|---|---|---|---|
| MS-01 | developer.apple.com/app-store/review/guidelines | 3.1.1 | „Non-subscription apps may offer a free time-based trial period before presenting a full unlock option by setting up a Non-Consumable IAP item at Price Tier 0…” | 2026-10-26 („Last Updated: October 16, 2026”) | 1 | przed wydaniem |
| MS-02 | jw. | 3.1.2(a) | „you must provide ongoing value to the customer, and the subscription period must last at least seven days” | 2026-10-26 | 1 | przed wydaniem |
| MS-03 | jw. | 4.3(a) | „Don’t create multiple Bundle IDs of the same app” | 2026-10-26 | 1 | przed wydaniem |
| MS-04 | jw. | 5.6 | „Apps should never prey on users or attempt to rip off customers, trick them into making unwanted purchases…” | 2026-10-26 | 1 | przed wydaniem |
| MS-05 | developer.apple.com/app-store/subscriptions | „Free trials”, „Billing amount” | „the amount that will be billed must be the most prominent pricing element in the layout” | 2026-10-26 | 1 | przed wydaniem |
| MS-06 | developer.apple.com/app-store/app-bundles | „Subscriptions” | „If a user subscribes in one app, they must be able to access all other apps in the bundle at no additional cost.” | 2026-10-26 | 1 | przy decyzji DK-01 |
| MS-07 | developer.apple.com/documentation/storekit/offering-a-subscription-across-multiple-apps | treść | „your server must grant access to the subscription content across all apps” | 2026-10-26 | 1 | przy decyzji DK-01 |
| MS-08 | developer.apple.com/app-store/small-business-program | „The basics” | „a reduced commission rate of 15% on paid apps and Apple In-App Purchases” | 2026-10-26 | 1 | przed wydaniem |
| MS-09 | developer.apple.com/support/dma-and-apps-in-the-eu | „Business terms” | 26% bez programu; 15% dla uczestników Small Business Program | 2026-10-26 | 1 | przed wydaniem |
| MS-10 | developer.apple.com/help/app-store-connect/…/turn-on-family-sharing-for-in-app-purchases | treść | „once you turn on Family Sharing for an In-App Purchases in App Store Connect, you can't turn it off” | 2026-10-26 | 1 | przy tworzeniu produktów |
| MS-11 | api.nbp.pl, tabela 208/A/NBP/2026 | kursy średnie | USD 3,9293; EUR 4,4026; GBP 5,2428 | 2026-10-26 | 1 | przy każdym rachunku |
| MS-12 | api.sejm.gov.pl/eli/acts/DU/2026/1263/text.pdf | art. 146ef ust. 1 pkt 1 | „stawka podatku, o której mowa w art. 41 ust. 1 … wynosi 23 %” | 2026-10-26 | 1 | przy każdym rachunku |
| MS-13 | europa.eu/youreurope/business/taxation/vat/vat-rules-rates | tabela | DE 19, FR 20, ES 21, IT 22, NL 21 (%) | 2026-10-26 („Last checked: 13/07/2026”) | 3 | przy każdym rachunku |
| MS-14 | gov.uk/vat-rates | tabela | „Standard rate 20%” | 2026-10-26 | 1 | przy każdym rachunku |
| MS-15 | itunes.apple.com/lookup, apps.apple.com, itunes.apple.com/us/rss/customerreviews | K-01…K-13 | oceny, daty wydania, ceny zakupów, recenzje (dane w `docs/monetyzacja/dowody/`) | 2026-10-26 | 4 (dane sklepu) | przed sesją 2 |
| MS-16 | Trening `store/asc-kontrola.json` (gałąź integracja-2026-10-26b) | „ceny” | ceny regionalne M5 S1 (USD, EUR, GBP, PLN) | 2026-10-26 | rejestr projektu | przy zmianie cen Treningu |

## Otwarte pytania
| ID | Pytanie | Rozstrzyga | Dotyczy |
|---|---|---|---|
| OP-01 | [DO USTALENIA] Pobrania na ocenę i konwersja — rzeczywiste dane z Treningu (App Store Connect, 8 tygodni po premierze) | właściciel (odczyt ASC) → rola 02 odświeżenie | werdykt |
| OP-02 | [DO USTALENIA] Czy przyrost ocen K-05…K-07 to popyt czy płatna reklama (interpretacja A/B) | rola 02, sesja 2 (np. historia wersji i ocen w czasie) | werdykt |
| OP-03 | [DO WYJAŚNIENIA] Ceny regionalne poza US/EU/GB/PL (0,75 × USD przyjęte) i VAT/GST w „reszcie” | rola 02 przy odświeżeniu; właściciel w ASC | rachunek |
| OP-04 | [DO USTALENIA] Decyzja Apple o Small Business Program (zgłoszenie 14.10.2026) | właściciel | prowizja (wynik przy 30% nadal „budować”) |
| OP-05 | [DO WYJAŚNIENIA] Wspólna czy osobna subskrypcja z Treningiem | właściciel (DK-01) | model, architektura |
| OP-06 | [DO USTALENIA] Podatek dochodowy i składki | poza rachunkiem | — |

## Decyzje bez analogii w Treningu (STOP E1b, 2026-10-26)

**DK-01 Wspólna czy osobna subskrypcja z Treningiem.** Apple: wspólna subskrypcja wymaga, by „your server must grant access to the subscription content across all apps” (MS-07), a w pakiecie aplikacji z subskrypcją „If a user subscribes in one app, they must be able to access all other apps in the bundle at no additional cost” (MS-06).
- **A. Osobne produkty, ta sama konstrukcja i ceny co Trening (rekomendacja).** Bez serwera i konta, „Data Not Collected” bez zmian, aplikacje przenośne między kontami (DP-12). Kompromis: osoba używająca obu aplikacji płaci dwa razy (np. 2 × 6,99 USD/rok); bramka liczy tylko tę aplikację, więc wynik się nie zmienia.
- **B. Wspólna subskrypcja (serwer + Sign in with Apple + pakiet aplikacji).** Jedna opłata za obie aplikacje, możliwy pakiet w App Store. Kompromis: serwer i baza kont (koszt poza 0 zł, utrzymanie), zmiana App Privacy z „Data Not Collected”, konto w aplikacji bez kont, wiązanie obu aplikacji z jednym kontem deweloperskim (sprzeczne z DP-12), Trening musiałby dostać to samo w wydaniu, którego model jest stały.
- **C. Lokalne powiązanie na jednym telefonie (wspólna grupa App Group albo pęk kluczy).** Bez serwera; subskrybent Treningu odblokowuje kalistenikę na tym samym urządzeniu. Kompromis: nie działa na drugim urządzeniu i po ponownej instalacji bez Treningu (niezgodne z „zakup należy do użytkownika”), wspólny kontener łamie przenośność (DP-12), niejasne wobec reguły Apple o pakietach (MS-06), więcej przypadków do testów.

**DK-02 Powiązanie z Treningiem w aplikacji** (Trening jest jedną aplikacją, więc nie ma wzorca).
- A. Brak wzmianki o drugiej aplikacji. Najprościej; tracimy tani kanał dotarcia do własnych użytkowników.
- **B. Wzajemny odnośnik „Inne aplikacje studia” w „Więcej” w obu aplikacjach, bez rabatu (rekomendacja).** 0 zł, bez danych (link do strony w App Store). Kompromis: zmiana w Treningu w osobnym wydaniu (tekst w 35 językach).
- C. B + kody ofertowe Apple dla subskrybentów Treningu. Zachęta finansowa; kompromis: bez danych nie wiemy, kto subskrybuje, więc kody trzeba rozdawać ręcznie (np. na stronie), co trudno ograniczyć do subskrybentów, a kody na niektóre plany mają limity Apple do sprawdzenia [DO USTALENIA].

**DK-03 Co oznacza werdykt „budować, warunkowo” dla kolejności prac.** Właściciel już zdecydował, że specyfikacja startuje teraz (Trening docs/18, 26.10.2026).
- **A. Specyfikacja i BRD teraz, odświeżenie bramki danymi Treningu z App Store Connect (8 tygodni po premierze) przed pisaniem kodu aplikacji (rekomendacja).** Praca agentów idzie dalej, a liczba, od której zależy werdykt (pobrania na ocenę i konwersja tej samej konstrukcji modelu), zostaje zmierzona za darmo. Kompromis: kod startuje dopiero po danych; pakiet silnika i tak powstaje po Treningu 1.1.
- B. Pełna budowa teraz, bez czekania. Szybciej w sklepie; kompromis: przy interpretacji B (K-05…K-07 to płatna reklama) aplikacja zostaje poniżej progu (ok. 381 USD).
- C. Wstrzymać wszystko do danych Treningu. Najmniejsze ryzyko pracy na próżno; kompromis: zatrzymuje specyfikację, którą właściciel już uruchomił, a dane przyjdą dopiero po premierze Treningu.
