# Lerneinheit — Vorlage

Grundgerüst für interaktive Unterrichtseinheiten mit Quellentext, gestuften
Lernschritten und Online-Abgabe. Läuft als statische Seite auf GitHub Pages,
ohne Build-Schritt; die Abgaben liegen in einem Supabase-Projekt.

**Zum Anpassen: [ANPASSEN.md](ANPASSEN.md).** Diese Datei beschreibt, was die
Vorlage kann.

## Für Schülerinnen und Schüler

* **Quellentext angeheftet** — der zum Lernschritt gehörende Abschnitt bleibt
  oben sichtbar, lässt sich ein- und ausklappen, Zeilennummern am Rand.
* **Textmarkierungen** in vier Farben, auch mit dem Finger oder dem Pencil.
* **Sieben Aufgabentypen** von Einfachauswahl bis Erörterung mit Gliederungshilfe.
* **Gestufte Freischaltung** — die nächste Seite öffnet sich, wenn die aktuelle
  richtig bearbeitet ist. Rückmeldungen sind als Hilfen formuliert.
* **Interaktives Tafelbild** — Bausteine per Tippen oder Ziehen einordnen,
  Verbindungslinien werden automatisch gezeichnet.
* **Automatische Speicherung** auf dem Gerät, dazu Download und Upload des
  Arbeitsstands als Datei für den Gerätewechsel.
* **Ergebnisse als PDF** — auf jeder Seite erreichbar, auch nach der Abgabe.
  Enthält alle Lernschritte mit den eigenen Antworten, Tafelbild und
  Markierungen, ohne Musterlösungen.
* **Abgabe** — Zwischenstand jederzeit an die Lehrkraft senden, am Ende
  verbindlich abgeben.

## Für Lehrkräfte

* **Geschützte Ansicht** unter `lehrer.html`: Anmeldung über Supabase Auth,
  zusätzlich Freischaltung in der Tabelle `lehrkraefte`.
* **Übersicht** aller Abgaben mit Filter nach Kurs, Art und Sortierung,
  Detailansicht mit allen Antworten und automatischer Richtig-Falsch-Markierung.
* **Export** als CSV für die Tabellenkalkulation, als JSON zur Sicherung,
  einzeln als HTML oder Druckansicht.
* **Löschen** einzelner Einträge mit doppelter Sicherheitsabfrage.
* **Vorschaumodus** — `index.html?vorschau=1` öffnet die Schüleransicht mit
  allen Lernschritten, nur für angemeldete und freigeschaltete Konten.

## Technik

Reines HTML, CSS und JavaScript ohne Framework und ohne Build-Schritt. Das
Supabase-SDK wird bei Bedarf nachgeladen. Row Level Security sorgt dafür, dass
Schülergeräte ausschließlich einfügen können — lesen, ändern und löschen dürfen
nur freigeschaltete Lehrkräfte.

Ohne eingetragene Supabase-Zugangsdaten läuft die Anwendung vollständig weiter;
nur die Online-Abgabe ist dann deaktiviert.

```
index.html              Schüleransicht
lehrer.html             Lehrkräfteansicht
supabase_setup.sql      Tabellen, Rechte und Sicherheitsregeln
assets/js/einheit.js           ← Einstellungen der Einheit
assets/js/quelle.js            ← der Quellentext
assets/js/seiten.js            ← Lernschritte und Aufgaben
assets/js/tafelbild_inhalt.js  ← das Schaubild
assets/js/supabase_config.js   ← Zugangsdaten
assets/js/*.js                 übrige Dateien: die Programmlogik
assets/css/style.css           Gestaltung
```

Die vier mit ← markierten Dateien sind die, die du für eine neue Einheit
anfasst.
