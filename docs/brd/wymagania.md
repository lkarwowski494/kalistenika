# BRD Kalistenika — przepływy (PR), wymagania funkcjonalne (BR) i niefunkcjonalne (NFR)
Stan: E3 · Aktualizacja: 2026-10-26

Lista jest szeroka (zasada roli 7): obejmuje wszystko, na co wskazują dowody; cięcie na pierwszą wersję należy do roli 03 (H-02, H-04). Liczby w kryteriach pochodzą z wektorów RD albo z decyzji; parametry merytoryczne są otwarte (OP-01…OP-13). Każdy przepływ dostanie scenariusz Maestro albo wyjątek z powodem (DP-33).

## Przepływy

### PR-01: Pierwsze uruchomienie
- P-1, P-2, P-3 · J-01, J-07. Kroki: otwiera aplikację bez logowania → krótka ankieta bezpieczeństwa → wybór celu (1 lub więcej drabin, H-02) → sprzęt i miejsce → dni treningowe w tygodniu → ocena poziomu (DK-04) → podgląd planu → „Zaczynam”. Częstość: raz. Kontekst: dom, obie ręce wolne, offline.
### PR-02: Trening dnia
- P-1, P-2, P-3 · J-02, J-09. Kroki: otwiera „Dziś” → rozgrzewka → kolejne ćwiczenia kroku (serie na powtórzenia albo na czas) → wpis wyniku po serii → przerwa z odliczaniem → zakończenie i podsumowanie. Częstość: kilka razy w tygodniu (OP-04). Kontekst: telefon odłożony, ręce zajęte, muzyka w tle, offline.
### PR-03: Awans na trudniejszy krok
- P-1, P-2 · J-03. Kroki: po zaliczonej sesji aplikacja sprawdza RD-01 → propozycja „Następny krok” z podglądem → zatwierdza albo zostaje → „Cofnij” w podsumowaniu. Częstość: co kilka tygodni.
### PR-04: Za trudne i cofnięcie kroku
- P-1, P-3 · J-04. Kroki: nieudane sesje (RD-02) albo „Za trudne” w trakcie treningu → propozycja łatwiejszego kroku → zatwierdza → plan dalej; na najniższym kroku drabina „wstrzymana” i propozycja innego celu. Częstość: rzadko.
### PR-05: Ból w trakcie treningu
- P-1, P-2, P-3 · J-06. Kroki: „Boli” przy ćwiczeniu → ćwiczenie pominięte dziś → zdanie o specjaliście → trening dalej albo koniec; co z drabiną — DK-06. Częstość: rzadko. Kontekst: zmęczenie, stres.
### PR-06: Test kontrolny
- P-1, P-2 · J-05. Kroki: termin testu (RD-05) → zapowiedź w „Dziś” → rozgrzewka → test jednego ćwiczenia na drabinę → wynik → propozycja kroku (RD-04) → porównanie z poprzednim testem. Przełożenie — DK-05. Częstość: co kilka tygodni (OP-07).
### PR-07: Powrót po przerwie
- P-3 · J-08. Kroki: otwiera aplikację po przerwie (RD-06) → propozycja bezpiecznego powrotu → zatwierdza albo kontynuuje → trening dnia. Częstość: kilka razy w roku.
### PR-08: Postępy i droga drabiny
- P-2 · J-03, J-05. Kroki: „Umiejętności” → drabina z krokami (zaliczone, bieżący, następne) → szczegóły kroku i technika; „Postępy” → wyniki testów i sesji w czasie. Częstość: co tydzień.
### PR-09: Zmiana celu, sprzętu albo dni
- P-3 · J-07. Kroki: „Więcej” → cel, sprzęt, dni → nowy podgląd planu → zatwierdza; historia i zaliczone kroki zostają. Częstość: rzadko.
### PR-10: Dane: kopia, eksport, nowy telefon, aktualizacja, usunięcie
- P-1, P-2, P-3 · J-10. Kroki: „Więcej → Dane” → kopia zapasowa do pliku → przeniesienie na nowy telefon → import z kopią bezpieczeństwa; po aktualizacji dane bez zmian; usunięcie wszystkich danych z potwierdzeniem. Częstość: rzadko; po przywróceniu kopii — przepływ „po przywróceniu” (DP-33).
### PR-11: Dostęp i zakup
- P-1, P-2, P-3 · J-02. Kroki: start treningu ponad darmowy limit (RD-08) → ekran zakupu bez presji → zakup albo trening wstecz albo zamknięcie; przywracanie zakupów w „Więcej”. Częstość: raz w miesiącu na darmowym poziomie.
### PR-12: Zdrowie i zegarek
- P-2, P-3 · J-09, J-10. Kroki: zgoda na zapis do Zdrowia (opcjonalna) → trening zapisany jako trening siłowy z masą ciała; zegarek pokazuje bieżące ćwiczenie i przerwę, odhacza serię (DP-22). Częstość: każdy trening po włączeniu.
### PR-13: Ustawienia, języki, inne aplikacje
- P-1, P-2, P-3 · J-02. Kroki: „Więcej” → język, wygląd, dźwięk i wibracje, przypomnienia, zastrzeżenie medyczne, „Inne aplikacje studia”. Częstość: rzadko.

