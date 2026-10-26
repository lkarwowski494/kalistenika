# BRD: Kalistenika (nazwa robocza) — aplikacja prowadząca do umiejętności z masą ciała
Stan: E4 (rola 01, build) — przekazanie gotowe w części niezależnej od źródeł; kroki drabin to bloker v1 · Aktualizacja: 2026-10-26 · Hierarchia źródeł: Treningu (DM-01) · Kontrola: `node scripts/kontrola-brd.mjs docs/brd` (kod 0)

**Pomysł (właściciel, 25.10.2026):** krótki test albo ankieta na start → poziom → plan prowadzący do konkretnej umiejętności (np. od podciągania negatywnego do muscle-upu), bez ręcznej edycji; plan sam się dostosowuje, żeby użytkownik z ograniczeniem nie utknął. Szczegóły: `odkrywanie.md`.

**Waga i forma:** BRD dzielony (więcej niż 20 KB, kilka modułów, więcej niż trzy reguły, reguły krytyczne). Ten dokument nie rozstrzyga ceny, zakresu pierwszej wersji ani podziału (hipotezy H-01…H-07 dla ról 02 i 03). Decyzje są w `docs/decyzje.md`, założenia w `docs/zalozenia.md`.

## Spis

| plik | zawartość |
|---|---|
| `README.md` | stan, streszczenie, decyzje dla właściciela, blokery wydania, otwarte pytania |
| `odkrywanie.md` | pomysł, wywiad (analogia), prace J, persony P, kontekst, zasady ZP, rynek, ograniczenia OG, hipotezy H, ryzyka RYZ |
| `wymagania.md` | przepływy PR-01…PR-13, wymagania BR (14 modułów), NFR |
| `reguly.md` | reguły RD-01…RD-08 z wektorami (eksport: `tests/wektory/brd.json`) |
| `zrodla.md` | źródła S-01…S-33 przeczytane 2026-10-26 |
| `errata.md` | ER: rozbieżności wejść i prośby o zmianę |

## Streszczenie

- **Prace:** zacząć od właściwego poziomu (J-01), wiedzieć, co dziś (J-02), dojść do umiejętności (J-03), nie utknąć (J-04), test postępu (J-05), bezpieczeństwo (J-06), sprzęt i miejsce (J-07), powrót po przerwie (J-08), trening bez patrzenia w telefon (J-09), dane przy sobie (J-10).
- **Rynek:** 13 konkurentów (K-01…K-13); większość deklaruje drabiny, test i plan dopasowany; żaden opis nie wspomina pracy offline. Skargi: cena i paywall, konto, zatrzymywana muzyka, ręczne odliczanie, utrata danych po synchronizacji.
- **Rdzeń dziedzinowy:** reguły zmiany kroku są parametryczne (DM-03); liczby (kroki drabin, progi, odstępy) ustali badacz w R-01…R-13 — do tego czasu `[DO USTALENIA]`. Reguły krytyczne: RD-01, RD-03, RD-04, RD-06, RD-07.
- **Ograniczenia sklepu:** odrębność od Treningu (OG-01), bez diagnozy (OG-02), bez zachęcania do ryzyka (OG-03), dane zdrowotne nie w iCloud (OG-04), bez logowania (OG-05), ocena 9+ (OG-08).

## Decyzje właściciela (26.10.2026)

Zapis dosłowny: `docs/decyzje.md`. DK-04: ankieta na start, potem test w 1. treningu (rekomendacja). DK-05: test można odłożyć raz o tydzień, potem pojawia się przy najbliższym treningu z możliwością pominięcia (rekomendacja). **DK-06: „Tylko pominięcie dziś” — wbrew rekomendacji** (wstrzymanie drabiny): plan działa dalej, przy następnym treningu „Nadal boli?”, tekst bez diagnozy. DK-07: podtrzymanie (rzadsze treningi) i propozycja nowego celu (rekomendacja).

