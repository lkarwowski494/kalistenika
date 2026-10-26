# BRD: Kalistenika (nazwa robocza) — aplikacja prowadząca do umiejętności z masą ciała
Stan: E3 (szkic do bramki właściciela; rola 01, build) · Aktualizacja: 2026-10-26 · Hierarchia źródeł: Treningu (DM-01) · Kontrola: `node scripts/kontrola-brd.mjs docs/brd` (kod 0)

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

## Decyzje dla właściciela (bez analogii w Treningu)

Każda decyzja: trzy opcje, kompromis, rekomendacja. Pozostałe sprawy produktowe przejęto z Treningu (`docs/decyzje.md`, DP-17…DP-36).

**DK-04: Jak ustalić poziom na starcie?** (OP-20; RD-04, BR-STA-003)
- A. **Krótka ankieta (np. „ile pompek, podciągnięć robisz”) + test w pierwszym treningu, który koryguje krok (rekomendacja).** Start w minutę; pierwszy trening potwierdza poziom w bezpiecznych warunkach (po rozgrzewce). Kompromis: pierwszy trening może zmienić krok z podglądu planu.
- B. Tylko ankieta. Najszybciej; kompromis: ludzie źle szacują swoje możliwości `[OCENA]`, więc start bywa za wysoki — reguła krytyczna RD-04 bez pomiaru.
- C. Test przed planem (osobna sesja testowa przed podglądem). Najdokładniej; kompromis: dłuższy start, test maksymalny przed rozgrzewką i zanim użytkownik zna aplikację (OG-03).

**DK-05: Co, gdy użytkownik nie chce dziś testu kontrolnego?** (OP-21; RD-05, BR-TST-002)
- A. **Przełożenie raz o tydzień, potem test przy najbliższym treningu z możliwością pominięcia (rekomendacja).** Jasna zasada, test nie znika na zawsze. Kompromis: pominięty test opóźnia dopasowanie planu.
- B. Przełożenie na następny trening, bez limitu. Najmniej presji; kompromis: test może nie odbyć się nigdy, plan zależy wtedy tylko od RD-01 i RD-02.
- C. Test obowiązkowy w terminie. Plan zawsze aktualny; kompromis: presja sprzeczna z OG-03 i ryzyko porzucenia aplikacji.

**DK-06: Co dzieje się z drabiną po „Boli”?** (OP-22; RD-07, BR-BEZ-001)
- A. **Drabina wstrzymana do ręcznego wznowienia; inne drabiny działają dalej (rekomendacja).** Nie wraca automatycznie do ćwiczenia, które bolało; użytkownik decyduje po konsultacji. Kompromis: jeden dotyk więcej przy błahym bólu.
- B. Tylko pominięcie dziś; przy następnym treningu krok bez zmian, pytanie „Nadal boli?”. Najmniej tarcia; kompromis: powtarzalny ból wraca co trening.
- C. Propozycja łatwiejszego kroku (jak „Za trudne”). Trening trwa; kompromis: łatwiejszy wariant tego samego ruchu sugeruje poradę leczniczą, której aplikacja nie daje (DP-24).

**DK-07: Co po osiągnięciu umiejętności docelowej?** (OP-23; BR-PST-002, RD-02)
- A. **Plan podtrzymania (ostatni krok rzadziej) + propozycja kolejnego celu do wyboru (rekomendacja).** Umiejętność nie zanika, użytkownik ma następny cel bez ręcznej edycji. Kompromis: podtrzymanie wymaga liczb od badacza (OP-04).
- B. Drabina zamknięta, propozycja nowego celu. Najprościej; kompromis: brak treningu osiągniętej umiejętności.
- C. Drabina kontynuowana trudniejszymi wariantami (np. z obciążeniem). Najdłuższa ścieżka; kompromis: nowe kroki i źródła, ryzyko kombajnu (ZP-09).

## Blokery wydania

- BR-DAN-001, BR-DAN-002, BR-DAN-003, NFR-DAN-001, NFR-DAN-002: utrata lub zepsucie danych.
- NFR-PRV-001, BR-JEZ-002: obietnica prywatności i anonimowości źródeł.
- BR-STA-002, BR-BEZ-001, BR-BEZ-002, BR-TST-001, NFR-BEZ-001: bezpieczeństwo i reguły krytyczne (RD-01, RD-03, RD-04, RD-06, RD-07).
- BR-PLN-001, BR-TRN-005: krok albo wskazówka bez źródeł nie wchodzi (RYZ-03).
- BR-STA-001, BR-TRN-001, BR-ZMK-001, BR-ZMK-002: główny przepływ.
- BR-ZAK-001: polityka sklepu (OG-07) i model dostępu.
- OG-01: odrębność od Treningu (RYZ-01, ryzyko otwarte do pierwszego zgłoszenia).

