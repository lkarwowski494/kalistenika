# BRD Kalistenika — odkrywanie: prace, persony, kontekst, zasady, rynek, ograniczenia, hipotezy, ryzyka
Stan: E3 · Aktualizacja: 2026-10-26 · Źródła: `zrodla.md` · Decyzje: `docs/decyzje.md` (DK, DP, DM) · Założenia: `docs/zalozenia.md` (ZAL)

## Pomysł słowami właściciela

- 25.10.2026 (Trening docs/18): „osobna aplikacja do kalisteniki na silniku Treningu — wariant B, po Treningu 1.0: krótki test/ankieta na start → poziom zaawansowania → plan prowadzący do konkretnych umiejętności (np. od podciągania negatywnego do muscle-upu), bez ręcznej edycji”; plan „sam się dostosowuje (test kontrolny co ~4 tygodnie, »za trudne → łatwiejszy wariant«), żeby użytkownik z ograniczeniem nie utknął” (uwagi koordynatora zapisane tego dnia).
- 26.10.2026 (Trening docs/18): „specyfikacja startuje teraz”; osobne repo w organizacji Apps4Brew, wspólny silnik jako pakiet wydzielony z Treningu po 1.1.

## Wywiad (moduł `wywiad`, 26.10.2026)

Właściciel nie był dostępny w tej sesji. Zgodnie z regułą decyzji (26.10.2026) odpowiedzi wypełniono analogią do Treningu (`docs/decyzje.md`, DP-01…DP-36); pytania bez analogii są w `README.md` („Decyzje dla właściciela”). Pytań o doświadczenie („opowiedz o ostatnim razie…”) nie zadano — prace i persony opierają się na recenzjach konkurencji z 2026-10-26 (S-20…S-33) i słowach właściciela; to słabszy dowód niż rozmowa z użytkownikami (OP-24).

| Temat wywiadu | Odpowiedź (źródło) |
|---|---|
| Problem | Osoba bez umiejętności (np. bez jednego podciągnięcia) nie wie, od czego zacząć i jak dojść do celu; utyka, gdy krok jest za trudny (właściciel 25.10.2026) |
| Obejścia dziś | aplikacje z gotowymi programami, filmy, tabele progresji (S-19, recenzje S-20…S-33) |
| Kontekst | dom, park, podróż; bez sieci (DP-19); telefon odłożony podczas ćwiczenia (analogia Treningu: trening na żywo, zegarek DP-22) |
| Granice | bez ręcznej edycji planu (właściciel 25.10.2026); bez porad medycznych (DP-24); bez konta i serwera (DP-19); nie dla dzieci (DP-25) |
| Sukces | użytkownik zalicza kolejne kroki i dochodzi do umiejętności, a gdy utknie, plan cofa go do wykonalnego kroku (właściciel 25.10.2026) |

## Prace do wykonania

### J-01: Zacząć od właściwego poziomu
- Kiedy zaczynam kalistenikę albo przechodzę z siłowni, chcę, żeby aplikacja sama ustaliła, od którego kroku zacząć, żeby pierwszy trening nie był ani za łatwy, ani niewykonalny.
- Siły zmiany: pcha niepewność („od czego zacząć”) i programy niedopasowane do poziomu (S-29); przyciąga plan „na mój poziom” (S-30); obawa: test, którego nie zrobię, i kontuzja; nawyk: gotowy program z internetu. Częstość: raz na start i przy zmianie celu.

### J-02: Wiedzieć, co zrobić dziś
- Kiedy mam czas na trening, chcę otworzyć aplikację i od razu zobaczyć dzisiejsze ćwiczenia, serie i czasy, żeby nie układać niczego samemu.
- Siły zmiany: pcha układanie treningu i szukanie w kilku miejscach; przyciąga „zrób to dziś”; obawa: utrata planu przy zmianie dni; nawyk: notatki, tabela. Częstość: 2–4 razy w tygodniu `[OCENA]` (częstotliwość treningu do ustalenia przez badacza, OP-04).

### J-03: Dojść krok po kroku do konkretnej umiejętności
- Kiedy mam cel (np. pierwsze podciągnięcie, muscle-up, pompka na jednej ręce), chcę widzieć drogę z kolejnymi krokami i wiedzieć, kiedy przejść dalej, żeby postęp był pewny i bez zgadywania.
- Siły zmiany: pcha brak jasnego kryterium „kiedy dalej” i ryzyko przeciążenia; przyciąga widoczny poziom i następny krok (S-23); obawa: przejście za wcześnie; nawyk: „spróbuję trudniejszego, jak się uda”. Częstość: co trening (ocena), co kilka tygodni (awans).