## Wymagania funkcjonalne

### BR-STA-001: Start bez konta z podglądem planu przed zapisem
- Przepływ: PR-01
- Dowód potrzeby: J-01, ZP-01, ZP-05; S-28 (konto jako bariera); DP-18, DP-19
- Kryteria akceptacji:
  - Scenariusz: Pierwsze uruchomienie
    - Zakładając, że użytkownik instaluje aplikację po raz pierwszy
    - Gdy przechodzi ankietę, wybiera cel, sprzęt i dni w tygodniu
    - Wtedy widzi podgląd planu (drabiny, krok startowy, dni) i przycisk „Zaczynam”, a plan zapisuje się dopiero po jego naciśnięciu
  - Scenariusz: Przerwanie w połowie
    - Zakładając, że użytkownik zamknął aplikację w trakcie ankiety
    - Gdy otwiera ją ponownie
    - Wtedy wraca do tego samego pytania, bez zapisanego planu
  - Scenariusz: Bez sieci
    - Zakładając, że telefon jest w trybie samolotowym
    - Gdy użytkownik przechodzi cały start
    - Wtedy plan powstaje bez komunikatu o braku sieci

### BR-STA-002: Ankieta bezpieczeństwa przed testem i treningiem
- Przepływ: PR-01 · Reguła: RD-03
- Dowód potrzeby: J-06; OG-02; S-17
- Kryteria akceptacji:
  - Scenariusz: Objawy lub znana choroba
    - Zakładając, że użytkownik zaznacza objawy albo znaną chorobę
    - Gdy kończy ankietę
    - Wtedy widzi przypomnienie o konsultacji z lekarzem przed testem i treningiem (RD-03-W2, RD-03-W3), bez blokady i bez diagnozy
  - Scenariusz: Brak przeciwwskazań
    - Zakładając, że użytkownik nie zaznacza objawów ani choroby
    - Gdy kończy ankietę
    - Wtedy przechodzi dalej bez przypomnienia (RD-03-W1)
  - Scenariusz: Brak odpowiedzi
    - Zakładając, że pytanie o objawy zostaje bez odpowiedzi
    - Gdy użytkownik próbuje przejść dalej
    - Wtedy przycisk „Dalej” jest nieaktywny (RD-03-W5)

### BR-STA-003: Ocena poziomu i krok startowy
- Przepływ: PR-01 · Reguła: RD-04
- Dowód potrzeby: J-01; S-15, S-20, S-29; H-03; DK-04
- zależy od: ZAL-012
- Kryteria akceptacji:
  - Scenariusz: Wynik między progami
    - Zakładając, że drabina ma progi wejścia kroków 2 i 3 równe 3 i 8 powtórzeń (wartości testowe)
    - Gdy wynik testu wynosi 6 powtórzeń
    - Wtedy podgląd planu pokazuje krok 2 (RD-04-W1)
  - Scenariusz: Zero powtórzeń
    - Zakładając, że użytkownik nie wykonał żadnego powtórzenia
    - Gdy zapisuje wynik
    - Wtedy plan zaczyna się od kroku 1 (RD-04-W5), bez słów o porażce
  - Scenariusz: Błędny wynik
    - Zakładając, że wpisany wynik jest ujemny
    - Gdy użytkownik zapisuje test
    - Wtedy aplikacja prosi o poprawny wynik i nie ustala kroku (RD-04-W6)

### BR-PLN-001: Drabina umiejętności z widoczną drogą
- Przepływ: PR-08
- Dowód potrzeby: J-03; S-23; motyw „progresja” 84 z 642 recenzji (`odkrywanie.md`); OG-01
- zależy od: ZAL-011
- Kryteria akceptacji:
  - Scenariusz: Widok drabiny
    - Zakładając, że użytkownik ma aktywną drabinę na kroku 3
    - Gdy otwiera „Umiejętności”
    - Wtedy widzi kroki 1–2 jako zaliczone, krok 3 jako bieżący z kryterium przejścia i kolejne kroki do celu
  - Scenariusz: Krok bez źródeł
    - Zakładając, że krok nie ma zamkniętego przeglądu źródeł (OP-01)
    - Gdy budowany jest katalog drabin
    - Wtedy krok nie trafia do aplikacji (test strażnik katalogu)

