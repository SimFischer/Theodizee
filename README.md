# Theodizee: Leibniz und Voltaire

Interaktive Unterrichtseinheit für den Religionsunterricht, umgesetzt nach dem
Stundenraster vom 05.05.2025. Läuft als statische Seite auf GitHub Pages; die
Abgaben liegen in einem Supabase-Projekt.

## Der Stundenverlauf in der Anwendung

| Phase der Stunde | Lernschritte in der Anwendung |
|---|---|
| Einstieg (Karikatur) | 1 – deuten &middot; 2 – Arten von Leid zuordnen |
| Erarbeitung I (AB Leibniz) | 3 – Kernaussage &middot; 4 – Zitat prüfen &middot; 5 – Begründungen zuordnen |
| Gelenk (Lissabon 1755) | 6 – Stellungnahme zur Leitfrage |
| Erarbeitung II (AB Voltaire) | 7 – Lückentext &middot; 8 – Trost der Philosophen &middot; 9 – Argumentationskette |
| Sicherung | 10 – Schaubild: beide Positionen im Überblick |
| Vertiefung (Gottesbild) | 11 – Theodizee-Trilemma &middot; 12 – Ertrag und eigene Stellungnahme |
| | 13 – Abgabe |

Die Stunde läuft vollständig in der Anwendung; es ist keine mündliche Phase
und keine Gruppenarbeit nötig. Die Erarbeitung ist bewusst knapp gehalten:
**Die Lernschritte 1 bis 9 haben je genau eine Aufgabe** und wechseln dabei
die Methode – deuten, zuordnen, Aussagen prüfen, Position beziehen,
Lückentext, Argumentationskette sortieren. Das Gewicht der Stunde liegt auf
dem Schaubild (10) und der Vertiefung (11 und 12).

Lernschritt 10 stellt beide Sichtweisen gegenüber. Lernschritt 11 führt vom
Leid zum **Gottesbild**: Er entfaltet das Theodizee-Trilemma (Gott ist
allmächtig – Gott ist gut – es gibt sinnloses Leid). Die Schülerinnen und
Schüler ordnen gängige Antworten danach, welchen der drei Sätze sie
preisgeben, prüfen, was Leibniz und Voltaire über Gott voraussetzen,
entscheiden sich begründet für einen Weg und benennen das Gottesbild, das
daraus folgt. Lernschritt 12 sichert den Ertrag und mündet in die begründete
eigene Stellungnahme im Anforderungsbereich III.

Die Aufgaben liegen im Anforderungsbereich II und III: Zuordnungen, die
Prüfung von Aussagen mit Begründungspflicht (`trifft zu / muss präzisiert
werden / trifft nicht zu`), ein Lückentext, eine Argumentationskette zum
Sortieren und Erörterungsaufgaben. Multiple-Choice kommt nicht vor.

### Rückmeldung und Sperren

* **Nur geschlossene Aufgaben sperren die Seite.** Auswahl, Zuordnung,
  Lückentext, Argumentationskette, die Einordnung bei `aussagen` und die
  Positionswahl müssen stimmen, bevor es weitergeht. **Freitexte halten
  niemanden auf** – zu kurze oder fehlende Texte erscheinen nur als Hinweis
  und tauchen vor der Abgabe unter „Es fehlen noch Pflichtbereiche“ auf.
* **Falsche Aufgaben werden markiert**: rote Kante, roter Kasten mit dem
  Hinweis direkt an der Aufgabe. Die Markierung verschwindet, sobald die
  Antwort geändert wird.
* **Schnellsprung zum Text**: Im Fehlerkasten steht ein Knopf zur
  zugehörigen Textstelle. Standard ist der Abschnitt der Seite; mit dem Feld
  `stelle: "v3"` lässt sich ein anderer Abschnitt angeben.
* **Gestufte Tipps**: Jede Aufgabe kann `tipps: [ ... ]` mitbringen. Beim
  ersten Fehlversuch erscheint der normale Hinweis, ab dem zweiten die
  Stufen aus `tipps` – üblicherweise erst ein Denkanstoß, dann die
  Stolperstellen, zuletzt die Lösung zur Selbstkontrolle. Gezählt wird pro
  Aufgabe in `state.versuche`; der Zähler wird mitgespeichert.

### Aufgabentypen

`text`, `position`, `mc`, `multi`, `auswahl`, `akrostichon`, `zuordnung`,
`aussagen` sowie zwei neuere Typen:

* **`kette`** – Bausteine in die richtige Reihenfolge bringen. Braucht
  `items` (Reihenfolge der Liste = Anzeige im Vorrat, also mischen) und
  `reihenfolge` (die Lösung als Liste der Ids).
* **`lueckentext`** – Fließtext mit Auswahlfeldern. Braucht `teile`: eine
  Liste, in der Zeichenketten der Text sind und Objekte
  `{ id, optionen: [...], loesung: 0 }` eine Lücke.

## Vor dem ersten Einsatz

1. **Karikatur ablegen.** Lernschritt 1 erwartet die Datei
   `assets/bilder/karikatur.jpg` („Schreckensbilanz“). Fehlt sie, erscheint
   dort ein Hinweiskasten. Siehe `assets/bilder/HIER_BILDER_ABLEGEN.md`.
   Die Reserve-Grafik „Naturkatastrophen“ liegt bereits als
   `assets/bilder/naturkatastrophen.jpg` bei; sie steckt in einem
   zugeklappten Impuls, den die Schülerinnen und Schüler erst öffnen, wenn sie
   bei der Beschreibung oder Deutung nicht weiterkommen — so nimmt sie die
   eigene Deutung nicht vorweg.
2. **Film (optional).** Lernschritt 6 kommt ohne Film aus; der Bericht trägt
   die Phase allein. Willst du doch einen Film zeigen, ergänze im Lernschritt
   `gelenk` in `assets/js/seiten.js` wieder ein Feld `link` mit `titel`, `text`,
   `hinweis` und `url` – und prüfe die Adresse vor dem Einsatz.
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
