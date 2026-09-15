/* =====================================================================
   QUELLE  —  der Text, mit dem gearbeitet wird
   ---------------------------------------------------------------------
   "von" / "bis" sind Zeilennummern deiner Vorlage. Sie erscheinen am
   Rand und erlauben es, im Unterricht präzise auf Stellen zu verweisen.
   Zähle sie so, wie sie auf deinem Arbeitsblatt stehen.

   Jeder Abschnitt ("s1", "s2", …) gehört zu genau einem Lernschritt.
   Die Verbindung stellst du in seiten.js über das Feld "abschnitt" her.

   ACHTUNG URHEBERRECHT: Der Text unten ist ein selbst geschriebener
   Platzhalter. Trage hier nur Texte ein, die du für den Unterricht
   verwenden darfst (eigene Texte, gemeinfreie Werke oder Material mit
   entsprechender Lizenz bzw. Erlaubnis).
   ===================================================================== */
window.QUELLE = {
  autor:  "Platzhalter",
  titel:  "Freiheit und Regeln – ein Beispieltext",
  quelle: "Selbst verfasster Beispieltext. Hier die bibliographische Angabe deiner Quelle eintragen.",

  /* Erscheint auf der Startseite als "Die Aufgaben des Materials". */
  aufgabenImOriginal: [
    "Gib die Grundfrage des Textes in eigenen Worten wieder.",
    "Erkläre, welche zwei Arten von Regeln der Text unterscheidet.",
    "Beurteile, ob Regeln Freiheit einschränken oder ermöglichen."
  ],

  sections: {
    s1: {
      titel: "Die Frage",
      von: 1, bis: 12,
      absaetze: [
        { von: 1, bis: 12,
          text: "Wer über Freiheit nachdenkt, stößt schnell auf einen Widerspruch. Einerseits scheint frei zu sein, wer tun kann, was er will: Je weniger Regeln, desto mehr Freiheit. Andererseits erleben wir Regeln oft gerade nicht als Fesseln, sondern als Bedingung dafür, dass etwas überhaupt gelingt. Ein Spiel ohne Regeln ist kein freieres Spiel, sondern gar keines. Eine Sprache ohne Grammatik erlaubt nicht mehr, sondern weniger zu sagen. Die Frage ist deshalb nicht, ob wir Regeln wollen, sondern welche – und wer sie aufstellen darf." }
      ]
    },
    s2: {
      titel: "Zwei Arten von Regeln",
      von: 13, bis: 30,
      absaetze: [
        { von: 13, bis: 22,
          text: "Man kann zwei Arten von Regeln unterscheiden. Die einen schränken ein, was jemand tun darf, damit andere nicht zu Schaden kommen. Sie ziehen Grenzen und sind auf Durchsetzung angewiesen; ohne die Möglichkeit, sie zu erzwingen, wären sie bloße Empfehlungen. Man könnte sie äußere Regeln nennen." },
        { von: 23, bis: 30,
          text: "Die anderen schränken nicht ein, sondern eröffnen erst einen Spielraum. Wer die Regeln eines Instruments beherrscht, kann darauf spielen; wer sie nicht kennt, steht ratlos davor. Diese Regeln lassen sich nicht erzwingen, sondern nur einsehen und annehmen. Man könnte sie innere Regeln nennen. Wer sie befolgt, gehorcht niemandem – er tut, was er selbst als richtig erkannt hat." }
      ]
    },
    s3: {
      titel: "Die Grenze",
      von: 31, bis: 44,
      absaetze: [
        { von: 31, bis: 44,
          text: "Schwierig wird es, wo beide Arten von Regeln verwechselt werden. Wer innere Regeln erzwingen will, erreicht nur äußeres Verhalten, nicht die Einsicht, auf die es ankäme: Überzeugung lässt sich nicht befehlen. Wer umgekehrt äußere Regeln allein der Einsicht überlässt, überfordert die einen und lädt die anderen zum Missbrauch ein. Beide Bereiche gehören zusammen, dürfen aber nicht ineinander geschoben werden. Wo genau die Grenze verläuft, ist keine Frage, die sich ein für alle Mal beantworten lässt – sie muss in jeder Zeit neu gezogen werden." }
      ]
    }
  }
};