### J-04: Nie utknąć, gdy krok jest za trudny
- Kiedy nie daję rady przez kilka treningów albo czuję, że krok mnie przerasta, chcę dostać łatwiejszy wariant bez poczucia porażki, żeby dalej robić postęp.
- Siły zmiany: pcha frustracja i porzucenie planu; przyciąga „aplikacja dopasowuje się do mnie” (S-30) i możliwość cofnięcia się do wcześniejszego kroku (S-24); obawa: plan, który cofa za często; nawyk: rezygnacja. Częstość: rzadko, ale decyduje o utrzymaniu.

### J-05: Sprawdzić postęp testem
- Kiedy minął pewien czas od startu, chcę zrobić krótki test i zobaczyć, ile się poprawiłem, żeby wiedzieć, że plan działa, i żeby plan się do wyniku dopasował.
- Siły zmiany: pcha brak dowodu postępu (S-23); przyciąga wynik w liczbach; obawa: test maksymalny bez przygotowania; nawyk: brak testów. Częstość: co kilka tygodni (OP-07).

### J-06: Trenować bezpiecznie
- Kiedy ćwiczę nowy ruch albo coś zaczyna boleć, chcę wiedzieć, jak wykonać ruch poprawnie i co zrobić z bólem, żeby się nie skrzywdzić.
- Siły zmiany: pcha obawa przed kontuzją barku, łokcia, nadgarstka (motyw recenzji, niżej); przyciąga pokaz techniki (S-31) i progresja „bez ryzyka” (S-23); obawa: aplikacja, która udaje lekarza; nawyk: ignorowanie bólu. Częstość: każdy trening (technika), rzadko (ból).

### J-07: Trenować tym, co mam, tam, gdzie jestem
- Kiedy nie mam drążka, kółek albo poręczy, jestem w podróży lub w parku bez sieci, chcę dostać kroki wykonalne z moim sprzętem i bez internetu, żeby plan nie przepadł.
- Siły zmiany: pcha ćwiczenia wymagające sprzętu, którego nie mam (S-24), i brak działania bez sieci (S-20); przyciąga trening „wszędzie”; obawa: gorszy plan bez sprzętu; nawyk: pomijanie ćwiczeń. Częstość: każda zmiana miejsca.

### J-08: Wrócić po przerwie
- Kiedy wracam po chorobie, urlopie albo kilku tygodniach bez treningu, chcę, żeby plan zaproponował bezpieczny powrót, żeby nie zaczynać od zera i nie przesadzić.
- Siły zmiany: pcha poczucie straty i ryzyko przeciążenia; przyciąga „plan wie, gdzie skończyłem”; obawa: zbyt trudny pierwszy trening; nawyk: porzucenie aplikacji. Częstość: kilka razy w roku `[OCENA]`.

### J-09: Prowadzić trening bez patrzenia w telefon
- Kiedy wiszę na drążku albo trzymam pozycję na czas, chcę, żeby aplikacja odliczała czas i przerwę dźwiękiem i wibracją, przechodziła dalej i nie zatrzymywała mojej muzyki, żeby nie wracać co chwilę do ekranu.
- Siły zmiany: pcha ręczne odliczanie i przyciski po każdym ćwiczeniu (S-26), zatrzymywanie muzyki (S-27), brak sygnału końca (S-29); przyciąga zegarek na ręce (DP-22); obawa: zgubiony trening po przełączeniu aplikacji; nawyk: stoper. Częstość: każdy trening.

### J-10: Mieć swoje dane przy sobie
- Kiedy zmieniam telefon, aktualizuję aplikację albo chcę mieć treningi w Zdrowiu, chcę, żeby historia, kroki i testy zostały, żeby nie stracić miesięcy postępu.
- Siły zmiany: pcha utrata danych po „synchronizacji” (S-21), zakup niewidoczny na drugim urządzeniu (S-32), brak zapisu w Zdrowiu (S-22), brak dopisania treningu wstecz (S-25), wymuszone konto (S-28); przyciąga dane w telefonie i kopia; obawa: kopia, która nie działa; nawyk: brak kopii. Częstość: rzadko, ale utrata danych jest krytyczna.

## Persony