**Po badaniach (26.10.2026):** DK-08 pełne cele v1 (muscle-up, pistolet, pompka jednorącz, L-sit), **wbrew rekomendacji badacza**; kroki bez potwierdzonej kolejności blokują wydanie. DK-11 najpierw darmowe źródła szczebla 2–3, zakup książek tylko po osobnej decyzji. DK-09 ocena 9+, pytanie o rok urodzenia, poniżej 18 lat test bez serii do upadku i tekst o treningu pod okiem trenera. DK-10 podciąganie tylko z drążkiem albo kółkami. DK-12 (OP-30, opcja A): po „Tak” na „Nadal boli?” znowu pominięcie i tekst o specjaliście, pytanie przy każdym treningu do „Nie”.

## Blokery wydania

- BR-DAN-001, BR-DAN-002, BR-DAN-003, NFR-DAN-001, NFR-DAN-002: utrata lub zepsucie danych.
- NFR-PRV-001, BR-JEZ-002: obietnica prywatności i anonimowości źródeł.
- BR-STA-002, BR-STA-004, BR-BEZ-001, BR-BEZ-002, BR-TST-001, NFR-BEZ-001: bezpieczeństwo i reguły krytyczne (RD-01, RD-03, RD-04, RD-06, RD-07).
- **Bloker v1 bez obejścia (DK-08):** kolejność kroków do każdego z czterech celów (OP-01, OP-11) — dziś otwarte: górne kroki pompki (łucznik → jednorącz), pistolet (kroki pośrednie), podciąganie → muscle-up (wysokie podciąganie, przejście; OP-11), guma czy negatywy pierwsze (OP-10), cała drabina L-sit, czasy utrzymań (OP-03). BR-PLN-001, BR-PST-002, BR-STA-003.
- BR-TRN-005: wskazówka bez dwóch źródeł szczebla 4 nie wchodzi (RYZ-03).
- Parametry ze statusem konwencja (OP-02, OP-05…OP-08) — przed wydaniem przegląd roli 06 i człowieka (NFR-BEZ-001).
- BR-STA-001, BR-TRN-001, BR-ZMK-001, BR-ZMK-002: główny przepływ.
- BR-ZAK-001: polityka sklepu (OG-07) i model dostępu.
- OG-01: odrębność od Treningu (RYZ-01, ryzyko otwarte do pierwszego zgłoszenia).

## Definicja ukończenia (E4, 2026-10-26)

| Punkt | Stan | Dowód |
|---|---|---|
| każdy fakt ma źródło S przeczytane w dniu pracy | spełniony | `zrodla.md` (S-01…S-37, odczyt 2026-10-26, surowy tekst przez `curl`/`pdftotext`); kontrola nie zgłasza faktu bez S |
| pytania produktowe pojedynczo, z opcjami; odpowiedzi dosłownie z datą | spełniony (przez koordynatora) | `docs/decyzje.md`: DK-01…DK-12 z datą 2026-10-26; DP-17…DP-36 z analogii z Treningiem |
| reguły RD: wzór, jednostki, granica, podstawa, ≥ 3 wektory; krytyczne tylko ze szczebla 1–3 | spełniony mechanicznie | kontrola: 9 reguł, 53 wektory, 0 błędów; krytyczne RD-01, RD-03, RD-04, RD-06, RD-07, RD-09 do przeglądu roli 06 |
| BR z PR, PR z J, scenariusz główny z obserwowalnym wynikiem | spełniony | kontrola: 36 BR, 0 uwag |
| liczby mają źródło, decyzję albo oznaczenie „do ustalenia” z OP | spełniony | `reguly.md`, „Status merytoryczny reguł”; parametry z wartościami testowymi |
| ograniczenia OG przypisane do wymagań | spełniony | OG-01…OG-11 w `odkrywanie.md` z odwołaniami do BR |
| cena, zakres, podział tylko jako H | spełniony | H-01…H-07; cele v1 rozstrzygnął właściciel (DK-08) |
| kontrola bez `--szkic` kod 0; brak danych rozmówców i cudzych materiałów w repo | spełniony | `node scripts/kontrola-brd.mjs docs/brd` → 0; przeszukanie repo pod nazwy konkurentów i adresy: 0 trafień poza kodami K-nn |
| **niespełnione (bloker v1, zależne od źródeł)** | otwarte | kolejność kroków do czterech celów (OP-01, OP-03, OP-10, OP-11); BRD dostanie je wpisem ER po badaniach (DK-11) |

## Przekazanie

