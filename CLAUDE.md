# Kalistenika (nazwa robocza)
Aplikacja na iPhone'a, która prowadzi osobę ćwiczącą z masą ciała krok po kroku do konkretnej umiejętności (np. od podciągania negatywnego do muscle-upu), z planem dobieranym sam i bez ręcznej edycji. Stan i następny krok: `docs/sztafeta.md`.

## Stan projektu (aktualizacja: 2026-10-26)
- Etap: pomysł; specyfikacja i BRD (rola 01). Kod dopiero po odświeżeniu bramki opłacalności danymi Treningu z App Store Connect, ok. 8 tygodni po premierze Treningu (DK-03 = A, 26.10.2026).
- Sklep (App Store Connect / Google Play): nic. Tylko iOS; Android po 8 tygodniach danych (jak Trening, DEC-26).
- Rynek główny: globalny w 35 językach; największy popyt US i rynki anglojęzyczne (`docs/monetyzacja.md`) · repo treści prywatnych: brak (cudze treści na Dysku, „Trening App / 05 Research konkurencji”).
- Standard marki: wysoki (bez reklam i SDK śledzących, App Privacy „Data Not Collected”, jak Trening); opłacalność pokazuje rola 02.
- Próg opłacalności: 500 USD netto/rok globalnie (D-024, jak Trening). Werdykt kroku 0: budować, warunkowo.
- Polityka języków: szeroka (35 jak Trening, D-026).
- Przegląd treści krytycznych: człowiek (domyślny, C-003).
- Cel: plan prowadzący do umiejętności, który sam się dostosowuje (test na start, test kontrolny, „za trudne → łatwiejszy wariant”), żeby użytkownik z ograniczeniem nie utknął (właściciel, Trening docs/18, 25.10.2026).

## Stos
Silnik Treningu jako wspólny pakiet wydzielony po Treningu 1.1 (katalog ćwiczeń, figury v2, zapis, zegarek, Zdrowie; właściciel 26.10.2026). Expo i TypeScript jak Trening; decyzje w `docs/adr/` (rola 05). Kodu jeszcze nie ma.

## Komendy
- kontrola BRD: `node scripts/kontrola-brd.mjs docs/brd` (kod 0 wymagany) · wektory: `node scripts/kontrola-brd.mjs docs/brd --wektory > tests/wektory/brd.json`
- instalacja, testy, typy, lint: [DO USTALENIA] (rola 05/07, gdy powstanie kod)

## Dokumenty (źródło prawdy, rola)
- `docs/decyzje.md` (decyzje produktowe DK, przejęte z Treningu DP, merytoryczne DM), `docs/zalozenia.md`, BRD `docs/brd/` (01)
- `docs/monetyzacja.md` i `docs/monetyzacja/` (02)
- kontrakt zakresu `docs/scope-contract.md` (03), projekt `docs/design/` (04), ADR `docs/adr/` (05), rejestr twierdzeń (06)

## Zobowiązania na przyszłość (właściciel 28.10.2026)
- Akcje z warunkiem startu w przyszłości (data albo zdarzenie) żyją w `docs/zobowiazania.md`, nie w pamięci sesji. Przed planem przeczytaj sekcję „Aktywne” (hak `SessionStart` w `.claude/settings.json` wypisuje ją na starcie) i wykonuj akcje ze spełnionym warunkiem; nowe ustalenie z terminem dopisz od razu, zrobione przenieś do „Archiwum”.

