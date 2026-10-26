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

## Decyzje bez analogii — czekają na właściciela
- **DK-01 wspólna czy osobna subskrypcja z Treningiem** — opcje w `docs/monetyzacja.md` i raporcie roli 02 z 26.10.2026; rekomendacja A (osobne produkty, ta sama konstrukcja i ceny).
- **DK-02 powiązanie z Treningiem w aplikacji** — rekomendacja B (wzajemny odnośnik w „Więcej”, bez rabatu).
- **DK-03 co oznacza werdykt „budować, warunkowo” dla kolejności prac** — rekomendacja A (specyfikacja i BRD teraz; odświeżenie bramki danymi Treningu przed pisaniem kodu).