### BR-PLN-002: Plan tygodnia z wybranych dni
- Przepływ: PR-02
- Dowód potrzeby: J-02; S-13, S-16; DP-18
- Kryteria akceptacji:
  - Scenariusz: Trening w wybrany dzień
    - Zakładając, że użytkownik wybrał trzy dni w tygodniu
    - Gdy otwiera „Dziś” w jeden z nich
    - Wtedy widzi trening dnia z ćwiczeniami, seriami i celami bieżących kroków
  - Scenariusz: Dzień wolny
    - Zakładając, że dziś nie jest dniem treningowym
    - Gdy otwiera „Dziś”
    - Wtedy widzi najbliższy dzień treningowy i może zacząć trening mimo to
  - Szablon scenariusza: Liczba dni poza zakresem
    - Zakładając, że zakres dni ustalił badacz (OP-04)
    - Gdy użytkownik wybiera liczbę dni spoza zakresu
    - Wtedy aplikacja pokazuje zakres i nie zapisuje wyboru

### BR-PLN-003: Zmiana celu, sprzętu albo dni bez utraty historii
- Przepływ: PR-09
- Dowód potrzeby: J-07; DP-17, DP-18
- Kryteria akceptacji:
  - Scenariusz: Nowy cel
    - Zakładając, że użytkownik ma historię i zaliczone kroki
    - Gdy zmienia cel i zatwierdza podgląd nowego planu
    - Wtedy historia sesji i testów zostaje, a zaliczone kroki wspólne dla obu drabin pozostają zaliczone
  - Scenariusz: Anulowanie
    - Zakładając, że użytkownik ogląda podgląd nowego planu
    - Gdy wybiera „Anuluj” po lewej w nagłówku
    - Wtedy plan zostaje bez zmian

### BR-PLN-004: Kroki dopasowane do sprzętu
- Przepływ: PR-01, PR-09
- Dowód potrzeby: J-07; S-24; DP-35; OP-15
- Kryteria akceptacji:
  - Scenariusz: Bez drążka
    - Zakładając, że użytkownik zaznaczył brak drążka
    - Gdy powstaje plan
    - Wtedy plan nie zawiera kroków wymagających drążka, a drabiny bez zamiennika są oznaczone „wymaga drążka” (zamiennik: OP-15)
  - Scenariusz: Dodanie sprzętu
    - Zakładając, że użytkownik dodaje gumę oporową
    - Gdy zatwierdza nowy podgląd planu
    - Wtedy kroki z gumą mogą pojawić się w drabinie (OP-10)

### BR-PLN-005: Przypomnienie w dzień treningowy
- Przepływ: PR-13
- Dowód potrzeby: J-02; S-24 („reminders”); DP-30
- Kryteria akceptacji:
  - Scenariusz: Zgoda przy pierwszym dniu
    - Zakładając, że użytkownik zapisał plan
    - Gdy nadchodzi pierwszy zaplanowany dzień
    - Wtedy aplikacja pyta o zgodę na przypomnienia, a nie pyta o nią przy starcie
  - Scenariusz: Brak zgody
    - Zakładając, że użytkownik nie zgodził się na powiadomienia
    - Gdy otwiera ustawienia przypomnień
    - Wtedy widzi jedno zdanie, że przypomnienia nie przyjdą, i drogę do ustawień iOS

### BR-TRN-001: Trening dnia na żywo z wpisem wyniku
- Przepływ: PR-02
- Dowód potrzeby: J-02; DP-31
- Kryteria akceptacji:
  - Scenariusz: Seria na powtórzenia
    - Zakładając, że bieżący krok ma cel w powtórzeniach
    - Gdy użytkownik kończy serię
    - Wtedy wpisuje liczbę powtórzeń jednym ruchem (domyślnie cel), a wynik zapisuje się od razu
  - Scenariusz: Przerwanie aplikacji
    - Zakładając, że trening trwa
    - Gdy użytkownik przełącza się do innej aplikacji i wraca
    - Wtedy trening trwa dalej od tej samej serii
  - Scenariusz: Porzucony trening
    - Zakładając, że od ostatniej serii minęło 6 godzin (DP-31)
    - Gdy aplikacja wraca na pierwszy plan
    - Wtedy trening jest zapisany po cichu, a sesja liczy się do historii

