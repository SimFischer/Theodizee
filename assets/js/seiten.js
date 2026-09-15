/* =====================================================================
   SEITEN  —  die Lernschritte und ihre Aufgaben
   ---------------------------------------------------------------------
   Aufbau einer Seite:
     id         eindeutiger Name (frei wählbar)
     kurz       Beschriftung des Kreises in der Kopfzeile
     kapitel    z. B. "Lernschritt 3"
     titel      Überschrift der Seite
     lead       einleitender Absatz (optional)
     abschnitt  Id eines Abschnitts aus quelle.js – der Text wird dann
                oben angeheftet; null, wenn kein Text nötig ist
     hilfe      Hinweiskasten (optional)
     tafel      true: statt Aufgaben erscheint das Tafelbild
     abgabe     true: die Abgabeseite; genau eine Seite, immer die letzte
     aufgaben   Liste der Aufgaben, siehe unten

   Aufgabentypen (unten ist von jedem genau ein Beispiel):
     mc         Einfachauswahl                loesung: Index
     multi      Mehrfachauswahl               loesung: Liste von Indizes
     text       Freitext                      minLen: Mindestzeichen
     position   Stellungnahme mit Begründung
     auswahl    Themenwahl aus Liste, eigenes Thema möglich
     zuordnung  Begriffe in Körbe einordnen
     aussagen   Aussagen bewerten, teils mit Begründung

   Jede Aufgabe braucht eine eindeutige id. Alle Aufgaben einer Seite
   müssen richtig bearbeitet sein, damit die nächste Seite aufgeht.
   ===================================================================== */
