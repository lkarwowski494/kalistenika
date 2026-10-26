# Kalistenika — wstępna specyfikacja analityka (26.10.2026) — HIPOTEZA dla sztafety ról

Decyzje już podjęte przez właściciela: osobna aplikacja na silniku Treningu (25.10); osobne repo w organizacji Apps4Brew + wspólny silnik jako pakiet wydzielony z Treningu po 1.1 (26.10); reguła: decyzje jak w Treningu, bez analogii → 3 opcje z rekomendacją (26.10).

## Cel i granice
- Prowadzona progresja do umiejętności z masą ciała (np. podciąganie negatywne → muscle-up); plan dobiera się sam (ankieta/test na starcie, test kontrolny ~co 4 tyg., regresja „za trudne → łatwiejszy wariant”); bez ręcznej edycji planu.
- NIE: dziennik siłowni, szablony, porady medyczne (przy bólu odesłanie do specjalisty), źródła publicznie, konto/serwer/analityka/reklamy („Data Not Collected”).
- Reużycie z Treningu: katalog (libKey, rid dla nowych kroków), figury v2 (po 1.1; utrzymania statyczne mogą wymagać rozszerzenia), wskazówki, trening na żywo (wzorce 24/29/30), zapis/kopia/migracje, Zdrowie, i18n, kod zakupów. Osobno: silnik drabin (nowa logika).

## Przepływy
P1 pierwsze uruchomienie (cel 1–4 drabin, sprzęt, poziom, podgląd planu, „Zaczynam”); P2 trening dnia; P3 test kontrolny; P4 regresja + akcja „Za trudne”, najniższy krok → „wstrzymana” + inny cel; P5 powrót po przerwie; P6 ból („Boli” → pominięcie dziś, tekst bez diagnozy, możliwe wstrzymanie). Każdy przepływ: Maestro albo wyjątek.

## Model danych
Ladder(id, goal, requiresEquipment, steps, prereq) · Step(exKey, metric, assist, prescription, passCriterion, failCriterion, easier/harder, cues, status, sources — tylko wewnętrznie) · UserLadderState(stepIndex, fails, paused, tests, lastSessionAt) · Assessment · zdarzenia zmiany kroku z powodem. Progi w jednym pliku, dokument generowany.

## Do zbadania (badacz) — żadna liczba nie jest ustalona
R-01 kroki drabin · R-02 kryterium przejścia · R-03 zakresy powtórzeń/czasów · R-04 częstotliwość/serie/przerwy/wysiłek · R-05 niepowodzenie · R-06 przypisanie poziomu · R-07 odstęp testu · R-08 powrót po przerwie · R-09 protokół testu maks. i bezpieczeństwo · R-10 negatywy i guma · R-11 warunki wstępne muscle-upa · R-12 ból · R-13 rozgrzewka. Ponadto: badanie przesiewowe bez porady medycznej, minimalny wiek (ocena 9+), zamiennik ciągnięcia bez drążka, typ treningu HealthKit.

## Monetyzacja (model Treningu STAŁY, nie zmieniamy)
Wspólna subskrypcja dwóch aplikacji wymaga serwera i uwierzytelnienia między aplikacjami (Apple StoreKit „Offering a subscription across multiple apps”) — sprzeczne z 0 zł / brak konta / Data Not Collected. Opcje: A osobne produkty, ta sama konstrukcja (rekomendacja analityka); B darmowe dolne kroki; C App Group na jednym urządzeniu; D płatna z góry.

## Ryzyka
1. Apple 4.3 (najważniejsze): inny rdzeń (drabiny, testy), inny ekran główny/ikona/nazwa, zrzuty od drabiny, notatka dla recenzenta, Trening nie dostaje drabin; ryzyko otwarte do przyjęcia pierwszego zgłoszenia.
2. Prawo autorskie programów (kolejność kroków z części wspólnej kilku źródeł; tylko legalne kopie).
3. Merytoryka (drabina bez źródeł nie wchodzi). 4. Bezpieczeństwo testów i bólu. 5. Regresja Treningu przy przejściu na pakiet (osobne wydanie 1.1.x). 6. Kolejka macOS (wspólny limit w organizacji?).

## Pakiet (granica)
W pakiecie: katalog (+ nowe kroki), figury v2 (+ wskazówki — do potwierdzenia), zapis/migracje/koperta kopii, zegarek, Zdrowie; runtime źródeł bez nazw + strażnik. Poza: UI, teksty, produkty/ceny, nazwa/ikona/motyw, Maestro. Otwarte: i18n-rdzeń, strażniki docs/32, adapter zakupów, timer. Wersjonowanie SemVer, kontrakt libKey, przypięcie wersji, dystrybucja z gita po tagu (bez sekretu), kod pakietu w trzecim repo (rekomendacja).

## Decyzje analityka (do przefiltrowania regułą „jak w Treningu”)
D2 cele v1 (A: 4 drabiny podciąganie→muscle-up, pompka→jednorącz, przysiad→pistol, deska→L-sit) · D3 zarabianie (A) · D4 poziom (C: ankieta + test w 1. treningu) · D5 podgląd planu (A — analogia: generator Treningu „wynik do przejrzenia”) · D6 zmiana kroku (B regresja auto z „Cofnij”, A awans z potwierdzeniem — analogia: deload) · D7 języki (analogia: 35 jak Trening) · D8 zakładki · D9 zegarek (A: bez w v1) · D10 nazwa (bez „Trening/Training”).

## Klasyfikacja decyzji wg reguły właściciela (analityk, 26.10.2026)
Z analogią w Treningu (przyjmujemy to samo): A1 zarabianie M5 S1 (osobne produkty, ta sama konstrukcja; liczby do bramki 02) · A2 okno „Uczciwe zasady” · A3 35 języków · A4 zegarek i Zdrowie · A5 podgląd planu przed zapisem · A6 zmiana kroku jako propozycja do zatwierdzenia (jak deload) · A7 „Za trudne”/„Pomiń dziś” jak docs/32 · A8 4 zakładki (Dziś/Umiejętności/Postępy/Więcej) · A9 prywatność · A10 anonimowość źródeł · A11 nazwa opisowa + znaki towarowe, bez „Trening/Training” · A12 sklep (Health & Fitness, 9+, wyrób medyczny No, bez Chin kontynentalnych) · A13 pakiet w osobnym publicznym repo (analogia: strona biblioteki) · A14 wydanie przez testflight.yml/release · A15 ból: MedicalNote.
Bez analogii (3 opcje + rekomendacja): B1 cele v1 (rek. 4 drabiny) · B2 ocena poziomu (rek. ankieta + test w 1. treningu) · B3 przełożenie testu kontrolnego (rek. raz o tydzień) · B4 drabina po bólu (rek. wstrzymana do ręcznego wznowienia) · B5 wspólne elementy poza pakietem (rek. i18n-rdzeń, zakupy, strażniki do pakietu; UI kopiowane) · B6 dystrybucja pakietu (rek. git po tagu, bez sekretu).