### BR-TRN-002: Ćwiczenia na czas bez dotykania telefonu
- Przepływ: PR-02
- Dowód potrzeby: J-09; S-26, S-29
- Kryteria akceptacji:
  - Scenariusz: Utrzymanie na czas
    - Zakładając, że bieżący krok ma cel w sekundach
    - Gdy użytkownik startuje serię
    - Wtedy aplikacja odlicza czas, sygnalizuje koniec dźwiękiem i wibracją i sama przechodzi do przerwy
  - Scenariusz: Koniec przed czasem
    - Zakładając, że odliczanie trwa
    - Gdy użytkownik kończy serię wcześniej
    - Wtedy zapisuje się czas faktyczny, a nie cel

### BR-TRN-003: Przerwa z odliczaniem, muzyka gra dalej
- Przepływ: PR-02
- Dowód potrzeby: J-09; S-27, S-29; DP-23
- Kryteria akceptacji:
  - Scenariusz: Muzyka w tle
    - Zakładając, że w tle gra muzyka z innej aplikacji
    - Gdy zaczyna się i kończy przerwa
    - Wtedy muzyka nie zatrzymuje się, a sygnał końca przerwy jest słyszalny
  - Scenariusz: Ekran zablokowany
    - Zakładając, że telefon jest zablokowany w czasie przerwy
    - Gdy przerwa się kończy
    - Wtedy przychodzi powiadomienie o końcu przerwy
  - Scenariusz: Zapowiedzi głosowe
    - Zakładając, że użytkownik nie zmieniał ustawień
    - Gdy zaczyna przerwę
    - Wtedy nie słyszy zapowiedzi głosowej, bo jest domyślnie wyłączona (DP-23)

### BR-TRN-004: Rozgrzewka przed treningiem i testem
- Przepływ: PR-02, PR-06
- Dowód potrzeby: J-06; S-26 („no timer for the warmup”); OP-13
- Kryteria akceptacji:
  - Scenariusz: Rozgrzewka z odliczaniem
    - Zakładając, że trening dnia się zaczyna
    - Gdy użytkownik startuje
    - Wtedy pierwsza jest rozgrzewka z odliczaniem czasu, a jej treść pochodzi z przeglądu badacza (OP-13)
  - Scenariusz: Pominięcie rozgrzewki
    - Zakładając, że użytkownik pomija rozgrzewkę przed testem
    - Gdy przechodzi do testu
    - Wtedy widzi jedno zdanie o ryzyku testu bez rozgrzewki i może kontynuować

### BR-TRN-005: Technika kroku: figura i krótkie wskazówki
- Przepływ: PR-02, PR-08
- Dowód potrzeby: J-06; S-31; H-07; DM-02
- zależy od: ZAL-015
- Kryteria akceptacji:
  - Scenariusz: Podgląd techniki w przerwie
    - Zakładając, że trwa przerwa przed następnym ćwiczeniem
    - Gdy użytkownik otwiera technikę
    - Wtedy widzi figurę kroku i wskazówki (ustawienie, przebieg, częste błędy) bez opuszczania treningu
  - Scenariusz: Wskazówka bez dwóch źródeł
    - Zakładając, że wskazówka nie ma dwóch zgodnych źródeł szczebla 4 (DM-02)
    - Gdy budowany jest katalog
    - Wtedy wskazówka nie trafia do aplikacji

### BR-TRN-006: Dopisanie treningu wstecz
- Przepływ: PR-02, PR-11
- Dowód potrzeby: J-10; S-25; DP-07
- Kryteria akceptacji:
  - Scenariusz: Trening zrobiony bez telefonu
    - Zakładając, że użytkownik trenował wczoraj bez aplikacji
    - Gdy dopisuje trening z wczorajszą datą i wynikami
    - Wtedy sesja liczy się do kryterium kroku (RD-01) i nie zużywa dnia limitu (RD-08-W5)

### BR-ZMK-001: Propozycja awansu po zaliczonych sesjach
- Przepływ: PR-03 · Reguła: RD-01
- Dowód potrzeby: J-03; S-11, S-12, S-23; DP-17
- Kryteria akceptacji:
  - Szablon scenariusza: Kryterium przejścia
    - Zakładając, że cel kroku to 8 powtórzeń, n = 1 i k = 2 (wartości testowe, OP-02)
    - Gdy użytkownik kończy sesję z wynikiem <wynik> po <przed> zaliczonych sesjach
    - Wtedy propozycja awansu jest <propozycja>
  - Przykłady:
    - | wynik | przed | propozycja | wektor |
    - | 10 | 1 | pokazana | RD-01-W1 |
    - | 9 | 1 | pokazana | RD-01-W2 |
    - | 8 | 1 | niepokazana | RD-01-W3 |
    - | 9 | 0 | niepokazana | RD-01-W4 |
  - Scenariusz: Zatwierdzenie
    - Zakładając, że widzi propozycję „Następny krok”
    - Gdy zatwierdza
    - Wtedy następny trening ma nowy krok, a w podsumowaniu jest „Cofnij”
  - Scenariusz: Odmowa
    - Zakładając, że widzi propozycję
    - Gdy wybiera „Zostaję”
    - Wtedy krok się nie zmienia, a propozycja wraca po kolejnej zaliczonej sesji

