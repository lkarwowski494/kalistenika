# BRD Kalistenika — reguły dziedzinowe (RD) z wektorami testowymi
Stan: E3 · Aktualizacja: 2026-10-26

Reguły są **parametryczne** (DM-03): BRD ustala logikę, jednostki i granice, a liczby merytoryczne (progi przejścia, niepowodzenia, odstępy) ustali badacz w R-01…R-13 (OP-01…OP-13). W wektorach parametry mają **wartości testowe** podane jako wejście; wektor sprawdza logikę, nie zaleca liczby. Wartości testowe zgodne ze źródłem są oznaczone S-nn, pozostałe są tylko danymi testu. Reguły krytyczne (RD-01, RD-03, RD-04, RD-06, RD-07) przechodzą przegląd roli 06 i człowieka (C-003). Wektory eksportuje `node scripts/kontrola-brd.mjs docs/brd --wektory > tests/wektory/brd.json`.

## Reguły

### RD-01: Propozycja przejścia na trudniejszy krok
- Wzór: sesja jest zaliczona, gdy w każdej serii roboczej `wynik ≥ cel + n`; propozycja awansu, gdy liczba kolejnych zaliczonych sesji tego kroku (z bieżącą) `≥ k`; sesja niezaliczona zeruje licznik
- Jednostki: wynik, cel, n [powt.] albo [s] (według miary kroku); k [-]; propozycja [-] (1 = pokazana)
- Granica: `wynik = cel + n` zalicza sesję (włącznie); `kolejne = k` daje propozycję (włącznie)
- Podstawa: S-11, S-12 (przy obciążeniu: zwiększenie, gdy osoba wykonuje „one to two repetitions over the desired number on two consecutive training sessions”), S-18 (progresja wariantami ćwiczenia z masą ciała); n i k dla kroków drabin: OP-02
- Krytyczna: tak (za wczesny awans grozi przeciążeniem)
- Uproszczenie: reguła dla obciążenia przeniesiona na zmianę wariantu ćwiczenia (analogia); awans zawsze jako propozycja do zatwierdzenia (DP-17), nie zmiana samoczynna.

| ID | Wynik [powt.] | Cel [powt.] | n [powt.] | Zaliczone sesje przed [-] | k [-] | Oczekiwane: propozycja [-] | Tolerancja | Rodzaj | Pochodzenie |
|---|---|---|---|---|---|---|---|---|---|
| RD-01-W1 | 10 | 8 | 1 | 1 | 2 | 1 | 0 | typowy | rachunek: 10 ≥ 9, sesje 1 + 1 = 2 ≥ 2; n = 1 i k = 2 jak S-12 |
| RD-01-W2 | 9 | 8 | 1 | 1 | 2 | 1 | 0 | granica | rachunek: 9 = 8 + 1 zalicza sesję; 2 = k |
| RD-01-W3 | 8 | 8 | 1 | 1 | 2 | 0 | 0 | poniżej | rachunek: 8 < 9, sesja niezaliczona, licznik 0 |
| RD-01-W4 | 9 | 8 | 1 | 0 | 2 | 0 | 0 | poniżej | rachunek: pierwsza zaliczona sesja, 1 < 2 |
| RD-01-W5 | 12 | 8 | 1 | 3 | 2 | 1 | 0 | powyżej | rachunek: 12 ≥ 9, 4 ≥ 2 |
| RD-01-W6 | 30 | 20 | 5 | 1 | 2 | 1 | 0 | typowy | rachunek: krok na czas, wynik i cel w sekundach (wartości testowe), 30 ≥ 25 |
| RD-01-W7 | -1 | 8 | 1 | 1 | 2 | 0 | 0 | błąd | rachunek: wynik < 0 to błędne dane; sesja się nie liczy, propozycji brak |