- **02 (sesja 2):** H-05, H-06; ceny i modele konkurencji z datą: `docs/monetyzacja.md` (S-19); motyw „cena” w 138 z 642 recenzji (`odkrywanie.md`); DK-01 osobne produkty.
- **03 (zakres):** 36 BR z przepływami PR-01…PR-13; H-02 (rozstrzygnięte DK-08), H-04 zegarek, H-07 figury; OP-17 (ile drabin naraz); blokery wyżej.
- **06 (rejestr twierdzeń):** reguły krytyczne i źródła S-11…S-18, S-34…S-37; tekst bólu (R-12), tekst ankiety (OG-10), tekst trybu poniżej 18 (RD-09); parametry z konwencją do przeglądu człowieka.
- **07 i 08:** `tests/wektory/brd.json` (53 wektory, tylko do odczytu; zmiana przez ER do roli 01); blokery wydania wyżej.
- **Badacz (w toku):** OP-01, OP-03, OP-10, OP-11, OP-14 i reszta OP-01…OP-15 — najpierw darmowe źródła szczebla 2–3 (DK-11).
- **Właściciel:** repo w Apps4Brew i dodanie `origin`; opcjonalnie rozmowy z użytkownikami (OP-24); decyzja o zakupie książek, jeśli darmowe źródła nie wystarczą (DK-11).

## Otwarte pytania

