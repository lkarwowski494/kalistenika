# BRD Kalistenika — errata (rozbieżności wejść i prośby o zmianę)
Aktualizacja: 2026-10-26

| ID | Rozbieżność albo prośba | Od / do | Rozstrzygnięcie | Stan |
|---|---|---|---|---|
| ER-01 | BRD Treningu (wymaganie o dniu treningowym, aktualizacja 20.10.2026) podaje próg 20 minut, a kod Treningu (`lib/access.ts`, `MIN_LIVE_MINUTES_FOR_DAY = 7`, zmiana 23.10.2026) i DP-02 — 7 minut | rola 01 → koordynator Treningu | źródłem prawdy jest kod i decyzja z 23.10.2026; RD-08 i DP-32 używają 7 minut; BRD Treningu do poprawy przy najbliższej zmianie (osobna sprawa repo Treningu) | otwarte w Treningu |
| ER-02 | Specyfikacja analityka (D9: zegarek „bez w v1”) a analogia z Treningiem (zegarek przed App Store) | analityk → rola 03 | zakres zegarka przejęty z Treningu (DP-22); moment wydania jako hipoteza H-04 dla roli 03 | do roli 03 |
| ER-03 | Notatka koordynatora „test kontrolny co ~4 tygodnie” (25.10.2026) nie ma źródła | koordynator → badacz | liczba jako wartość testowa w RD-05; T otwarte (OP-07) | do badacza |
| ER-04 | Specyfikacja analityka podaje drabinę „deska → L-sit” jako cel; brak źródła kroków | analityk → badacz | cele tylko jako H-02; kroki z R-01 (OP-01) | do badacza |
