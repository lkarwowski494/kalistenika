# Rejestr decyzji — aplikacja do kalisteniki

Zasada nadrzędna (właściciel, 26.10.2026): decyzje są takie same jak w Treningu; każdą przejętą zapisujemy z odnośnikiem do Treningu. Tylko decyzja bez analogii idzie do właściciela z 3 opcjami i rekomendacją. *Dlaczego:* aplikacje studia mają działać według jednego zestawu zasad, a właściciel nie rozstrzyga drugi raz tego, co już rozstrzygnął.
Odnośniki „Trening docs/18” dotyczą `docs/18-przekazanie.md` na gałęzi `integracja-2026-10-26b` repo Treningu (odczyt 26.10.2026).

## Karta „Stan projektu” (przejęta z Treningu; do przeniesienia do CLAUDE.md przez rolę 01)
| Pole | Wartość | Skąd |
|---|---|---|
| Etap | krok 0 ścieżki greenfield (bramka opłacalności) | — |
| Sklep | App Store, tylko iOS; Android po danych z pierwszych 8 tygodni | Trening DEC-26 (docs/18, 20.10.2026) |
| Rynek główny | globalny, 35 języków; dla przesiewu US i rynki anglojęzyczne mają największy popyt | Trening (35 języków); przesiew `docs/monetyzacja.md` |
| Standard marki | wysoki: bez reklam i SDK śledzących, App Privacy „Data Not Collected” | Trening docs/18 14.10 i 21.10.2026 (Q9 A) |
| Próg opłacalności | 500 USD netto/rok globalnie (po VAT i prowizji) | Trening docs/18 21.10.2026 (D-024) |
| Polityka języków | szeroka (35 języków) | Trening |
| Koszty | 0 zł poza opłatą Apple; bez serwera, konta i analityki | CLAUDE.md Treningu |
| Repo | publiczne, organizacja Apps4Brew (zakłada właściciel) | Trening docs/18 26.10.2026; ADR-031 |

## Decyzje przejęte z Treningu (rola 02, 26.10.2026)
| ID | Decyzja | Odnośnik w Treningu |
|---|---|---|
| DP-01 | Próg 500 USD netto/rok globalnie; koszty portfela poza rachunkiem | docs/18 21.10.2026 („bramka opłacalności jednak przeprowadzona”) |
| DP-02 | Model M5 S1: darmowa z limitem 5 dni treningowych w miesiącu (dzień = ukończony trening na żywo > 7 min), Pro: miesięczna 0,99 USD, roczna 6,99 USD (odnawiane), dożywotni 14,99 USD (Non-Consumable) | docs/18 22.10 i 23.10.2026; docs/monetyzacja.md („Model”) |
| DP-03 | Bez okresu próbnego i bez ofert wprowadzających | docs/monetyzacja.md („Okres próbny”), 22.10.2026 |
| DP-04 | Ceny regionalne: PL 4,99 / 19,99 / 59,99 zł (ręcznie), EUR 0,99 / 7,99 / 17,99 € (przeliczenie Apple), GBP 0,99 / 6,99 / 14,99 £ | docs/18 14.10, 21.10.2026; store/asc-kontrola.json |
| DP-05 | Family Sharing TAK dla wszystkich trzech produktów (nieodwracalne) | docs/18 11.10 i 14.10.2026 |
| DP-06 | Ekran zakupu tylko przy starcie ponad limit i w Ustawieniach; okno „Uczciwe zasady” raz po pierwszym treningu na żywo | docs/18 22.10 (A) i 25.10.2026 |
| DP-07 | Dane nigdy zakładnikiem: plan, historia, eksport, kopia zawsze dostępne; dopisanie wstecz nie zużywa dnia; usunięcie nie zwraca dnia | docs/18 22.10.2026 (doprecyzowanie M5 S1) |
| DP-08 | Standard marki wysoki, bez reklam, „Data Not Collected” | docs/18 14.10 i 21.10.2026 |
| DP-09 | Prowizja 15%: to samo konto, Small Business Program (zgłoszenie 14.10.2026) | docs/18 14.10.2026 |
| DP-10 | Tylko iOS na start; Android po 8 tygodniach danych | DEC-26 (docs/18 20.10.2026) |
| DP-11 | 35 języków | Trening (docs/16) |
| DP-12 | Przenośność między kontami: własne ID produktów, bez wspólnych App Groups i kontenerów iCloud | docs/18 13.10.2026 („marki — B”) |
| DP-13 | Dostęp z transakcji sklepu; błąd odczytu = „nieznany”; offline 7 dni; `expo-iap` przypięty dokładnie | docs/18 12.10 i 22.10.2026 |
| DP-14 | Punkt kontrolny po 8 tygodniach od premiery (dane z App Store Connect) | docs/monetyzacja.md („Punkt kontrolny”), 21.10.2026 |
| DP-15 | Kody ofertowe Apple (offer codes) dla testerów | docs/18 12.10.2026 (P8 A), docs/monetyzacja.md |
| DP-16 | Cudze treści (nazwy konkurentów, cytaty) na Dysku; w repo kody K-nn | CLAUDE.md Treningu („Treści cudze”, 09.10.2026) |

