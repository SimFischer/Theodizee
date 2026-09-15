# Theodizee: Leibniz und Voltaire

Interaktive Unterrichtseinheit für den Religionsunterricht, umgesetzt nach dem
Stundenraster vom 05.05.2025. Läuft als statische Seite auf GitHub Pages; die
Abgaben liegen in einem Supabase-Projekt.

## Der Stundenverlauf in der Anwendung

| Phase der Stunde | Lernschritte in der Anwendung |
|---|---|
| Einstieg (Karikatur) | 1 – beschreiben, deuten, Arten von Leid |
| Erarbeitung I (AB Leibniz) | 2, 3, 4 – Kernaussage, Zitat, Begründungen |
| Sicherung I (Assoziation) | 5 – „GERECHT“ aus Leibniz’ Sicht |
| Gelenk (Film, Lissabon 1755) | 6 – Film, Bericht, Stellungnahme zur Leitfrage |
| Erarbeitung II (AB Voltaire) | 7, 8, 9 – Kontext, Zitate, Argumente gegen Leibniz |
| Sicherung II (Assoziation) | 10 – „GERECHT“ aus Voltaires Sicht |
| — | 11 – Schaubild: beide Positionen im Überblick |
| Vertiefung (Debatte) | 12 – Vorbereitung, 13 – Ertrag und eigene Stellungnahme |
| | 14 – Abgabe |

Die Debatte selbst läuft weiterhin mündlich in Vierergruppen nach den Regeln
von *Jugend debattiert*. Lernschritt 12 bereitet den eigenen Auftritt vor,
Lernschritt 13 hält den Ertrag fest und mündet in eine begründete
Stellungnahme im Anforderungsbereich III.

## Vor dem ersten Einsatz

1. **Karikatur ablegen.** Lernschritt 1 erwartet die Datei
   `assets/bilder/karikatur.jpg` („Schreckensbilanz“). Fehlt sie, erscheint
   dort ein Hinweiskasten. Siehe `assets/bilder/HIER_BILDER_ABLEGEN.md`.
   Die Reserve-Grafik „Naturkatastrophen“ liegt bereits als
   `assets/bilder/naturkatastrophen.jpg` bei; sie steckt in einem
   zugeklappten Impuls, den die Schülerinnen und Schüler erst öffnen, wenn sie
   bei der Beschreibung oder Deutung nicht weiterkommen — so nimmt sie die
   eigene Deutung nicht vorweg.
2. **Film prüfen.** Lernschritt 6 verlinkt den Film über das Erdbeben von
   Lissabon (youtube-nocookie, öffnet in einem neuen Tab). Die Adresse steht in
   `assets/js/seiten.js` beim Feld `link`.
3. **Datenbank.** Diese Einheit schreibt und liest die Kennung `theodizee`.
   Läuft im selben Supabase-Projekt schon eine andere Einheit, genügt einmalig:

   ```sql
   alter table public.abgaben add column if not exists einheit text not null default 'standard';
   create index if not exists abgaben_einheit_idx on public.abgaben (einheit);
   ```

   Bei einem frischen Projekt `supabase_setup.sql` vollständig ausführen.
4. **Zitate gegenlesen.** Die Texte der Arbeitsblätter lagen nur als Bilddatei
   vor und wurden von Hand übertragen. Bitte die wörtlichen Zitate von Leibniz
   und Voltaire einmal mit deinen Originalen abgleichen.

## Inhalt anpassen

Vier Dateien, am Code musst du nichts ändern:

```
assets/js/einheit.js           Titel, Kopfzeile, Kennungen
assets/js/quelle.js            die Texte, in Abschnitte geteilt
assets/js/seiten.js            Lernschritte und Aufgaben
assets/js/tafelbild_inhalt.js  das Schaubild
```

Änderst du Dateien, hänge in `index.html` und `lehrer.html` eine neue Nummer an
die `?v=`-Angaben, sonst behalten die iPads die alten Dateien im Zwischenspeicher.

## Für Lehrkräfte

`lehrer.html` — Anmeldung über Supabase, zusätzlich Freischaltung in der
Tabelle `lehrkraefte`. Dort: Übersicht aller Abgaben mit Filtern, Detailansicht
mit automatischer Richtig-Falsch-Markierung, Export als CSV und JSON, Löschen
einzelner Einträge. Über den Fußlink erreichst du die Schüleransicht im
Vorschaumodus mit allen freigeschalteten Lernschritten.

## Datenschutz

An die Datenbank gehen nur ein Kürzel aus je zwei Buchstaben von Vor- und
Nachname sowie die Kursangabe; der vollständige Name bleibt auf dem Gerät und
erscheint nur im eigenen PDF der Schülerinnen und Schüler.