### BR-ZMK-002: Łatwiejszy krok po niepowodzeniach albo „Za trudne”
- Przepływ: PR-04 · Reguła: RD-02
- Dowód potrzeby: J-04; S-24, S-30; ZP-01 („żeby użytkownik z ograniczeniem nie utknął”)
- Kryteria akceptacji:
  - Scenariusz: Kolejne nieudane sesje
    - Zakładając, że m = 5 i f = 2 (wartości testowe, OP-05), a poprzednia sesja była nieudana
    - Gdy użytkownik kończy sesję z wynikiem 3
    - Wtedy widzi propozycję łatwiejszego kroku (RD-02-W1)
  - Scenariusz: „Za trudne” w trakcie
    - Zakładając, że trwa trening
    - Gdy użytkownik wybiera „Za trudne” przy ćwiczeniu
    - Wtedy widzi propozycję łatwiejszego kroku (RD-02-W5), z tym samym potwierdzeniem co inne zmiany kroku
  - Scenariusz: Najniższy krok
    - Zakładając, że bieżący krok jest najniższy w drabinie
    - Gdy sesja jest kolejną nieudaną
    - Wtedy drabina jest „wstrzymana” i aplikacja proponuje inny cel (RD-02-W6; DK-07)
  - Scenariusz: Seria pominięta
    - Zakładając, że użytkownik pominął serię bez wyniku
    - Gdy kończy sesję
    - Wtedy pominięcie nie liczy się jako niepowodzenie (RD-02-W7)

### BR-ZMK-003: „Cofnij” każdej zmiany kroku
- Przepływ: PR-03, PR-04, PR-07
- Dowód potrzeby: J-03, J-04; DP-17, DP-27
- Kryteria akceptacji:
  - Scenariusz: Cofnięcie zmiany
    - Zakładając, że użytkownik zatwierdził zmianę kroku
    - Gdy wybiera „Cofnij” przed następnym treningiem
    - Wtedy wraca poprzedni krok z jego licznikiem sesji
  - Scenariusz: Zapis zmiany z powodem
    - Zakładając, że krok się zmienił
    - Gdy użytkownik otwiera historię drabiny
    - Wtedy widzi datę i powód zmiany (awans, za trudne, niepowodzenia, test, powrót)

### BR-TST-001: Test kontrolny w terminie, bez presji
- Przepływ: PR-06 · Reguły: RD-05, RD-04
- Dowód potrzeby: J-05; S-23; OG-03; OP-09
- Kryteria akceptacji:
  - Scenariusz: Termin testu
    - Zakładając, że T = 28 dni (wartość testowa, OP-07)
    - Gdy od ostatniego testu minęło 28 dni
    - Wtedy „Dziś” zapowiada test kontrolny (RD-05-W2)
  - Scenariusz: Przed terminem
    - Zakładając, że od testu minęło 27 dni
    - Gdy użytkownik otwiera „Dziś”
    - Wtedy testu nie ma (RD-05-W3)
  - Scenariusz: Wynik testu
    - Zakładając, że użytkownik kończy test
    - Gdy zapisuje wynik
    - Wtedy widzi porównanie z poprzednim testem i propozycję kroku według RD-04, do zatwierdzenia
  - Scenariusz: Język bez presji
    - Zakładając, że ekran testu się wyświetla
    - Gdy użytkownik czyta opis
    - Wtedy tekst nie zachęca do wyniku za wszelką cenę i mówi, że test można przerwać w każdej chwili (OG-03)

### BR-TST-002: Przełożenie testu
- Przepływ: PR-06
- Dowód potrzeby: J-05; DK-05
- Kryteria akceptacji:
  - Scenariusz: Przełożenie
    - Zakładając, że test jest zapowiedziany
    - Gdy użytkownik wybiera „Nie dziś”
    - Wtedy trening dnia odbywa się bez testu, a nowy termin wynika z decyzji DK-05 (OP-21)