### RD-02: Propozycja łatwiejszego kroku i wstrzymanie drabiny
- Wzór: sesja jest nieudana, gdy w serii roboczej `wynik < m`; propozycja łatwiejszego kroku, gdy liczba kolejnych nieudanych sesji `≥ f` albo użytkownik wybrał „Za trudne”; jeśli krok jest najniższy w drabinie, zamiast propozycji drabina jest „wstrzymana” z propozycją innego celu
- Jednostki: wynik, m [powt.] albo [s]; f [-]; za trudne [-] (1 = wybrane); najniższy [-] (1 = najniższy krok); działanie [-] (brak / łatwiejszy / wstrzymana)
- Granica: `wynik = m` nie jest niepowodzeniem (włącznie po stronie sukcesu); `kolejne = f` daje propozycję (włącznie)
- Podstawa: rachunek (porównanie z progiem); m i f: OP-05; zasada indywidualizacji S-15
- Krytyczna: nie (kierunek łatwiejszy; brak propozycji nie zwiększa obciążenia)
- Uproszczenie: propozycja do zatwierdzenia z „Cofnij” (DP-17); co dzieje się po wstrzymaniu — DK-06, DK-07.

| ID | Wynik [powt.] | m [powt.] | Nieudane sesje przed [-] | f [-] | Za trudne [-] | Najniższy [-] | Oczekiwane: działanie [-] | Tolerancja | Rodzaj | Pochodzenie |
|---|---|---|---|---|---|---|---|---|---|---|
| RD-02-W1 | 3 | 5 | 1 | 2 | 0 | 0 | łatwiejszy | — | typowy | rachunek: 3 < 5, 1 + 1 = 2 ≥ 2 (wartości testowe) |
| RD-02-W2 | 5 | 5 | 1 | 2 | 0 | 0 | brak | — | granica | rachunek: 5 = m nie jest niepowodzeniem |
| RD-02-W3 | 4 | 5 | 0 | 2 | 0 | 0 | brak | — | poniżej | rachunek: pierwsza nieudana sesja, 1 < 2 |
| RD-02-W4 | 6 | 5 | 1 | 2 | 0 | 0 | brak | — | powyżej | rachunek: 6 ≥ 5, sesja udana |
| RD-02-W5 | 6 | 5 | 0 | 2 | 1 | 0 | łatwiejszy | — | typowy | rachunek: „Za trudne” daje propozycję niezależnie od wyniku |
| RD-02-W6 | 2 | 5 | 1 | 2 | 0 | 1 | wstrzymana | — | granica | rachunek: najniższy krok nie ma łatwiejszego |
| RD-02-W7 | brak | 5 | 1 | 2 | 0 | 0 | brak | — | błąd | rachunek: brak wyniku (seria pominięta) nie jest niepowodzeniem |

### RD-03: Przypomnienie o konsultacji przed testem i treningiem
- Wzór: przypomnienie o konsultacji z lekarzem przed testem maksymalnym i treningiem, gdy użytkownik zaznaczy `objawy = 1` albo `znana choroba = 1`; bez odpowiedzi ankieta nie przechodzi dalej
- Jednostki: objawy [-] (1 = tak), znana choroba [-] (1 = tak; sercowo-naczyniowa, metaboliczna, nerkowa), przypomnienie [-] (1 = pokazane)
- Granica: brak
- Podstawa: S-17 (czynniki przesiewu: aktywność, objawy lub znana choroba, planowana intensywność), S-01 (przypomnienie o lekarzu), S-16 (osoby z chorobą przewlekłą: aktywność zgodnie z możliwościami)
- Krytyczna: tak
- Uproszczenie: tylko przypomnienie, bez blokady i bez diagnozy (DP-24); pełny algorytm przesiewu i brzmienie pytań — OP-14.

| ID | Objawy [-] | Znana choroba [-] | Oczekiwane: przypomnienie [-] | Tolerancja | Rodzaj | Pochodzenie |
|---|---|---|---|---|---|---|
| RD-03-W1 | 0 | 0 | 0 | 0 | typowy | S-17: bez objawów i choroby przesiew nie wskazuje konsultacji |
| RD-03-W2 | 1 | 0 | 1 | 0 | typowy | S-17, S-01 |
| RD-03-W3 | 0 | 1 | 1 | 0 | typowy | S-17, S-01 |
| RD-03-W4 | 1 | 1 | 1 | 0 | typowy | S-17, S-01 |
| RD-03-W5 | brak | 0 | brak wyniku | — | błąd | rachunek: brak odpowiedzi zatrzymuje ankietę |

