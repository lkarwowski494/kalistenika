# Rejestr założeń

| ID | Założenie | Rola | Status | Dowód (źródło, data) | Zależą od niego |
|---|---|---|---|---|---|
| ZAL-001 | Osobna aplikacja (nie moduł Treningu) ma własne miejsce w wynikach App Store | właściciel / analityk | hipoteza | decyzja właściciela 25.10.2026 (Trening docs/18); bez danych | DK-03, ryzyko 4.3 |
| ZAL-002 | Ludzie płacą za plan prowadzący do umiejętności (progresja, dopasowanie) | analityk | **potwierdzone (R)** | recenzje płacących K-03, K-09 (US, 2026-10-26), płatne plany K-01…K-12 | WTP-1 rdzenia, DP-02 |
| ZAL-003 | Model Treningu M5 S1 pasuje do kalisteniki | analityk (A1) | hipoteza | bramka: normalny 704 USD > 500 USD (2026-10-26); sesja 2 sprawdza limit dni (ZAL-008) | DP-02 |
| ZAL-004 | Wspólna subskrypcja z Treningiem wymaga serwera i logowania | analityk | **potwierdzone** | MS-07 (StoreKit „Offering a subscription across multiple apps”), MS-06 (app bundles), 2026-10-26 | DK-01 |
| ZAL-005 | Ryzyko 4.3(a) przy dwóch aplikacjach na jednym silniku | analityk | hipoteza (ryzyko otwarte) | MS-03; rozstrzygnie pierwsze zgłoszenie | portfel |
| ZAL-006 | Nowa aplikacja nie potrzebuje płatnej reklamy, by zdobyć 1% pobrań kategorii | 02 | hipoteza | `[ZAŁOŻENIE]` udział 0,3% / 1% / 3% | werdykt |
| ZAL-007 | Przyrost ocen K-05…K-07 to popyt, nie płatna reklama | 02 | hipoteza (rozstrzyga werdykt) | bez niego wynik 381 USD → „odłożyć” | werdykt, OP-02 |
| ZAL-008 | Limit 5 dni treningowych w miesiącu ma przy kalistenice ten sam sens co w Treningu (plany 2–4 sesje/tydz.) | 02 | hipoteza | sprawdza sesja 2 roli 02 z BRD i badaczem | DP-02 |
| ZAL-009 | Pobrania na ocenę 20 / 60 / 200, konwersja 1% / 2% / 4% | 02 | hipoteza `[ZAŁOŻENIE]` | najtańsze sprawdzenie: dane Treningu z ASC po 8 tygodniach | werdykt, OP-01 |
| ZAL-010 | Mocne darmowe alternatywy obniżają zakup (mnożnik 0,5 / 0,7 / 0,9) | 02 | hipoteza | K-02, K-12 z darmowymi progresjami (recenzje 2026-10-26) | werdykt |
| ZAL-011 | Cztery drabiny (podciąganie → muscle-up, pompka → na jednej ręce, przysiad → pistolet, deska → L-sit) dadzą się oprzeć na źródłach w pierwszej wersji | 01 (z propozycji analityka) | **podważone** | badania R-01 (badacz, 2026-10-26): żadna drabina nie jest potwierdzona do celu, L-sit otwarty w całości; DK-08: pełne cele mimo to, kroki otwarte blokują v1 | H-02, BR-PLN-001 |
| ZAL-012 | Krótka ankieta + test w pierwszym treningu ustali krok startowy bezpieczniej niż sama ankieta | 01 | hipoteza (wybrana DK-04; kierunek zgodny ze źródłami, progi konwencja — R-06) | 7 z 13 konkurentów deklaruje test lub ocenę (opisy sklepu, 2026-10-26); recenzja K-02 chwali ankietę startową (S-20) | DK-04, H-03, BR-STA-003 |
| ZAL-013 | Ćwiczenia na czas zyskują na zegarku tak jak trening siłowy w Treningu | 01 | hipoteza | recenzja K-01 o wracaniu do telefonu co 30 s (S-26, 2026-10-26) | H-04, BR-ZEG-001 |
| ZAL-014 | Praca offline i bez konta wyróżnia aplikację | 01 | hipoteza | 0 z 13 opisów wspomina offline; skargi na brak offline i na konto (S-20, S-28; 2026-10-26) | H-06, NFR-KON-001 |
| ZAL-015 | Figury v2 i krótkie wskazówki wystarczą do nauki techniki bez wideo | 01 | hipoteza | przeciw: 67 recenzji o technice i wideo (2026-10-26); sprawdzenie: recenzje po premierze | H-07, BR-TRN-005 |
| ZAL-016 | Recenzje konkurencji (US) dobrze opisują prace użytkowników bez rozmów z nimi | 01 | hipoteza | 642 wpisy, 8 aplikacji (2026-10-26); sprawdzenie: rozmowy z 3–5 osobami (BRD OP-24) | J-01…J-10, P-1…P-3 |