### P-1: Początkujący bez podciągnięcia
- Dorosły, który nie robi jeszcze jednego podciągnięcia albo pompki z pełnym zakresem; chce „pierwszego podciągnięcia”. Potrzebuje J-01, J-02, J-04, J-06. Pierwszego dnia: ocena startowa i krótki, wykonalny trening; po roku: kolejna drabina.
- Dowód: przykład właściciela (podciąganie negatywne, 25.10.2026); recenzje o ćwiczeniach za trudnych i za łatwych na start (S-29, S-30). Persona z recenzji i słów właściciela, bez rozmów z użytkownikami (OP-24).

### P-2: Ćwiczący dążący do umiejętności
- Osoba, która robi już kilka podciągnięć i pompek i chce konkretnej umiejętności (muscle-up, pistolet, L-sit); ceni jasne kryterium przejścia i widoczną drogę. Potrzebuje J-03, J-05, J-06, J-09; po roku: kilka drabin naraz, historia testów, dane w Zdrowiu.
- Dowód: recenzje chwalące poziomy i progresję umiejętności (S-23); motyw „progresja” w 84 z 642 recenzji (niżej, [RACHUNEK]).

### P-3: Wracający albo łączący z innym sportem
- Osoba po przerwie albo biegacz, wspinacz, bywalec siłowni, który chce dołożyć ćwiczenia z masą ciała; trenuje w domu, w parku, w podróży. Potrzebuje J-07, J-08, J-10.
- Dowód: recenzje osób wracających do formy i łączących z innym treningiem (S-22, S-30).

## Kontekst użycia

| Praca | Miejsce | Ręce i oczy | Uwaga, łączność, długość |
|---|---|---|---|
| J-01, J-05 | dom albo miejsce z drążkiem | ręce zajęte podczas testu; wynik wpisywany po próbie | skupienie na wysiłku; offline; kilka minut testu |
| J-02, J-03, J-09 | dom, park, siłownia, podróż | telefon odłożony; ręce na drążku albo na ziemi; oczy na ekranie tylko między seriami; ostre światło w parku | sesja ok. 20–60 min `[OCENA]`; bez sieci; muzyka w tle |
| J-04, J-06, J-08 | jak wyżej | decyzja między seriami albo po treningu | zmęczenie; nie może wymagać czytania długich tekstów |
| J-07, J-10 | dowolne | obie ręce wolne | rzadkie czynności; bez sieci |

Kontekst ryzykowny: wysiłek maksymalny w teście, zwis i podpory nad podłożem, praca nad głową (stanie na rękach) — wymagania bezpieczeństwa mają źródła w `reguly.md` (RD-03, RD-07) albo są otwarte (OP-09, OP-12). Kontekst prowadzenia pojazdu: brak.

## Zasady produktu

Zasady słowami właściciela. ZP-01 dotyczy tej aplikacji; pozostałe właściciel ustalił dla wszystkich swoich aplikacji (reguła decyzji 26.10.2026), daty jak w Treningu.

### ZP-01: Plan dobiera się sam, bez ręcznej edycji
- „plan prowadzący do konkretnych umiejętności (…), bez ręcznej edycji” (25.10.2026). Zmiana planu to propozycja do zatwierdzenia (DP-17).
### ZP-02: Merytoryczne podstawy
- „Wszystko, czego aplikacja uczy albo co twierdzi (…), musi mieć merytoryczne podstawy.” (4.10.2026; DM-01).
### ZP-03: Spójność akcji
- „akcje i elementy tego samego typu działają w całej aplikacji tak samo” (13.10.2026; DP-27).
### ZP-04: Własne treści, źródła anonimowo
- „W aplikacji tylko własne teksty i grafiki” (9.10.2026); aplikacja „nie wymienia źródeł ani organizacji” (25.10.2026; DP-29).
### ZP-05: Offline, dane w telefonie, bez konta
- Jak Trening (DP-19); koszty „0 zł poza opłatą Apple”.
### ZP-06: Model dostępu stały
- Model M5 S1 jak Trening, osobne produkty (DP-02, DK-01).
### ZP-07: Bez porad medycznych
- „Aplikacja nie udziela porad medycznych; tam, gdzie chodzi o zdrowie (ból, kontuzje, choroby), odsyła do specjalisty.” (DP-24).
### ZP-08: Teksty naturalne
- „czy tak powiedziałby trener albo kolega na siłowni w tym języku” (25.10.2026; DP-28).
### ZP-09: Tylko funkcje z wartością, bez kombajnu
- Zasada biblioteki ról właściciela (D-014): funkcja ma dowód wartości i da się jej używać bez instrukcji; szeroka aplikacja dzieli się na mniejsze.