window.SEITEN = [

/* ---------------------------------------------------------------- Start */
{
  id: "start", kurz: "Start", kapitel: "Einstieg",
  titel: window.EINHEIT.titel,
  lead: window.EINHEIT.untertitel,
  abschnitt: null,
  start: true,
  aufgaben: []
},

/* ---------------------------------------------------------------- 1 */
{
  id: "s1", kurz: "1", kapitel: "Lernschritt 1",
  titel: "Die Grundfrage",
  lead: "Lies den ersten Abschnitt und kläre, worum es im Text eigentlich geht.",
  abschnitt: "s1",
  aufgaben: [

    /* --- Einfachauswahl ------------------------------------------- */
    { id: "a1", typ: "mc",
      frage: "Welche Frage stellt der Text ins Zentrum?",
      optionen: [
        "Ob wir Regeln wollen oder nicht.",
        "Welche Regeln gelten sollen und wer sie aufstellen darf.",
        "Wie viele Regeln ein Staat höchstens haben sollte."
      ],
      loesung: 1,
      hinweis: "Sieh dir den letzten Satz des Abschnitts an – dort steht die Frage ausdrücklich." },

    /* --- Mehrfachauswahl ------------------------------------------ */
    { id: "a2", typ: "multi",
      frage: "Welche Beispiele nennt der Text dafür, dass Regeln etwas ermöglichen?",
      zusatz: "Mehrere Antworten sind richtig.",
      optionen: ["ein Spiel", "eine Sprache", "ein Gesetzbuch", "ein Vertrag"],
      loesung: [0, 1],
      hinweis: "Der Text nennt genau zwei Beispiele. Lies die Mitte des Abschnitts noch einmal." },

    /* --- Freitext -------------------------------------------------- */
    { id: "a3", typ: "text",
      frage: "Gib den Widerspruch, den der Text beschreibt, in eigenen Worten wieder.",
      minLen: 120,
      platzhalter: "Einerseits … andererseits …",
      hinweisLeer: "Deine Antwort fehlt noch oder ist sehr knapp. Benenne beide Seiten des Widerspruchs.",
      /* Optional: verlangt bestimmte Stichworte. Jede innere Liste ist eine
         Alternative – eines der Wörter muss vorkommen. Zeile löschen, wenn
         du das nicht brauchst. */
      schluessel: [["frei", "freiheit"], ["regel", "regeln"]],
      hinweisSchluessel: "Verwende in deiner Antwort die Begriffe Freiheit und Regeln." }
  ]
},

/* ---------------------------------------------------------------- 2 */
{
  id: "s2", kurz: "2", kapitel: "Lernschritt 2",
  titel: "Zwei Arten von Regeln",
  lead: "Der zweite Abschnitt unterscheidet zwei Arten von Regeln. Arbeite die Unterschiede heraus.",
  abschnitt: "s2",
  aufgaben: [

    /* --- Zuordnung -------------------------------------------------- */
    { id: "b1", typ: "zuordnung",
      frage: "Ordne die Merkmale der jeweiligen Art von Regeln zu.",
      koerbe: [
        { id: "a", label: "Äußere Regeln" },
        { id: "b", label: "Innere Regeln" }
      ],
      items: [
        { id: "i1", text: "ziehen Grenzen",                korb: "a" },
        { id: "i2", text: "sind auf Durchsetzung angewiesen", korb: "a" },
        { id: "i3", text: "schützen vor Schaden",          korb: "a" },
        { id: "i4", text: "eröffnen einen Spielraum",      korb: "b" },
        { id: "i5", text: "lassen sich nur einsehen",      korb: "b" },
        { id: "i6", text: "werden aus eigener Überzeugung befolgt", korb: "b" }
      ],
      hinweisLeer: "Es liegen noch Begriffe im Vorrat.",
      hinweisFalsch: "Eine Zuordnung passt noch nicht. Achte darauf, welche Regeln erzwingbar sind und welche nicht." },

    /* --- Freitext mit Zusatzhinweis --------------------------------- */
    { id: "b2", typ: "text",
      frage: "Erkläre am Beispiel des Instruments, warum Regeln auch etwas ermöglichen können.",
      zusatz: "Zwei bis drei Sätze genügen.",
      minLen: 140,
      hinweisLeer: "Deine Erklärung fehlt noch oder ist sehr knapp." }
  ]
},

/* ---------------------------------------------------------------- 3 */
{
  id: "s3", kurz: "3", kapitel: "Lernschritt 3",
  titel: "Die Grenze zwischen beiden",
  lead: "Der dritte Abschnitt beschreibt, was passiert, wenn beide Arten von Regeln verwechselt werden.",
  abschnitt: "s3",
  aufgaben: [

    /* --- Aussagen bewerten ------------------------------------------ */
    { id: "c1", typ: "aussagen",
      frage: "Prüfe die folgenden Aussagen am Text.",
      kategorien: ["trifft zu", "muss präzisiert werden", "trifft nicht zu"],
      items: [
        { id: "c1a", text: "Überzeugungen lassen sich durch Zwang herstellen.",
          loesung: 2, begruendung: true,
          rueck: "Der Text sagt ausdrücklich, dass sich Überzeugung nicht befehlen lässt." },
        { id: "c1b", text: "Äußere Regeln allein der Einsicht zu überlassen, genügt.",
          loesung: 2,
          rueck: "Der Text warnt, dass das die einen überfordert und die anderen zum Missbrauch einlädt." },
        { id: "c1c", text: "Beide Arten von Regeln gehören zusammen.",
          loesung: 0,
          rueck: "Genau das hält der Text fest – sie dürfen nur nicht ineinander geschoben werden." },
        { id: "c1d", text: "Die Grenze zwischen beiden steht ein für alle Mal fest.",
          loesung: 2, begruendung: true,
          rueck: "Der letzte Satz sagt, dass sie in jeder Zeit neu gezogen werden muss." }
      ],
      hinweisLeer: "Mindestens eine Aussage ist noch nicht eingeordnet.",
      hinweisBegruendung: "Zu mindestens einer Aussage fehlt noch eine Begründung von mindestens 60 Zeichen." },

    /* --- Position beziehen ------------------------------------------ */
    { id: "c2", typ: "position",
      frage: "Darf eine Gemeinschaft von ihren Mitgliedern eine bestimmte Überzeugung verlangen?",
      optionen: ["Ja", "Nein", "Kommt darauf an"],
      minLen: 150,
      hinweisWahl: "Wähle zuerst eine Position aus.",
      hinweisText: "Deine Begründung fehlt noch oder ist sehr knapp." }
  ]
},

/* ---------------------------------------------------------------- 4 */
{
  id: "tafel", kurz: "4", kapitel: "Lernschritt 4",
  titel: "Das Tafelbild erarbeiten",
  lead: "Baue das Schaubild aus deinem Textverständnis auf. Tippe einen Baustein an und dann das Feld, in das er gehört – oder ziehe ihn mit dem Finger, dem Pencil oder der Maus dorthin.",
  abschnitt: null,
  tafel: true,
  hilfe: "Beginne oben mit dem Oberbegriff. Überlege dann, welche zwei Arten von Regeln der Text unterscheidet. Nicht jeder Baustein im Vorrat gehört ins Bild.",
  aufgaben: []
},

/* ---------------------------------------------------------------- 5 */
{
  id: "transfer", kurz: "5", kapitel: "Lernschritt 5",
  titel: "Gegenwartsbezug",
  lead: "Prüfe deine Ergebnisse an einem Beispiel aus deiner eigenen Erfahrung.",
  abschnitt: null,
  aufgaben: [

    /* --- Themenwahl -------------------------------------------------- */
    { id: "t0", typ: "auswahl",
      frage: "Wähle einen Bereich, an dem du das prüfst.",
      optionen: ["Schulordnung", "Sport im Verein", "Soziale Netzwerke",
                 "Straßenverkehr", "Zusammenleben in der Familie"],
      eigenes: "Eigenes Thema",
      hinweis: "Du hast noch keinen Bereich gewählt." },

    { id: "t1", typ: "text",
      frage: "Welche Regeln gelten dort – und welcher der beiden Arten gehören sie an?",
      minLen: 150,
      hinweisLeer: "Deine Antwort fehlt noch oder ist sehr knapp." }
  ]
},

/* ---------------------------------------------------------------- 6 */
{
  id: "stellungnahme", kurz: "6", kapitel: "Lernschritt 6",
  titel: "Erörterung: Schränken Regeln die Freiheit ein?",
  lead: "Zum Abschluss bringst du alles zusammen. Schreibe einen zusammenhängenden Text – keine Stichpunkte.",
  abschnitt: null,
  aufgaben: [

    /* --- Schreibaufgabe mit Strukturhilfe (Anforderungsbereich III) --- */
    { id: "z1", typ: "text",
      frage: "Erörtere, ob Regeln die Freiheit einschränken oder sie überhaupt erst ermöglichen. Nimm am Schluss begründet Stellung.",
      zusatz: "Belege deine Überlegungen am Text und beziehe deine Ergebnisse aus den vorangegangenen Lernschritten ein. Richtwert: etwa 300 bis 500 Wörter.",
      minLen: 700,
      zeilen: 18,
      platzhalter: "Beginne mit der Fragestellung und arbeite dich dann Schritt für Schritt durch deine Argumente …",
      strukturOffen: true,
      strukturTitel: "Strukturhilfe: Einleitung – Hauptteil – Schluss",
      struktur: [
        { titel: "Einleitung",
          zusatz: "Kurz halten – etwa ein Zehntel deines Textes.",
          punkte: [
            "Benenne Thema und Quelle in einem Satz.",
            "Führe zur Leitfrage hin und formuliere sie in eigenen Worten.",
            "Kündige an, wie du vorgehst."
          ] },
        { titel: "Hauptteil",
          zusatz: "Der längste Teil. Belege jede Aussage am Text.",
          punkte: [
            "Darstellung: Gib die Position des Textes wieder.",
            "Argumente für die eine Seite.",
            "Argumente für die andere Seite.",
            "Beziehe dein Beispiel aus dem Gegenwartsbezug ein.",
            "Wäge ab: Nimm mindestens einen Einwand gegen deine Linie ernst."
          ] },
        { titel: "Schluss",
          zusatz: "Keine neuen Argumente mehr – aber eine klare Position.",
          punkte: [
            "Bündele dein Ergebnis in zwei bis drei Sätzen.",
            "Nimm begründet Stellung.",
            "Benenne, was offen bleibt."
          ] }
      ],
      anstoesse: [
        "Gibt es Freiheit ohne jede Regel – oder wäre das etwas anderes?",
        "Wer entscheidet, welche Regeln gelten?",
        "Kann eine Regel zugleich einschränken und ermöglichen?"
      ],
      hinweisLeer: "Deine Erörterung fehlt noch oder ist sehr knapp. Arbeite Einleitung, Hauptteil und Schluss aus." }
  ]
},

/* ---------------------------------------------------------------- Abgabe */
{
  id: "abgabe", kurz: "7", kapitel: "Abschluss",
  titel: "Arbeit abgeben",
  lead: "Trage deinen Namen und deinen Kurs ein und gib deine Arbeit verbindlich ab.",
  abschnitt: null,
  abgabe: true,
  aufgaben: []
}
];