## Decyzje właściciela z bramki kroku 0 (26.10.2026, przekazane przez koordynatora)
| ID | Decyzja (słowa z przekazania) | Odrzucone | Zależy od |
|---|---|---|---|
| DK-01 | „A osobne produkty, ta sama konstrukcja i ceny co Trening (bez wspólnej subskrypcji)” | B wspólna subskrypcja (serwer, konto, zmiana „Data Not Collected”); C powiązanie lokalne App Group (nie działa na drugim urządzeniu, łamie DP-12) | DP-02, DP-12 |
| DK-02 | „B wzajemny odnośnik »Inne aplikacje studia« w »Więcej«, bez rabatu (zmiana w Treningu osobnym wydaniem)” | A brak wzmianki; C odnośnik + kody ofertowe (brak danych o subskrybentach) | wydanie Treningu z odnośnikiem |
| DK-03 | „A specyfikacja i BRD teraz, kod dopiero po odświeżeniu bramki danymi Treningu z App Store Connect (~8 tygodni po premierze Treningu)” | B pełna budowa teraz; C wstrzymanie wszystkiego | OP-01 bramki (`docs/monetyzacja.md`), ZAL-007, ZAL-009 |
Werdykt kroku 0: **budować, warunkowo** (warunek: odświeżenie bramki przed kodem). Decyzje są warunkowe wobec ZAL-007 i ZAL-009.

## Decyzje merytoryczne (rola 01, 26.10.2026)
| ID | Decyzja | Podstawa | Odrzucone |
|---|---|---|---|
| DM-01 | Hierarchia źródeł dla treningu i zdrowia przejęta z Treningu (CLAUDE.md, „Hierarchia źródeł dla treningu i zdrowia”, szczeble 1–5) wraz z zasadą liczby źródeł (zmiana 18.10.2026) | reguła decyzji właściciela 26.10.2026; ta sama dziedzina | domyślna hierarchia biblioteki ról (`zrodla.md`: przepisy → publikacje → instytucje), bo nie rozróżnia stanowisk organizacji naukowych od pojedynczych badań |
| DM-02 | Wyjątek dla wskazówek techniki: 2 zgodne niezależne źródła szczebla 4 (ustawienie, przebieg, częste błędy, przedziały kątów, proste wskazówki oddechu) | CLAUDE.md Treningu, 25.10.2026 | — |
| DM-03 | Reguły zmiany kroku (awans, cofnięcie, start, powrót po przerwie) są parametryczne: logika w BRD (RD-01…RD-06), liczby z badań R-01…R-13; do czasu przeglądu badacza liczby są `[DO USTALENIA]` | CLAUDE.md Treningu („Nie zgaduj liczb nieznanego pochodzenia”); `docs/brd/reguly.md` | wpisanie liczb z praktyki trenerów (szczebel 5) jako ustalonych |