## Rynek (odczyt 2026-10-26)

Nazwy i pełne cytaty: Dysk, „Trening App / 05 Research konkurencji”, pliki „Kalistenika — konkurencja 2026-10-26” (krok 0) i „Kalistenika — odkrywanie 2026-10-26” (ta rola). Ceny, oceny i modele K-01…K-13: `docs/monetyzacja.md` („Rynek”) [FAKT S-19].

**Funkcje deklarowane w opisach sklepu (US)** — dopasowanie słów w polu `description` (lookup, 2026-10-26), nie sprawdzenie działania [RACHUNEK]:

| Kod | drabiny / umiejętności | test / ocena | plan dopasowany | wideo | offline | zegarek | Zdrowie | bez sprzętu | konto / społeczność |
|---|---|---|---|---|---|---|---|---|---|
| K-01 | tak | tak | tak | — | — | — | — | tak | — |
| K-02 | — | tak | — | — | — | — | — | tak | — |
| K-03 | tak | — | tak | — | — | — | — | — | — |
| K-04 | tak | tak | tak | — | — | — | — | tak | — |
| K-05 | tak | tak | tak | tak | — | — | tak | tak | tak |
| K-06 | — | tak | tak | tak | — | — | — | tak | tak |
| K-07 | — | tak | tak | tak | — | — | tak | tak | tak |
| K-08 | tak | — | — | tak | — | — | — | — | tak |
| K-09 | tak | — | tak | tak | — | — | — | — | — |
| K-10 | tak | — | tak | tak | — | — | tak | tak | — |
| K-11 | tak | tak | — | tak | — | — | tak | tak | tak |
| K-12 | tak | tak | — | tak | — | — | tak | tak | tak |
| K-13 | tak | — | tak | tak | — | tak | tak | tak | tak |

Wniosek: drabiny, test i plan dopasowany deklaruje większość; **żaden z 13 opisów nie wspomina pracy bez sieci**, jeden — zegarka. Wzorzec najlepszych w klasie (oceny i recenzje): jasne poziomy z kryterium przejścia (S-23), skalowanie trudności (S-30), pokaz techniki (S-31).

**Motywy recenzji** (US, 3 strony najnowszych, 8 aplikacji, 642 wpisy z lat 2015–2026, odczyt 2026-10-26; dopasowanie słów kluczowych, nie klasyfikacja; skrypt w scratchpadzie roli 01) [RACHUNEK]:

| Motyw | Wpisy (w tym ≤ 3★) | Przykład (S) | Praca |
|---|---|---|---|
| cena, paywall, subskrypcja | 138 (65) | `docs/monetyzacja.md` | H-05 |
| progresja, poziomy | 84 (18) | S-23 | J-03 |
| regularność, motywacja | 73 (13) | S-24 (przypomnienia) | J-02 |
| technika, wideo, pokaz | 67 (26) | S-31 | J-06 |
| dopasowanie planu | 50 (10) | S-30 | J-01, J-04 |
| konto, logowanie | 47 (32) | S-28 | J-10 |
| początkujący | 45 (9) | S-29 | J-01 |
| timer, dźwięk, muzyka | 45 (17) | S-26, S-27 | J-09 |
| zegarek, Zdrowie | 25 (8) | S-22 | J-09, J-10 |
| za trudne, za łatwe | 17 (12) | S-29 | J-04 |
| sprzęt | 17 (3) | S-24 | J-07 |
| umiejętności (muscle-up, stanie na rękach…) | 17 (2) | S-23 | J-03 |
| ból, kontuzja | 15 (3) | S-33 | J-06 |
| offline, utrata danych, synchronizacja | 12 (6) | S-20, S-21 | J-07, J-10 |
| test, ocena | 2 (1) | — | J-01, J-05 |

Luki (praca, której nikt nie robi dobrze według recenzji): praca bez sieci i bez konta (J-07, J-10), trening bez dotykania telefonu przy ćwiczeniach na czas (J-09), cofnięcie do łatwiejszego kroku, które liczy się do planu (J-04, S-24), dane bezpieczne po „synchronizacji” (J-10, S-21). Recenzje Google Play i rynków poza US: nie sprawdzono.

## Ograniczenia

