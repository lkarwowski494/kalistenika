# Stan sztafety
Ścieżka: greenfield · Aktualizacja: 2026-10-26

| Rola | Tryb | Stan | Commit | Artefakty | Otwarte decyzje |
|---|---|---|---|---|---|
| 02 Monetyzacja (krok 0, moduł oplacalnosc) | build | zakończona 2026-10-26: werdykt „budować, warunkowo”; DK-01 = A, DK-02 = B, DK-03 = A | 3f226c5 | docs/monetyzacja.md, docs/monetyzacja/ | — |
| 01 Odkrywanie | build | STOP przed E4 2026-10-26 (gałąź `odkrywanie`): DK-04…DK-07 zapisane, badania R-01…R-13 wpisane (statusy reguł), BRD kontrola kod 0 | zob. `git log odkrywanie` | CLAUDE.md, docs/brd/, tests/wektory/brd.json, scripts/kontrola-brd.mjs, docs/decyzje.md, docs/zalozenia.md | DK-08, DK-09, DK-10, DK-11 (u właściciela), OP-30 |

## Następny krok
1. Właściciel (przez koordynatora): DK-08 cele v1, DK-09 wiek, DK-10 ciągnięcie bez drążka, DK-11 zakup książek; do tego OP-30 („Nadal boli?” → „Tak”). Po odpowiedzi rola 01 zapisuje je dosłownie, uzupełnia BR-PLN-001, BR-PLN-004, BR-STA-003, BR-STA-004, BR-PST-002 i przechodzi E4.
2. Plik badań (`badania-R01-R13.md`, `dane-kandydat-drabiny.json`, scratchpad koordynatora) do przeniesienia do `docs/research/` po przejrzeniu nazw (źródła szczebla 5 i nazwy sklepów na Dysk).
3. Po E4: 02-monetyzacja sesja 2 i 03 zakres. Kod dopiero po odświeżeniu bramki danymi Treningu (DK-03).