### RD-04: Krok startowy z wyniku testu
- Wzór: krok startowy = najwyższy krok `i`, dla którego `wynik testu ≥ próg wejścia kroku i`; krok 1 nie ma progu; wynik poniżej progu kroku 2 daje krok 1
- Jednostki: wynik testu i progi [powt.] albo [s]; krok startowy [-]
- Granica: `wynik = próg` daje ten krok (włącznie)
- Podstawa: S-15 (progresja jako proces „individualized”), rachunek; progi wejścia i ewentualny margines bezpieczeństwa (start krok niżej): OP-06; sposób oceny: DK-04
- Krytyczna: tak (za wysoki start grozi przeciążeniem)
- Uproszczenie: jeden test na drabinę; kilka testów i ankieta — DK-04.

| ID | Wynik testu [powt.] | Próg kroku 2 [powt.] | Próg kroku 3 [powt.] | Oczekiwane: krok startowy [-] | Tolerancja | Rodzaj | Pochodzenie |
|---|---|---|---|---|---|---|---|
| RD-04-W1 | 6 | 3 | 8 | 2 | 0 | typowy | rachunek: 3 ≤ 6 < 8 (progi testowe) |
| RD-04-W2 | 3 | 3 | 8 | 2 | 0 | granica | rachunek: wynik = próg kroku 2 |
| RD-04-W3 | 2 | 3 | 8 | 1 | 0 | poniżej | rachunek: poniżej progu kroku 2 |
| RD-04-W4 | 20 | 3 | 8 | 3 | 0 | powyżej | rachunek: najwyższy krok drabiny testowej |
| RD-04-W5 | 0 | 3 | 8 | 1 | 0 | granica | rachunek: zero powtórzeń to krok 1 |
| RD-04-W6 | -1 | 3 | 8 | błąd danych | — | błąd | rachunek: wynik < 0 to błędne dane; test do powtórzenia |

### RD-05: Termin testu kontrolnego
- Wzór: test kontrolny proponowany, gdy `dni od ostatniego testu ≥ T`
- Jednostki: dni [d], T [d], propozycja [-] (1 = pokazana)
- Granica: `dni = T` (włącznie)
- Podstawa: rachunek; T: OP-07 (notatka koordynatora 25.10.2026 „co ~4 tygodnie” to wskazówka, nie źródło); przełożenie testu — DK-05
- Krytyczna: nie

| ID | Dni od testu [d] | T [d] | Oczekiwane: propozycja [-] | Tolerancja | Rodzaj | Pochodzenie |
|---|---|---|---|---|---|---|
| RD-05-W1 | 35 | 28 | 1 | 0 | typowy | rachunek: 35 ≥ 28 (T testowe) |
| RD-05-W2 | 28 | 28 | 1 | 0 | granica | rachunek: dni = T |
| RD-05-W3 | 27 | 28 | 0 | 0 | poniżej | rachunek: 27 < 28 |
| RD-05-W4 | 29 | 28 | 1 | 0 | powyżej | rachunek: 29 ≥ 28 |
| RD-05-W5 | -1 | 28 | 0 | 0 | błąd | rachunek: data testu z przyszłości (zmiana zegara) nie daje propozycji |

### RD-06: Powrót po przerwie
- Wzór: przed pierwszym treningiem po przerwie `dni bez treningu drabiny ≥ B` aplikacja proponuje bezpieczny powrót (test kontrolny albo łatwiejszy krok — OP-08) zamiast kontynuacji bez zmian
- Jednostki: dni [d], B [d], propozycja [-] (1 = pokazana)
- Granica: `dni = B` (włącznie)
- Podstawa: S-14 („gradual progressive overload, careful attention to recovery”), S-15, rachunek; B i rodzaj powrotu: OP-08
- Krytyczna: tak (powrót na krok sprzed przerwy grozi przeciążeniem)
- Uproszczenie: zasada stopniowości przeniesiona na powrót po przerwie (analogia); propozycja do zatwierdzenia (DP-17).