## Decyzje przejęte z Treningu (rola 01, 26.10.2026)
| ID | Decyzja | Odnośnik w Treningu |
|---|---|---|
| DP-17 | Plan dobiera się sam, bez ręcznej edycji; zmiany planu (awans, cofnięcie kroku, powrót po przerwie) to propozycja do zatwierdzenia, z „Cofnij” | właściciel 25.10.2026 (docs/18); deload „tylko jako propozycja do zatwierdzenia” (CLAUDE.md, 08.10.2026) |
| DP-18 | Podgląd planu przed zapisem (wynik do przejrzenia) | generator Treningu: „wynik do przejrzenia przed zapisem” (CLAUDE.md, 08.10.2026) |
| DP-19 | Dane tylko w telefonie, bez konta, bez wywołań sieciowych; pełne działanie offline | Trening BRD ZP-05 i NFR „brak wywołań sieciowych”; DP-08 |
| DP-20 | Kopia zapasowa JSON, eksport i import z kopią bezpieczeństwa przed importem; aktualizacja zachowuje dane (test na zapisach wydanych wersji) | Trening BRD, wymagania o danych (kopia, eksport, migracja) |
| DP-21 | Apple Zdrowie opcjonalnie: zapis ukończonych treningów; trening z samych ćwiczeń z masą ciała jako `functionalStrengthTraining` | Trening `lib/health.ts` (rodzaj treningu), docs/28 |
| DP-22 | Zegarek Apple: zakres jak w Treningu (wyświetla bieżące ćwiczenie, przerwę, odhacza; bez edycji); wersja, w której wchodzi, należy do roli 03 | Trening docs/18 13.10.2026 (ZEGARKI) |
| DP-23 | Zapowiedzi głosowe domyślnie wyłączone | Trening D-005 (20.10.2026) |
| DP-24 | Brak porad medycznych; zdanie o konsultacji z lekarzem lub fizjoterapeutą przy bólu, urazie, chorobie (jak `MedicalNote`) | CLAUDE.md Treningu; Trening BRD, zastrzeżenie medyczne |
| DP-25 | Aplikacja nie jest skierowana do dzieci; ocena wieku 9+ (jedyne „tak”: Health or Wellness Topics); Health & Fitness bez kategorii dodatkowej; wyrób medyczny „No” | Trening docs/18 21.10.2026 (Q7 A) i 26.10.2026 (Z-19, Z-20, Z-22) |
| DP-26 | Dostępność: wszystkie kraje poza Chinami kontynentalnymi (brak ICP) | Trening docs/18 26.10.2026 (Z-21) |
| DP-27 | Wzorce interakcji (sposób wywołania, potwierdzenie, „Anuluj” po lewej w nagłówku okna, VoiceOver) jak Trening docs/32 | CLAUDE.md Treningu, 13.10.2026 |
| DP-28 | Teksty naturalne, bez pouczania; słownik terminów obowiązuje tłumacza | CLAUDE.md Treningu, 25.10.2026 |
| DP-29 | Źródła publicznie anonimowo (aplikacja, strona, opis sklepu) | CLAUDE.md Treningu, 25.10.2026 |
| DP-30 | Przypomnienia: zgoda na powiadomienia zbierana przy pierwszym zaplanowanym dniu, nie na starcie | Trening BRD, generator planu (zgoda przy pierwszym zaplanowanym dniu) |
| DP-31 | Porzucony trening na żywo: pytanie po 2 h, ciche zakończenie po 6 h | Trening D-008 (19.10.2026) |
| DP-32 | Dzień treningowy w limicie: ukończony trening na żywo dłuższy niż 7 minut bez pauz; wstecz, import, anulowany i trwający nie zużywają dnia | Trening `lib/access.ts` (`MIN_LIVE_MINUTES_FOR_DAY = 7`, zmiana 23.10.2026); uszczegółowienie DP-02 |
| DP-33 | Każdy realny przepływ ma scenariusz Maestro albo wyjątek z powodem; każda funkcja ma pełen zakres testów (definicja ukończenia) | CLAUDE.md Treningu, 06.10 i 14.10.2026 |
| DP-34 | Polityka prywatności na stronie studia (wzór: apps4brew.com/<aplikacja>/privacy.html), standardowa licencja Apple (Standard EULA) | Trening docs/18 14.10 i 26.10.2026 (Z-18) |
| DP-35 | Miejsca i sprzęt: ćwiczenia dobierane do tego, czym użytkownik dysponuje | Trening BRD, miejsca i sprzęt |
| DP-36 | Program z kilku źródeł, nie kopia układu jednej książki | Trening docs/18 25.10.2026 (uwagi koordynatora do specyfikacji) |