### OG-01: Odrębność od Treningu wobec reguły o spamie
- Apple zabrania wielu Bundle ID tej samej aplikacji [FAKT S-03] i wariantów nieodróżnialnych od dostępnych [FAKT S-04]. Rdzeń (drabiny, testy, zmiana kroku), ekran główny, nazwa, ikona i zrzuty muszą odróżniać aplikację od Treningu; Trening nie dostaje drabin. Dotyczy H-01, RYZ-01, BR-STA-001, BR-PLN-001.
### OG-02: Bez diagnozy, przypomnienie o lekarzu
- Aplikacje medyczne podlegają ostrzejszej ocenie, a aplikacja powinna przypominać o konsultacji z lekarzem [FAKT S-01]. Dotyczy BR-STA-002, BR-BEZ-001, BR-BEZ-002.
### OG-03: Bez zachęcania do ryzyka fizycznego
- Aplikacja nie może namawiać do aktywności (np. wyzwań) grożących obrażeniem [FAKT S-02]. Test maksymalny i wyzwania nie mogą mieć formy presji; dotyczy BR-TST-001, BR-STA-002, RYZ-04.
### OG-04: Dane zdrowotne nie w iCloud, nie do marketingu
- Dane z HealthKit nie służą reklamie ani marketingowi, a osobistych informacji zdrowotnych nie wolno przechowywać w iCloud [FAKT S-05]. Dotyczy BR-ZDR-001 i BR-DAN-002 (kopia zapasowa nie wysyła się sama do iCloud).
### OG-05: Bez wymuszonego logowania
- Bez funkcji opartych na koncie aplikacja ma działać bez logowania [FAKT S-06]. Dotyczy BR-DAN-001.
### OG-06: Nazwa i słowa kluczowe bez cudzych marek
- Nazwa do 30 znaków, bez znaków towarowych i nazw popularnych aplikacji w metadanych [FAKT S-07]. Dotyczy H-01 i roli 11.
### OG-07: Subskrypcja wymaga stałej wartości
- Subskrypcja odnawialna musi dawać „ongoing value” i działać na wszystkich urządzeniach użytkownika [FAKT S-08]. Dotyczy BR-ZAK-001, H-05.
### OG-08: Ocena wieku 9+
- Treści z zaleceniami ćwiczeń to „Health or Wellness Topics”, kategoria oceny 9+ [FAKT S-09]. Dotyczy DP-25 i BR-JEZ-002.
### OG-09: Rodzaj treningu w Zdrowiu
- HealthKit ma rodzaj „functionalStrengthTraining” dla treningu siłowego głównie z wolnymi ciężarami i masą ciała [FAKT S-10]. Dotyczy BR-ZDR-001.

## Hipotezy dla ról 02 i 03