### BR-POW-001: Bezpieczny powrót po przerwie
- Przepływ: PR-07 · Reguła: RD-06
- Dowód potrzeby: J-08; S-14, S-15; DP-17
- Kryteria akceptacji:
  - Scenariusz: Długa przerwa
    - Zakładając, że B = 14 dni (wartość testowa, OP-08)
    - Gdy użytkownik otwiera aplikację po 30 dniach bez treningu drabiny
    - Wtedy widzi propozycję bezpiecznego powrotu przed treningiem (RD-06-W1)
  - Scenariusz: Krótka przerwa
    - Zakładając, że minęło 13 dni
    - Gdy użytkownik otwiera aplikację
    - Wtedy trening dnia jest bez zmian (RD-06-W3)
  - Scenariusz: Zmiana zegara
    - Zakładając, że data ostatniego treningu jest w przyszłości
    - Gdy użytkownik otwiera aplikację
    - Wtedy propozycji nie ma, a dane się nie zmieniają (RD-06-W5)

### BR-BEZ-001: „Boli” przy ćwiczeniu
- Przepływ: PR-05 · Reguła: RD-07
- Dowód potrzeby: J-06; OG-02; S-33; DP-24
- Kryteria akceptacji:
  - Scenariusz: Zgłoszenie bólu
    - Zakładając, że trwa trening
    - Gdy użytkownik wybiera „Boli” przy ćwiczeniu
    - Wtedy ćwiczenie jest dziś pominięte, pojawia się zdanie o konsultacji ze specjalistą, gdy ból nie mija, i nie ma diagnozy ani porady leczenia (RD-07-W1)
  - Scenariusz: Ból a kryterium kroku
    - Zakładając, że wynik serii był poniżej progu, bo zabolało
    - Gdy użytkownik zgłasza ból
    - Wtedy ta sesja nie liczy się jako niepowodzenie (RD-07-W3)
  - Scenariusz: Drabina po bólu
    - Zakładając, że użytkownik zgłosił ból
    - Gdy trening się kończy
    - Wtedy stan drabiny wynika z decyzji DK-06 (OP-22)

### BR-BEZ-002: Zastrzeżenie medyczne widoczne w aplikacji
- Przepływ: PR-01, PR-06, PR-13
- Dowód potrzeby: OG-02; S-01; DP-24
- Kryteria akceptacji:
  - Scenariusz: Zdanie na ekranach
    - Zakładając, że użytkownik otwiera ankietę bezpieczeństwa, test albo „Więcej”
    - Gdy ekran się wyświetla
    - Wtedy jest zdanie, że aplikacja nie udziela porad medycznych i że przy bólu, urazie lub chorobie trzeba skonsultować się z lekarzem lub fizjoterapeutą

### BR-PST-001: Postępy: testy, sesje i zaliczone kroki
- Przepływ: PR-08
- Dowód potrzeby: J-05; S-23
- Kryteria akceptacji:
  - Scenariusz: Wyniki w czasie
    - Zakładając, że użytkownik ma dwa testy kontrolne
    - Gdy otwiera „Postępy”
    - Wtedy widzi wyniki obu testów z datami i różnicę
  - Scenariusz: Brak danych
    - Zakładając, że użytkownik nie ma jeszcze żadnej sesji
    - Gdy otwiera „Postępy”
    - Wtedy widzi jedno zdanie, co pojawi się po pierwszym treningu, zamiast pustego wykresu

### BR-PST-002: Umiejętność osiągnięta
- Przepływ: PR-03, PR-08
- Dowód potrzeby: J-03; DK-07
- Kryteria akceptacji:
  - Scenariusz: Ostatni krok zaliczony
    - Zakładając, że użytkownik zalicza kryterium ostatniego kroku drabiny
    - Gdy kończy sesję
    - Wtedy widzi, że umiejętność jest osiągnięta, a dalszy plan wynika z decyzji DK-07 (OP-23)

### BR-DAN-001: Dane tylko w telefonie, bez konta
- Przepływ: PR-10
- Dowód potrzeby: J-10; OG-05; S-28; DP-19
- Kryteria akceptacji:
  - Scenariusz: Brak konta
    - Zakładając, że użytkownik instaluje aplikację
    - Gdy z niej korzysta
    - Wtedy nie ma ekranu logowania, a dane zapisują się w lokalnej bazie na telefonie