## Decyzje właściciela z bramki E3 roli 01 (26.10.2026, przekazane przez koordynatora)
| ID | Decyzja (słowa z przekazania) | Rekomendacja / odrzucone | Zależy od |
|---|---|---|---|
| DK-04 | „ankieta na start, potem test w 1. treningu” | zgodnie z rekomendacją A; odrzucone B sama ankieta, C test przed planem | BRD RD-04, BR-STA-003; liczby przypisania kroku to konwencja (badacz R-06) |
| DK-05 | „test kontrolny można odłożyć raz o tydzień, potem pojawia się przy najbliższym treningu (z możliwością pominięcia)” | zgodnie z rekomendacją A; odrzucone B bez limitu, C obowiązkowy | BRD RD-05, BR-TST-002 |
| DK-06 | „Tylko pominięcie dziś” — plan działa dalej, przy kolejnym treningu pytanie „Nadal boli?”, tekst bez diagnozy (R-12); bez automatycznego wstrzymania drabiny | **wbrew rekomendacji** (rekomendacja: A, drabina wstrzymana do ręcznego wznowienia); odrzucone A i C (łatwiejszy krok) | BRD RD-07, BR-BEZ-001; tekst z badań R-12 |
| DK-07 | „podtrzymanie (rzadsze treningi) i propozycja nowego celu” | zgodnie z rekomendacją A; odrzucone B zamknięcie drabiny, C trudniejsze warianty | BRD BR-PST-002; częstotliwość podtrzymania bez źródła (OP-04) |

## Decyzje właściciela po badaniach R-01…R-13 (26.10.2026, przekazane przez koordynatora)
| ID | Decyzja (słowa z przekazania) | Rekomendacja / odrzucone | Zależy od |
|---|---|---|---|
| DK-08 | cele v1: „pełne cele (muscle-up, pistol, pompka jednorącz, L-sit)”; „czekamy na źródła”, a cele bez potwierdzonej kolejności blokują wydanie v1 (bez obejścia) | **wbrew rekomendacji badacza** (A: v1 tylko z potwierdzonymi krokami i cele pośrednie, B równolegle); odrzucone A i C (kroki z praktyki trenerów) | BRD BR-PLN-001 (bloker), OP-01, OP-11; DK-11 |
| DK-11 | książki: „najpierw szukamy darmowych źródeł szczebla 2–3”; zakup dopiero, gdy to nic nie da, i wtedy decyduje właściciel | — | badacz (w toku od 26.10.2026); warunkowe: ponowna decyzja o zakupie |
| DK-09 | wiek: „jak w Treningu, czyli ocena 9+”; na starcie jedno pytanie o rok urodzenia w ankiecie; poniżej 18 lat test kontrolny bez serii do upadku i tekst o treningu pod okiem trenera | odrzucone: tryb młodzieżowy z osobnymi źródłami, sama informacja bez pytania | BRD RD-09, BR-STA-004; S-36 |
| DK-10 | „drabina podciągania wymaga drążka albo kółek”; bez nich drabina niedostępna, aplikacja wyjaśnia dlaczego | zgodnie z rekomendacją badacza; odrzucone zamienniki ze stołu lub drzwi (brak źródeł o bezpieczeństwie) | BRD BR-PLN-004 |
| DK-12 | po „Tak” na „Nadal boli?”: ćwiczenie znowu pominięte i tekst o specjaliście; pytanie przy każdym kolejnym treningu, aż padnie „Nie” (OP-30, opcja A) | zgodnie z rekomendacją; odrzucone B (inny cel po 3 × „Tak”, konwencja), C (wykonać ćwiczenie) | BRD RD-07, BR-BEZ-001 |

## Historia: decyzje bez analogii z kroku 0 (rozstrzygnięte 26.10.2026, wyżej)
- **DK-01 wspólna czy osobna subskrypcja z Treningiem** — opcje w `docs/monetyzacja.md` i raporcie roli 02 z 26.10.2026; rekomendacja A (osobne produkty, ta sama konstrukcja i ceny).
- **DK-02 powiązanie z Treningiem w aplikacji** — rekomendacja B (wzajemny odnośnik w „Więcej”, bez rabatu).
- **DK-03 co oznacza werdykt „budować, warunkowo” dla kolejności prac** — rekomendacja A (specyfikacja i BRD teraz; odświeżenie bramki danymi Treningu przed pisaniem kodu).

