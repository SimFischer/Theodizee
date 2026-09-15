# Eine neue Lerneinheit anlegen

Diese Vorlage enthält die vollständige Technik: Lernschritte mit Freischaltung,
Textmarkierungen, interaktives Tafelbild, lokale Zwischenspeicherung, Download
und Upload des Arbeitsstands, PDF-Übersicht für die Schülerinnen und Schüler,
Online-Abgabe, geschützte Lehrkräfteansicht mit Export und Löschfunktion sowie
einen Vorschaumodus für Lehrkräfte.

Inhaltlich ist alles ein austauschbares Beispiel. Du passt vier Dateien an –
am Code selbst musst du nichts ändern.

---

## Schritt 1 — `assets/js/einheit.js`

Titel, Kopfzeile und zwei technisch wichtige Kennungen.

| Feld | Bedeutung |
|---|---|
| `id` | Kennung in der Datenbank. Die Lehrkräfteansicht zeigt nur Abgaben mit genau dieser Kennung. |
| `speicherSchluessel` | Schlüssel für die Speicherung auf dem Schülergerät. |
| `titel`, `untertitel` | Überschriften der Anwendung |
| `kopfMarke`, `kopfZusatz` | Beschriftung oben links |
| `startHinweise` | die Liste „So arbeitest du" auf der Startseite |

> **Unbedingt beachten:** `id` und `speicherSchluessel` müssen für jede Einheit
> verschieden sein. Liegen zwei Einheiten unter derselben Adresse — etwa
> `deinname.github.io/einheit-a/` und `deinname.github.io/einheit-b/` — teilen
> sie sich den lokalen Speicher des Browsers. Bei gleichen Schlüsseln
> überschreiben sich die Arbeitsstände deiner Klassen gegenseitig.

## Schritt 2 — `assets/js/quelle.js`

Der Text, mit dem gearbeitet wird, in Abschnitte zerlegt. Jeder Abschnitt
gehört später zu einem Lernschritt. Die Zeilennummern `von`/`bis` erscheinen am
Rand und erlauben präzise Verweise im Unterricht — zähle sie so, wie sie auf
deinem Arbeitsblatt stehen.

Trage hier nur Texte ein, die du für den Unterricht verwenden darfst: eigene
Texte, gemeinfreie Werke oder Material mit entsprechender Lizenz.

## Schritt 3 — `assets/js/seiten.js`

Die Lernschritte. Jeder Eintrag ist eine Seite; das Feld `abschnitt` verbindet
sie mit einem Abschnitt aus `quelle.js`. Von jedem Aufgabentyp steht genau ein
kommentiertes Beispiel in der Datei:

| Typ | wofür |
|---|---|
| `mc` | Einfachauswahl, eine richtige Antwort |
| `multi` | Mehrfachauswahl |
| `text` | Freitext mit Mindestlänge, optional mit verlangten Stichworten |
| `position` | Stellungnahme wählen und begründen |
| `auswahl` | Thema aus einer Liste wählen, eigenes möglich |
| `zuordnung` | Begriffe in Körbe einordnen |
| `aussagen` | Aussagen bewerten, teils mit Begründung |

Eine Seite mit `tafel: true` zeigt statt Aufgaben das Schaubild. Die letzte
Seite trägt `abgabe: true`; davon gibt es genau eine.

Für eine Schreibaufgabe im Anforderungsbereich III (Erörterung, Stellungnahme)
siehe den letzten Lernschritt: `zeilen` macht das Feld größer, `struktur`
erzeugt die aufklappbare Gliederungshilfe, `anstoesse` die Denkanstöße.

Damit die nächste Seite aufgeht, müssen alle Aufgaben der aktuellen Seite
richtig bearbeitet sein. Die Rückmeldungen dafür stehen in den Feldern
`hinweis`, `hinweisLeer` und Verwandten — formuliere sie als Hilfe, nicht als
Fehlermeldung.

## Schritt 4 — `assets/js/tafelbild_inhalt.js`

Felder, Bausteine und Verbindungslinien des Schaubilds. Bausteine mit
`feld: null` sind Ablenker, die nirgends hingehören. Brauchst du kein
Schaubild: `aktiv: false` setzen und die Seite mit `tafel: true` aus
`seiten.js` löschen.

## Schritt 5 — Datenbank

Beide Einheiten können dasselbe Supabase-Projekt benutzen; die Spalte `einheit`
trennt sie. Trage in `assets/js/supabase_config.js` dieselben zwei Werte ein
wie in der bestehenden Einheit.

Wurde `supabase_setup.sql` in diesem Projekt schon einmal ausgeführt, genügt
für die neue Spalte:

```sql
alter table public.abgaben add column if not exists einheit text not null default 'standard';
create index if not exists abgaben_einheit_idx on public.abgaben (einheit);
```

Bei einem frischen Projekt führst du stattdessen `supabase_setup.sql`
vollständig aus und schaltest dein Konto wie dort beschrieben frei.

---

## Veröffentlichen

Repository auf GitHub anlegen, Dateien hochladen, unter *Settings → Pages* als
Quelle den Branch wählen. Nach einer Minute ist die Einheit unter
`deinname.github.io/repository-name/` erreichbar.

Änderst du später Dateien, hänge in `index.html` und `lehrer.html` eine neue
Nummer an die `?v=`-Angaben. Sonst behalten die iPads die alten Dateien im
Zwischenspeicher.

## Datenschutz

An die Datenbank gehen nur ein Kürzel aus je zwei Buchstaben von Vor- und
Nachname sowie die Kursangabe; der vollständige Name bleibt auf dem Gerät.
Das ist Pseudonymisierung, keine Anonymisierung — die Daten bleiben
personenbezogen. Die Bewertung des Gesamtverfahrens (Auftragsverarbeitung,
Genehmigung durch die Schule, Verarbeitungsverzeichnis) ersetzt das nicht.
Zuständig sind die Datenschutzbeauftragte deiner Schule und das ULD.