### BR-DAN-002: Kopia zapasowa, eksport i import
- Przepływ: PR-10
- Dowód potrzeby: J-10; S-21; DP-20; OG-04
- Kryteria akceptacji:
  - Scenariusz: Kopia i odtworzenie na nowym telefonie
    - Zakładając, że użytkownik ma historię, testy i stan drabin
    - Gdy tworzy kopię do pliku i importuje ją na nowym telefonie
    - Wtedy historia, testy, stan drabin, dni limitu i ustawienia odtwarzają się bez strat
  - Scenariusz: Kopia bezpieczeństwa przed importem
    - Zakładając, że użytkownik ma dane
    - Gdy rozpoczyna import
    - Wtedy aplikacja zapisuje kopię bezpieczeństwa przed zmianą danych
  - Scenariusz: Nieudany import
    - Zakładając, że plik kopii jest uszkodzony
    - Gdy import się kończy
    - Wtedy dane są bez zmian i nie ma komunikatu o sukcesie
  - Scenariusz: Kopia nie wysyła się sama
    - Zakładając, że użytkownik tworzy kopię
    - Gdy kopia powstaje
    - Wtedy plik trafia tam, gdzie wskaże użytkownik w systemowym oknie udostępniania; aplikacja sama nie zapisuje go w iCloud (OG-04)

### BR-DAN-003: Aktualizacja aplikacji zachowuje dane
- Przepływ: PR-10
- Dowód potrzeby: J-10; DP-20; NFR-DAN-001
- Kryteria akceptacji:
  - Scenariusz: Migracja z poprzedniej wersji
    - Zakładając, że zapis pochodzi z poprzedniej wersji aplikacji
    - Gdy użytkownik uruchamia nową wersję
    - Wtedy dane są przeniesione do nowego schematu w transakcji, a kopia zapisu sprzed migracji istnieje

### BR-DAN-004: Usunięcie wszystkich danych
- Przepływ: PR-10
- Dowód potrzeby: J-10; DP-27
- Kryteria akceptacji:
  - Scenariusz: Usunięcie z potwierdzeniem
    - Zakładając, że użytkownik wybiera „Usuń wszystkie dane”
    - Gdy potwierdza w oknie z „Anuluj” po lewej w nagłówku
    - Wtedy dane znikają z telefonu, a dni limitu w bieżącym miesiącu nie wracają (DP-07)

### BR-ZDR-001: Opcjonalny zapis treningów do Zdrowia
- Przepływ: PR-12
- Dowód potrzeby: J-10; S-22; OG-09; DP-21
- Kryteria akceptacji:
  - Scenariusz: Zapis ukończonego treningu
    - Zakładając, że użytkownik zgodził się na zapis do Zdrowia
    - Gdy kończy trening na żywo
    - Wtedy w Zdrowiu jest trening rodzaju „functionalStrengthTraining” z czasem trwania sesji (OG-09)
  - Scenariusz: Bez zgody
    - Zakładając, że użytkownik nie zgodził się na zapis
    - Gdy kończy trening
    - Wtedy nic nie trafia do Zdrowia, a aplikacja działa bez zmian

### BR-ZEG-001: Zegarek: bieżące ćwiczenie, przerwa, odhaczenie serii
- Przepływ: PR-12
- Dowód potrzeby: J-09; S-26; DP-22; H-04
- zależy od: ZAL-013
- Kryteria akceptacji:
  - Scenariusz: Trening z zegarkiem
    - Zakładając, że trening trwa, a zegarek jest połączony
    - Gdy użytkownik kończy serię
    - Wtedy odhacza ją na zegarku, a zegarek pokazuje odliczanie przerwy i następne ćwiczenie, bez edycji planu

### BR-ZAK-001: Dostęp według modelu M5 S1
- Przepływ: PR-11 · Reguła: RD-08
- Dowód potrzeby: ZP-06; DP-02, DP-06, DP-13, DK-01; OG-07
- Kryteria akceptacji:
  - Scenariusz: Dzień treningowy
    - Zakładając, że użytkownik jest na darmowym poziomie
    - Gdy kończy trening na żywo trwający 30 minut
    - Wtedy zużywa jeden dzień z 5 w miesiącu (RD-08-W1)
  - Scenariusz: Krótki trening
    - Zakładając, że trening na żywo trwał 7 minut
    - Gdy się kończy
    - Wtedy dzień nie jest zużyty (RD-08-W2)
  - Scenariusz: Start ponad limit
    - Zakładając, że użytkownik wykorzystał 5 dni w miesiącu
    - Gdy zaczyna trening w nowym dniu
    - Wtedy widzi ekran zakupu bez presji z datą powrotu darmowych dni i może dopisać trening wstecz albo zamknąć ekran
  - Scenariusz: Błąd odczytu sklepu
    - Zakładając, że sklep nie odpowiada
    - Gdy aplikacja sprawdza dostęp
    - Wtedy stan dostępu jest „nieznany”, nigdy „darmowy”, a subskrybent trenuje bez blokady przez 7 dni offline (DP-13)