## Pytania bez analogii w Treningu — rola 02, sesja 2 (otwarte, 26.10.2026, do koordynatora)
| ID | Pytanie | Opcje | Rekomendacja |
|---|---|---|---|
| DK-13 | Ekran zakupu w trybie poniżej 18 lat (DK-09; Trening nie pyta o wiek) | A ten sam ekran co dla dorosłych (zakup i tak przez Apple, „Zapytaj o zakup” w rodzinie); B wersja neutralna: tylko co daje Pro, ceny ze sklepu, przywracanie, bez zachęt (koszt: jeden wariant tekstu i test); C bez limitu dla osób poniżej 18 lat (obejście przez wpisanie roku, utrata przychodu) | **B** — mniejsze ryzyko zarzutu „wezwania dzieci do zakupu” (dyrektywa 2005/29/WE zał. I pkt 28; cytat z wzorców roli, odczyt 18.10.2026, dziś niesprawdzony: EUR-Lex zwrócił pustą stronę) przy małym koszcie |
| DK-14 | Przerwa wymuszona limitem a powrót po przerwie (RD-06) i test kontrolny (RD-05). Przy 3 dniach w tygodniu 5 darmowych dni kończy się ok. 11–12 dnia miesiąca, więc przerwa do 1. dnia następnego miesiąca (ok. 19 dni) przekracza testowe B = 14 i co miesiąc daje propozycję łatwiejszego kroku | A bez wyjątku: przerwa to przerwa; propozycja i tak wymaga zatwierdzenia, jest „Cofnij” i dopisanie wstecz; B przed propozycją RD-06 pytanie „Trenowałeś w tym czasie bez aplikacji?” (Tak → dopisz wstecz albo kontynuuj bez zmiany; Nie → RD-06 jak zwykle); C dni zablokowane limitem nie liczą się do przerwy (merytorycznie błędne: brak treningu to brak treningu) | **B** — zgodne ze źródłami, bez presji zakupowej i bez cichego obniżania kroku |

## DK-15 — gdzie strona z ćwiczeniami kalisteniki (właściciel, 26.10.2026)
Decyzja: **w techniqueatlas, nowa sekcja „Progresje”** (drabiny i kroki; strony kroków polecają tę aplikację). Odrzucone: osobna strona (dzieli ruch w tym samym temacie, podwójne utrzymanie). Skutek dla specyfikacji: dane drabin eksportowane na stronę tak jak katalog Treningu (do zapisania jako wymaganie przy wznowieniu).

## DK-16 — kiedy repo trafia do organizacji Apps4Brew (właściciel, 28.10.2026 ~21:50 UTC, przekazane przez koordynatora)
- **Decyzja (wszystkie aplikacje i strony studia):** projekt rozwijamy na prywatnym koncie GitHub właściciela, dopóki nie osiągnie wydania na produkcji (aplikacja w App Store albo publikacja strony); do organizacji Apps4Brew przenosimy dopiero po nim. Kalistenika: po pierwszym wydaniu w App Store. Trening: po wydaniu 1.0 (zgodne z D7 A, Trening docs/46). Strona techniqueatlas: po publikacji.
- Zastępuje zapis „organizacja Apps4Brew, zakłada właściciel” w CLAUDE.md (repo od startu w organizacji). Odrzucone: repo od początku w organizacji (narzut uprawnień, sekretów i aplikacji Claude dla projektów, które mogą nie wyjść na produkcję).

## DK-17 — rejestr zobowiązań na przyszłość (właściciel, 28.10.2026 ~22:00 UTC, przekazane przez koordynatora)
- Akcje z warunkiem startu (data albo zdarzenie) w `docs/zobowiazania.md` w każdym repo studia; CLAUDE.md każe go czytać przed planem, hak startu sesji wypisuje „Aktywne”. Odrzucone: jeden wspólny plik w repo `prompts`; same zaplanowane zadania.


## DK-18 — nazwa ostateczna najpierw w App Store Connect (właściciel, 30.10.2026 ~21:30 PL, przekazane przez koordynatora Treningu)
- **Decyzja (wszystkie nowe aplikacje studia, wariant A):** nazwę ostateczną aplikacji najpierw rezerwujemy w App Store Connect (rekord aplikacji), dopiero potem pojawia się w repo, na stronie albo w postach; do tego czasu publicznie tylko nazwa robocza. Kalistenika: przy wyborze nazwy ostatecznej — rekord w ASC przed pierwszym publicznym użyciem. *Dlaczego:* przypadek z forum (nazwa i zrzuty skopiowane ze strony autora przed jego zgłoszeniem); spór o nazwę u Apple wymaga praw do znaku: „If another developer is using the app name and you have trademark rights to it, you can submit a claim” (developer.apple.com/help/app-store-connect/create-an-app-record/add-a-new-app, odczyt 30.10.2026). Otwarte: jak długo Apple trzyma nazwę w rekordzie bez buildu.
- Odrzucone: B — dodatkowo bez publicznych zrzutów i opisów niewydanych funkcji (ogranicza marketing przed startem); C — bez zasady. Zapis źródłowy: Trening CLAUDE.md i docs/18 (30.10.2026).