### H-01: Osobna aplikacja na wspólnym silniku przejdzie recenzję Apple
- Rodzaj: podział · Rejestr: ZAL-001, ZAL-005 · Dowody za: inny rdzeń i ekran główny (OG-01); decyzja właściciela 25.10.2026 · Przeciw: wspólny silnik, figury i katalog z Treningiem (S-04) [OCENA].
- Opcje: (a) osobna aplikacja z własnym rdzeniem drabin i notatką dla recenzenta — ryzyko odrzucenia do pierwszego zgłoszenia; (b) moduł w Treningu — odrzucony przez właściciela 25.10.2026 (brak własnego miejsca w wynikach). Rekomendacja: (a), już wybrana. Sprawdzenie: pierwsze zgłoszenie (RYZ-01). Rozstrzyga: właściciel (rozstrzygnięte), rola 11 (notatka).
### H-02: Liczba drabin w pierwszej wersji
- Rodzaj: zakres · Rejestr: ZAL-011 · Dowody za szerokim wyborem: umiejętności z recenzji (S-23), cztery cele w propozycji analityka (podciąganie → muscle-up, pompka → na jednej ręce, przysiad → pistolet, deska → L-sit) · Przeciw: każda drabina wymaga źródeł R-01 i figur [OCENA].
- Opcje: (a) 4 drabiny (pełny program ciała, więcej badań); (b) 2 drabiny (ciągnięcie i pchanie, szybciej); (c) 1 drabina pilotażowa (podciąganie → muscle-up). Rekomendacja: (a), jeśli badacz potwierdzi kroki wszystkich; inaczej tyle, ile ma źródła. Rozstrzyga: rola 03 z właścicielem.
### H-03: Ocena poziomu na starcie
- Rodzaj: zakres i wartość · Rejestr: ZAL-012 · Dowody: test i ankieta deklarowane przez 7 z 13 konkurentów (tabela wyżej); „beginning questionnaire was great” (S-20) · Przeciw: test maksymalny bez przygotowania (OG-03).
- Opcje i rekomendacja: decyzja właściciela DK-04 (`README.md`). Rozstrzyga: właściciel.
### H-04: Zegarek w pierwszej wersji
- Rodzaj: zakres · Rejestr: ZAL-013 · Dowody za: ćwiczenia na czas bez patrzenia w telefon (S-26), Trening ma zegarek (DP-22) · Przeciw: osobny cel budowania i testy; analityk proponował „bez w v1”.
- Opcje: (a) zegarek w 1.0 jak Trening; (b) w pierwszej aktualizacji po 1.0; (c) bez zegarka. Rekomendacja: (b), bo pakiet silnika z zegarkiem powstaje po Treningu 1.1 [OCENA]. Rozstrzyga: rola 03.
### H-05: Model M5 S1 ma sens przy kalistenice
- Rodzaj: monetyzacja · Rejestr: ZAL-003, ZAL-008 · Dowody za: płacący chwalą plan prowadzący do umiejętności (ZAL-002); początkujący trenuje 2–3 dni w tygodniu [FAKT S-13], więc 5 darmowych dni w miesiącu to ok. 1,5–2,5 tygodnia [RACHUNEK: 5 / 2–3 dni na tydzień]; dorosły powinien trenować siłowo co najmniej 2 dni w tygodniu [FAKT S-16] · Przeciw: 138 recenzji o cenie i paywallu (tabela wyżej).
- Opcje: (a) M5 S1 bez zmian (reguła właściciela: model stały); (b) inny limit dla kalisteniki. Rekomendacja: (a). Rozstrzyga: rola 02 (sesja 2).
### H-06: Praca bez sieci i bez konta jako wyróżnik
- Rodzaj: wartość · Rejestr: ZAL-014 · Dowody za: żaden opis nie wspomina offline; skargi na brak offline i na konto (S-20, S-28) · Przeciw: konkurenci rosną mimo to (S-19).
- Opcje: (a) wyróżnik w przekazie sklepu; (b) cecha bez eksponowania. Rekomendacja: (a). Rozstrzyga: rola 11.
### H-07: Figury zamiast wideo wystarczą do nauki techniki
- Rodzaj: wartość · Rejestr: ZAL-015 · Dowody za: figury v2 z Treningu, 0 zł, offline · Przeciw: 67 recenzji o technice i wideo, prośba o pokaz techniki (S-31).
- Opcje: (a) figury v2 + krótkie wskazówki; (b) własne nagrania wideo (koszt, rozmiar, 35 języków bez znaczenia); (c) figury + animacja ruchu. Rekomendacja: (a), z oceną po pierwszych recenzjach. Rozstrzyga: rola 03 i 04.

## Ryzyka produktu

### RYZ-01: Odrzucenie za spam (4.3)
- Realny. Skutek: brak wydania. Działanie: OG-01, notatka dla recenzenta, ryzyko otwarte do przyjęcia pierwszego zgłoszenia (rejestr ryzyk z blokadą).
### RYZ-02: Prawo autorskie do układu programu
- Brzegowy. Kolejność kroków z części wspólnej kilku źródeł, tylko legalne kopie (DP-36).
### RYZ-03: Drabina bez źródeł
- Realny. Drabina albo liczba bez przeczytanych źródeł nie wchodzi do aplikacji (ZP-02); blokuje wydanie, dopóki R-01…R-13 nie są zamknięte (OP-01…OP-13).
### RYZ-04: Bezpieczeństwo testu maksymalnego i bólu
- Realny. RD-03, RD-07, OG-03; reguły krytyczne do przeglądu roli 06 i człowieka.
### RYZ-05: Regresja Treningu przy wydzieleniu silnika
- Brzegowy. Osobne wydanie Treningu 1.1.x; poza zakresem tego BRD (rola 05).
### RYZ-06: Werdykt opłacalności kruchy
- Realny. Bez K-05…K-07 wynik poniżej progu; kod dopiero po odświeżeniu bramki (DK-03).
### RYZ-07: Figury dla pozycji statycznych
- Brzegowy. Utrzymania (L-sit, zwis) mogą wymagać rozszerzenia figur v2 (spec analityka); rola 04/05.