| ID | Dni bez treningu [d] | B [d] | Oczekiwane: propozycja [-] | Tolerancja | Rodzaj | Pochodzenie |
|---|---|---|---|---|---|---|
| RD-06-W1 | 30 | 14 | 1 | 0 | typowy | rachunek: 30 ≥ 14 (B testowe) |
| RD-06-W2 | 14 | 14 | 1 | 0 | granica | rachunek: dni = B |
| RD-06-W3 | 13 | 14 | 0 | 0 | poniżej | rachunek: 13 < 14 |
| RD-06-W4 | 15 | 14 | 1 | 0 | powyżej | rachunek: 15 ≥ 14 |
| RD-06-W5 | -2 | 14 | 0 | 0 | błąd | rachunek: data z przyszłości nie daje propozycji |

### RD-07: Zgłoszenie bólu w trakcie treningu
- Wzór: „Boli” przy ćwiczeniu → to ćwiczenie jest dziś pominięte (bez zapisu jako niepowodzenie w RD-02) i pokazuje się zdanie o konsultacji ze specjalistą, gdy ból nie mija; bez diagnozy
- Jednostki: ból [-] (1 = zgłoszony), pominięte [-] (1 = tak), zdanie o specjaliście [-] (1 = pokazane), niepowodzenie [-] (1 = liczone do RD-02)
- Granica: brak
- Podstawa: S-01 (przypomnienie o lekarzu, ostrzejsza ocena aplikacji medycznych), DP-24
- Krytyczna: tak
- Uproszczenie: co dzieje się z drabiną po zgłoszeniu bólu — DK-06; treść komunikatu — OP-12.

| ID | Ból [-] | Wynik [powt.] | m [powt.] | Oczekiwane: pominięte [-] | Oczekiwane: zdanie o specjaliście [-] | Oczekiwane: niepowodzenie [-] | Tolerancja | Rodzaj | Pochodzenie |
|---|---|---|---|---|---|---|---|---|---|
| RD-07-W1 | 1 | 0 | 5 | 1 | 1 | 0 | 0 | typowy | S-01, DP-24: ból przed pierwszą serią |
| RD-07-W2 | 0 | 6 | 5 | 0 | 0 | 0 | 0 | typowy | rachunek: bez bólu i bez niepowodzenia trening bez zmian |
| RD-07-W3 | 1 | 2 | 5 | 1 | 1 | 0 | 0 | typowy | rachunek: wynik poniżej m przy zgłoszonym bólu nie jest niepowodzeniem (RD-02) |
| RD-07-W4 | 0 | 2 | 5 | 0 | 0 | 1 | 0 | typowy | rachunek: bez bólu wynik poniżej m to niepowodzenie (RD-02) |
| RD-07-W5 | brak | 6 | 5 | 0 | 0 | 0 | 0 | błąd | rachunek: brak zgłoszenia traktowany jak 0 |

### RD-08: Dzień treningowy w darmowym limicie
- Wzór: ukończony trening na żywo zużywa dzień, gdy `czas bez pauz > 7 min` (DP-32); kilka takich treningów jednego dnia zużywa jeden dzień; trening wstecz, import, anulowany i trwający nie zużywają dnia; limit 5 dni w miesiącu kalendarzowym (DP-02)
- Jednostki: czas [min], na żywo [-] (1 = trening na żywo), dzień zużyty [-]
- Granica: 7 min ostro (`> 7`); 7 min nie zużywa dnia
- Podstawa: decyzje DP-02, DP-32 (Trening `lib/access.ts`)
- Krytyczna: nie

| ID | Czas [min] | Na żywo [-] | Oczekiwane: dzień zużyty [-] | Tolerancja | Rodzaj | Pochodzenie |
|---|---|---|---|---|---|---|
| RD-08-W1 | 30 | 1 | 1 | 0 | typowy | DP-32 |
| RD-08-W2 | 7 | 1 | 0 | 0 | granica | DP-32: granica ostra |
| RD-08-W3 | 6,99 | 1 | 0 | 0 | poniżej | DP-32 |
| RD-08-W4 | 7,02 | 1 | 1 | 0 | powyżej | DP-32 |
| RD-08-W5 | 30 | 0 | 0 | 0 | typowy | DP-32: trening wstecz nie zużywa dnia |
| RD-08-W6 | -5 | 1 | 0 | 0 | błąd | rachunek: czas < 0 to błędne dane |