## Otwarte pytania

| ID | Pytanie | Rozstrzyga | Dotyczy |
|---|---|---|---|
| OP-01 | [DO USTALENIA] R-01: kroki każdej drabiny (kolejność, warianty, miara: powtórzenia albo czas) z kilku źródeł | badacz (szczebel 2–3; wskazówki techniki DM-02) | BR-PLN-001, H-02 |
| OP-02 | [DO USTALENIA] R-02: kryterium przejścia n i k dla kroków z masą ciała (analogia S-12 do potwierdzenia) | badacz, rola 06 | RD-01 |
| OP-03 | [DO USTALENIA] R-03: zakresy powtórzeń i czasów każdego kroku (cel) | badacz | RD-01, RD-02 |
| OP-04 | [DO USTALENIA] R-04: częstotliwość, serie, przerwy, wysiłek; zakres dni w tygodniu; podtrzymanie umiejętności | badacz | BR-PLN-002, DK-07 |
| OP-05 | [DO USTALENIA] R-05: próg niepowodzenia m i liczba sesji f | badacz | RD-02 |
| OP-06 | [DO USTALENIA] R-06: progi wejścia kroków i margines bezpieczeństwa startu | badacz, rola 06 | RD-04 |
| OP-07 | [DO USTALENIA] R-07: odstęp testu kontrolnego T | badacz | RD-05 |
| OP-08 | [DO USTALENIA] R-08: próg przerwy B i rodzaj powrotu (test czy krok niżej) | badacz, rola 06 | RD-06 |
| OP-09 | [DO USTALENIA] R-09: protokół testu maksymalnego i jego bezpieczeństwo | badacz, rola 06 | BR-TST-001, RD-04 |
| OP-10 | [DO USTALENIA] R-10: negatywy i guma oporowa jako kroki (kolejność, kryteria) | badacz | BR-PLN-004 |
| OP-11 | [DO USTALENIA] R-11: warunki wstępne muscle-upa | badacz, rola 06 | OP-01 |
| OP-12 | [DO USTALENIA] R-12: komunikat przy bólu i kiedy odesłać do specjalisty (bez porady medycznej) | badacz, rola 06 | RD-07 |
| OP-13 | [DO USTALENIA] R-13: rozgrzewka przed treningiem i testem | badacz | BR-TRN-004 |
| OP-14 | [DO USTALENIA] pełny algorytm przesiewu (pełny tekst S-17) i brzmienie pytań ankiety bez porady medycznej | badacz, rola 06 | RD-03 |
| OP-15 | [DO USTALENIA] zamiennik ciągnięcia bez drążka | badacz | BR-PLN-004 |
| OP-16 | [DO USTALENIA] czy figury v2 obsłużą pozycje statyczne (zwis, L-sit, stanie na rękach) | rola 05 | BR-TRN-005, RYZ-07 |
| OP-17 | [DO WYJAŚNIENIA] ile drabin naraz w planie (jedna aktywna czy kilka) | rola 03 z właścicielem | H-02, BR-PLN-002 |
| OP-18 | [DO USTALENIA] najmniejszy cel dotyku i kontrast w treningu na żywo | rola 04 | NFR-KON-002 |
| OP-19 | [DO USTALENIA] typ i zakres powiadomień zegarka (powtórzenie zakresu Treningu na pakiecie silnika) | rola 05 | BR-ZEG-001 |
| OP-20 | [DO WYJAŚNIENIA] DK-04: ocena poziomu na starcie | właściciel | BR-STA-003 |
| OP-21 | [DO WYJAŚNIENIA] DK-05: przełożenie testu kontrolnego | właściciel | BR-TST-002 |
| OP-22 | [DO WYJAŚNIENIA] DK-06: drabina po zgłoszeniu bólu | właściciel | BR-BEZ-001 |
| OP-23 | [DO WYJAŚNIENIA] DK-07: co po osiągnięciu umiejętności | właściciel | BR-PST-002 |
| OP-24 | [DO WYJAŚNIENIA] rozmowy z 3–5 osobami ćwiczącymi kalistenikę (krok właściciela, opcjonalny; notatki poza repo) — prace i persony opierają się dziś na recenzjach | właściciel | J-01…J-10, P-1…P-3 |
| OP-25 | [DO USTALENIA] recenzje rynków poza US i Google Play nie były czytane | rola 02 (sesja 2) | rynek |