### BR-ZAK-002: Dane nigdy zakładnikiem
- Przepływ: PR-08, PR-10, PR-11
- Dowód potrzeby: DP-07; S-21
- Kryteria akceptacji:
  - Scenariusz: Wyczerpany limit
    - Zakładając, że użytkownik wykorzystał darmowe dni
    - Gdy otwiera plan, historię, postępy albo tworzy kopię
    - Wtedy wszystko działa bez ekranu zakupu

### BR-WIE-001: „Inne aplikacje studia” w „Więcej”
- Przepływ: PR-13
- Dowód potrzeby: DK-02
- Kryteria akceptacji:
  - Scenariusz: Odnośnik do Treningu
    - Zakładając, że użytkownik otwiera „Więcej”
    - Gdy wybiera „Inne aplikacje studia”
    - Wtedy widzi Trening z krótkim opisem i przejściem do App Store, bez rabatu i bez danych o użytkowniku

### BR-JEZ-001: Interfejs w 35 językach
- Przepływ: PR-13
- Dowód potrzeby: DP-11; NFR-JEZ-001
- Kryteria akceptacji:
  - Scenariusz: Język systemu
    - Zakładając, że język telefonu jest jednym z 35 obsługiwanych
    - Gdy użytkownik uruchamia aplikację
    - Wtedy interfejs, nazwy kroków i wskazówki są w tym języku

### BR-JEZ-002: Teksty naturalne, bez nazw źródeł
- Przepływ: PR-02, PR-08, PR-13
- Dowód potrzeby: ZP-04, ZP-08; DP-28, DP-29; OG-08
- Kryteria akceptacji:
  - Scenariusz: Brak źródeł w interfejsie
    - Zakładając, że katalog tekstów jest zbudowany
    - Gdy strażnik sprawdza teksty interfejsu i opis sklepu
    - Wtedy żaden tekst nie wymienia źródeł, organizacji ani nazw innych aplikacji

## Wymagania niefunkcjonalne

### NFR-PRV-001: Brak wywołań sieciowych
- Miara: liczba wywołań sieciowych w kodzie aplikacji (poza sklepem Apple i otwarciem odnośnika App Store przez system). Próg: 0 (DP-19). Metoda: test strażnik kodu jak w Treningu.
### NFR-KON-001: Pełne działanie offline
- Miara: odsetek przepływów PR-01…PR-13 wykonanych w trybie samolotowym (poza zakupem). Próg: 100% (DP-19). Metoda: scenariusze Maestro z wyłączoną siecią.
### NFR-DAN-001: Brak utraty danych przy aktualizacji
- Miara: liczba zapisów z wydanych wersji, które po migracji tracą dane. Próg: 0. Metoda: testy migracji na zapisach z wydanych buildów (jak Trening, DP-20).
### NFR-DAN-002: Kompletna kopia zapasowa
- Miara: zgodność danych po cyklu kopia → usunięcie → import (wszystkie tabele, także dni limitu). Próg: 100%, przy trybie WAL kopia przez `VACUUM INTO` albo checkpoint. Metoda: test cyklu na bazie testowej.
### NFR-JEZ-001: Kompletność tłumaczeń
- Miara: odsetek kluczy tekstów przetłumaczonych w 35 językach. Próg: 100% (DP-11). Metoda: kontrola słownika jak w Treningu.
### NFR-DOS-001: Skalowanie tekstu systemowego
- Miara: ekrany czytelne bez obcięcia przy największym rozmiarze tekstu iOS. Próg: 100% ekranów. Metoda: zrzuty przy największym rozmiarze (rola 04 i 08).
### NFR-DOS-002: VoiceOver
- Miara: odsetek elementów interaktywnych z etykietą i rolą. Próg: 100% (DP-27). Metoda: test strażnik etykiet i scenariusz z VoiceOver.
### NFR-KON-002: Obsługa między seriami zmęczoną ręką
- Miara: najmniejszy cel dotyku i kontrast przycisków w treningu na żywo. Próg: [DO USTALENIA] (OP-18). Metoda: pomiar na zrzutach (rola 04).
### NFR-BEZ-001: Reguły krytyczne z przeglądem człowieka
- Miara: odsetek reguł krytycznych (RD-01, RD-03, RD-04, RD-06, RD-07) i ich liczb z przeglądem roli 06 i człowieka przed wydaniem. Próg: 100% (C-003). Metoda: rejestr twierdzeń roli 06.
