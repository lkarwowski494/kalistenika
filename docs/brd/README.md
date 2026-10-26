# BRD: Kalistenika (nazwa robocza) — aplikacja prowadząca do umiejętności z masą ciała
Stan: E3 po decyzjach DK-04…DK-07 i badaniach R-01…R-13 (rola 01, build); przed E4 czekają DK-08…DK-11 · Aktualizacja: 2026-10-26 · Hierarchia źródeł: Treningu (DM-01) · Kontrola: `node scripts/kontrola-brd.mjs docs/brd` (kod 0)

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

**Czekają (pytania do właściciela przez koordynatora, z badań R-01…R-13):** DK-08 cele pierwszej wersji (OP-26), DK-09 wiek (OP-27), DK-10 ciągnięcie bez drążka (OP-28), DK-11 zakup książek (OP-29). Wymagania od nich zależne (BR-PLN-001, BR-PLN-004, BR-STA-003, BR-STA-004, BR-PST-002) nie przechodzą do E4.

## Blokery wydania

- BR-DAN-001, BR-DAN-002, BR-DAN-003, NFR-DAN-001, NFR-DAN-002: utrata lub zepsucie danych.
- NFR-PRV-001, BR-JEZ-002: obietnica prywatności i anonimowości źródeł.
- BR-STA-002, BR-STA-004, BR-BEZ-001, BR-BEZ-002, BR-TST-001, NFR-BEZ-001: bezpieczeństwo i reguły krytyczne (RD-01, RD-03, RD-04, RD-06, RD-07).
- BR-PLN-001, BR-TRN-005: krok albo wskazówka bez źródeł nie wchodzi (RYZ-03).
- BR-STA-001, BR-TRN-001, BR-ZMK-001, BR-ZMK-002: główny przepływ.
- BR-ZAK-001: polityka sklepu (OG-07) i model dostępu.
- OG-01: odrębność od Treningu (RYZ-01, ryzyko otwarte do pierwszego zgłoszenia).

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
| OP-15 | [DO USTALENIA] zamiennik ciągnięcia bez drążka — stan 26.10: brak źródeł; decyzja DK-10 | badacz | BR-PLN-004 |
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
| OP-26 | [DO WYJAŚNIENIA] DK-08: cele pierwszej wersji wobec drabin niepotwierdzonych do celu (badania R-01) | właściciel | H-02, BR-PLN-001, BR-PST-002 |
| OP-27 | [DO WYJAŚNIENIA] DK-09: wiek — aplikacja bez nadzoru a młodzież (S-36) | właściciel | BR-STA-004 |
| OP-28 | [DO WYJAŚNIENIA] DK-10: ciągnięcie bez drążka (badacz: brak źródeł zamiennika) | właściciel | BR-PLN-004 |
| OP-29 | [DO WYJAŚNIENIA] DK-11: zakup legalnych kopii książek jako źródeł szczebla 3 | właściciel | OP-01 |
| OP-30 | [DO WYJAŚNIENIA] co po odpowiedzi „Tak” na „Nadal boli?” (pominąć znowu, pytać przy każdym treningu, tekst o specjaliście) — wynika z DK-06, bez analogii w Treningu | właściciel | BR-BEZ-001, RD-07 |