| ID | Pytanie | Rozstrzyga | Dotyczy |
|---|---|---|---|
| OP-01 | [DO USTALENIA] R-01: kroki każdej drabiny (kolejność, warianty, miara: powtórzenia albo czas) z kilku źródeł — stan 26.10: ustalone dolne kroki pompki (do „stopy wyżej”), przysiad do bułgarskiego (uproszczenie), podciąganie do 3 × 5 (jedno źródło szczebla 4); górne kroki i cały L-sit otwarte | badacz (szczebel 2–3; wskazówki techniki DM-02) | BR-PLN-001, H-02 |
| OP-02 | [DO USTALENIA] R-02: kryterium przejścia n i k dla kroków z masą ciała (analogia S-12 do potwierdzenia) — stan 26.10: „najpierw technika” ustalone; próg powtórzeń uproszczenie; k otwarte (konwencja: 1 sesja + potwierdzenie) | badacz, rola 06 | RD-01 |
| OP-03 | [DO USTALENIA] R-03: zakresy powtórzeń i czasów każdego kroku (cel) | badacz | RD-01, RD-02 |
| OP-04 | [DO USTALENIA] R-04: częstotliwość, serie, przerwy, wysiłek; zakres dni w tygodniu; podtrzymanie umiejętności — stan 26.10: ≥ 2 dni/tydz. (początkujący 2–3), 2–3 serie, przerwa 1–3 min, serie z zapasem 2–3 powtórzeń — ustalone; podtrzymanie otwarte | badacz | BR-PLN-002, DK-07 |
| OP-05 | [DO USTALENIA] R-05: próg niepowodzenia m i liczba sesji f — stan 26.10: konwencja | badacz | RD-02 |
| OP-06 | [DO USTALENIA] R-06: progi wejścia kroków i margines bezpieczeństwa startu — stan 26.10: kierunek „zacząć łatwiej” ustalony, progi konwencja | badacz, rola 06 | RD-04 |
| OP-07 | [DO USTALENIA] R-07: odstęp testu kontrolnego T — stan 26.10: ~4 tygodnie jako konwencja | badacz | RD-05 |
| OP-08 | [DO USTALENIA] R-08: próg przerwy B i rodzaj powrotu (test czy krok niżej) — stan 26.10: kierunek ustalony, progi konwencja | badacz, rola 06 | RD-06 |
| OP-09 | [DO USTALENIA] R-09: protokół testu maksymalnego i jego bezpieczeństwo — stan 26.10: rozgrzewka, przerwanie przy objawach, brak upadku w treningu ustalone; test bez nadzoru otwarty | badacz, rola 06 | BR-TST-001, RD-04 |
| OP-10 | [DO USTALENIA] R-10: negatywy i guma oporowa jako kroki (kolejność, kryteria) | badacz | BR-PLN-004 |
| OP-11 | [DO USTALENIA] R-11: warunki wstępne muscle-upa | badacz, rola 06 | OP-01 |
| OP-12 | [DO USTALENIA] R-12: komunikat przy bólu i kiedy odesłać do specjalisty (bez porady medycznej) — stan 26.10: tekst z R-12, odróżnienie bolesności od bólu ostrego jedno źródło | badacz, rola 06 | RD-07 |
| OP-13 | [DO USTALENIA] R-13: rozgrzewka przed treningiem i testem — stan 26.10: 5–10 min dynamicznie ustalone; serie rozgrzewkowe otwarte | badacz | BR-TRN-004 |
| OP-14 | [DO USTALENIA] pełny algorytm przesiewu (pełny tekst S-17) i brzmienie pytań ankiety bez porady medycznej — stan 26.10: własny tekst (OG-10); kryteria ACSM otwarte | badacz, rola 06 | RD-03 |
| OP-15 | [DO USTALENIA] zamiennik ciągnięcia bez drążka — stan 26.10: brak źródeł; DK-10: drabina niedostępna bez drążka i kółek, pytanie zamknięte do czasu źródeł szczebla 4 | badacz | BR-PLN-004 |
| OP-16 | [DO USTALENIA] czy figury v2 obsłużą pozycje statyczne (zwis, L-sit, stanie na rękach) | rola 05 | BR-TRN-005, RYZ-07 |
| OP-17 | [DO WYJAŚNIENIA] ile drabin naraz w planie (jedna aktywna czy kilka) | rola 03 z właścicielem | H-02, BR-PLN-002 |
| OP-18 | [DO USTALENIA] najmniejszy cel dotyku i kontrast w treningu na żywo | rola 04 | NFR-KON-002 |
| OP-19 | [DO USTALENIA] typ i zakres powiadomień zegarka (powtórzenie zakresu Treningu na pakiecie silnika) | rola 05 | BR-ZEG-001 |
| OP-20 | [DO WYJAŚNIENIA] DK-04: ocena poziomu na starcie — rozstrzygnięte 26.10.2026 (ankieta + test w 1. treningu) | właściciel | BR-STA-003 |
| OP-21 | [DO WYJAŚNIENIA] DK-05: przełożenie testu kontrolnego — rozstrzygnięte 26.10.2026 (raz o tydzień) | właściciel | BR-TST-002 |
| OP-22 | [DO WYJAŚNIENIA] DK-06: drabina po zgłoszeniu bólu — rozstrzygnięte 26.10.2026 (tylko pominięcie dziś) | właściciel | BR-BEZ-001 |
| OP-23 | [DO WYJAŚNIENIA] DK-07: co po osiągnięciu umiejętności — rozstrzygnięte 26.10.2026 (podtrzymanie + nowy cel) | właściciel | BR-PST-002 |
| OP-24 | [DO WYJAŚNIENIA] rozmowy z 3–5 osobami ćwiczącymi kalistenikę (krok właściciela, opcjonalny; notatki poza repo) — prace i persony opierają się dziś na recenzjach | właściciel | J-01…J-10, P-1…P-3 |
| OP-25 | [DO USTALENIA] recenzje rynków poza US i Google Play nie były czytane | rola 02 (sesja 2) | rynek |
| OP-26 | [DO WYJAŚNIENIA] DK-08 — rozstrzygnięte 26.10.2026 (pełne cele; bloker do źródeł) | właściciel | H-02, BR-PLN-001, BR-PST-002 |
| OP-27 | [DO WYJAŚNIENIA] DK-09 — rozstrzygnięte 26.10.2026 (rok urodzenia, tryb poniżej 18) | właściciel | BR-STA-004 |
| OP-28 | [DO WYJAŚNIENIA] DK-10 — rozstrzygnięte 26.10.2026 (tylko z drążkiem albo kółkami) | właściciel | BR-PLN-004 |
| OP-29 | [DO WYJAŚNIENIA] DK-11 — rozstrzygnięte 26.10.2026 (najpierw darmowe źródła 2–3) | właściciel | OP-01 |
| OP-30 | [DO WYJAŚNIENIA] „Tak” na „Nadal boli?” — rozstrzygnięte 26.10.2026 (DK-12, opcja A) | właściciel | BR-BEZ-001, RD-07 |