## Zasady (przejęte z Treningu: reguły właściciela dla wszystkich jego aplikacji)
- **Reguła decyzji (właściciel 26.10.2026):** decyzje takie same jak w Treningu; każdą przejętą zapisz w `docs/decyzje.md` z odnośnikiem. Tylko decyzja bez analogii idzie do właściciela: 3 opcje z kompromisami i rekomendacją. *Dlaczego:* aplikacje studia działają według jednego zestawu zasad.
- Repo PUBLICZNE (ADR-031 Treningu) na prywatnym koncie właściciela (`lkarwowski494/kalistenika`) do pierwszego wydania na produkcji (App Store); przeniesienie do organizacji Apps4Brew dopiero po nim (DK-16, właściciel 28.10.2026). Żadnych sekretów (klucze, tokeny, certyfikaty, .p8/.p12, .env) ani danych osobowych (UDID, e-mail); przed commitem `git diff --cached`. Logi i artefakty CI też są publiczne.
- Narzędzia 0 zł poza opłatą Apple; macOS w GitHub Actions jest darmowy tylko przy repo publicznym. Bez serwera, konta i analityki.
- Testy przed kodem. Każdy błąd z audytu dostaje test, który go odtwarza. Każda funkcja przy wdrażaniu ma pełen zakres testów automatycznych (definicja ukończenia jak Trening docs/20); każdy realny przepływ ma scenariusz Maestro albo wyjątek z powodem.
- Zero utraty danych: migracja w transakcji, test na kopii bazy poprzedniej wersji; kopia kompletna (WAL: `VACUUM INTO` albo checkpoint), zapis rekordu nadrzędnego przez UPSERT, nie `INSERT OR REPLACE`.
- Akcje i elementy tego samego typu działają w całej aplikacji tak samo (wzorce interakcji Treningu docs/32; okno z dołu ma „Anuluj” po lewej w nagłówku). Wygląd tylko z systemu w `docs/design/` (rola 04).
- Liczby (progi, limity, czasy) w jednym miejscu; dokumenty generowane z kodu, nie przepisywane ręcznie. Nie zgaduj liczb nieznanego pochodzenia — `[DO USTALENIA]`.
- Lekcje po błędach (zasada właściciela 14.10.2026, wszystkie projekty): po błędzie, który dotarł do właściciela lub testera, nieudanym wydaniu albo błędnej informacji — od razu wpis w `docs/40-lekcje.md` (co, przyczyna źródłowa, akcje-mechanizmy, ocena zakresu lokalna/systemowa). Ryzyko „rozstrzygnie build” → rejestr ryzyk z warunkiem zamknięcia; otwarte ryzyko blokuje wydanie.
- Zmiana budowania, podpisu lub wysyłki trafia do scalenia dopiero po prawdziwym przebiegu dowodowym na gotowym produkcie. Po każdym TestFlight krótka lista kontrolna dla właściciela na telefonie.
- Praca na gałęzi funkcji; scalenie do `main` tylko na polecenie właściciela. Wysyłka do TestFlight i App Store tylko po zatwierdzeniu właściciela.
- Decyzje produktowe należą do właściciela: co najmniej dwie opcje z kompromisami i rekomendacja. Estymacje: czas pracy agenta, osobno oczekiwanie (CI, Apple) i czas właściciela.
- Audyty i wydania jak Trening (09.10.2026): wydanie blokują tylko znaleziska KRYTYCZNE i WYSOKIE; jeden audyt na wydanie; zamrożenie zakresu; ocena realności (realny / brzegowy / teoretyczny).
- Podział pracy na agentów (20.10.2026): niezależne kawałki według obszaru plików, każdy we własnym worktree; pliki generowane i pełne verify raz, po scaleniu.

## Merytoryczne podstawy (zasada właściciela z 4.10.2026, wszystkie aplikacje)
- Wszystko, czego aplikacja uczy albo co twierdzi (treść, liczby, zalecenia, reguły i mechaniki dziedzinowe), ma merytoryczne podstawy; ta zasada ma pierwszeństwo przed domyślnym sposobem pracy.
- Hierarchia źródeł dla treningu i zdrowia (DM-01, przejęta z Treningu): 1) rachunek i wzory z publikacji źródłowych, sprawdzone niezależnie; 2) przeglądy systematyczne, metaanalizy, stanowiska organizacji naukowych (np. ACSM, NSCA); 3) pojedyncze badania recenzowane (najlepiej RCT) i książki uznanych autorów; 4) uznane serwisy specjalistyczne i dokumentacja producentów; 5) praktyka i opinie trenerów tylko jako wskazówka. Przy sprzeczności wygrywa wyższy szczebel; na tym samym — część wspólna i różnica.
- Kilka niezależnych źródeł (najlepiej szczeble 2–3); jedno źródło szczebla 1–2, które zawiera twierdzenie wprost, wystarcza; jedno źródło szczebla 3–5 — oznaczenie „jedno źródło”. „Uproszczenie” (także analogia do innego ćwiczenia) i „konwencja” oznacza się zawsze.
- Wskazówki techniki (25.10.2026): ustawienie, przebieg ruchu, częste błędy — ustalone przy 2 zgodnych niezależnych źródłach szczebla 4; liczby i twierdzenia o zdrowiu według zasad wyżej.
- Każde twierdzenie ma przeczytane źródło (adres i cytat albo dokładne miejsce); streszczenie z wyszukiwarki nie jest źródłem. Czego nie da się potwierdzić — otwarte pytania, nie aplikacja.
- Właściciel nie rozstrzyga kwestii merytorycznych (rozstrzyga hierarchia); może każdą decyzję zawetować.
- Źródła publicznie anonimowo (25.10.2026): aplikacja, strona i opis sklepu nie wymieniają źródeł ani organizacji; źródła tylko w wewnętrznym rejestrze w repo.
- Teksty naturalne (25.10.2026): jak powiedziałby trener albo kolega na siłowni w tym języku, bez pouczania.
- Aplikacja nie udziela porad medycznych; przy bólu, urazie lub chorobie odsyła do specjalisty. Aplikacja nie jest skierowana do dzieci.
- Program treningowy z kilku źródeł, nie kopia jednego układu (prawo autorskie do układu programu; Trening docs/18, 25.10.2026).

## Treści cudze i nazwy innych firm (zasada właściciela 9.10.2026)
- Research konkurencji, cytaty ze stron i opisy innych aplikacji na Dysku („Trening App / 05 Research konkurencji”); w repo tylko kody K-nn i własne wnioski. Cytat w repo najwyżej 1–2 zdania z adresem.
- Nazwy innych aplikacji i marek nie w kodzie, komentarzach, tekstach aplikacji ani opisie App Store (wytyczne 2.3.7, 5.2.1).

# Compact instructions
Zachowaj rolę i tryb, ID zadań (BR, RD, OP, DK, ZAL), wyniki kontroli BRD, zmienione pliki i otwarte decyzje.
