/* =====================================================================
   SEITEN  —  Theodizee: Leibniz und Voltaire
   Aufbau nach dem Stundenraster vom 05.05.2025:
   Einstieg – Erarbeitung I – Sicherung I – Gelenk – Erarbeitung II –
   Sicherung II – Vertiefung (Debatte) – Abgabe
   ===================================================================== */
window.SEITEN = [

/* ---------------------------------------------------------------- Start */
{
  id: "start", kurz: "Start", kapitel: "Einstieg",
  titel: "Theodizee: Leibniz und Voltaire",
  lead: "Wenn Gott gut und allmächtig ist – warum gibt es dann Leid? Diese Frage nennt man die Theodizeefrage. Du lernst in dieser Stunde zwei Antworten kennen, die einander widersprechen, und nimmst am Ende selbst Stellung.",
  abschnitt: null,
  start: true,
  aufgaben: []
},

/* ---------------------------------------------------------------- 1 */
{
  id: "einstieg", kurz: "1", kapitel: "Lernschritt 1",
  titel: "Einstieg: Schreckensbilanz",
  lead: "Sieh dir die Karikatur genau an, bevor du die Aufgaben bearbeitest.",
  abschnitt: null,
  bild: {
    datei: "assets/bilder/karikatur.jpg",
    alt: "Karikatur zum Einstieg",
    unterschrift: "Karikatur „Schreckensbilanz“"
  },
  bildImpuls: {
    titel: "Impuls: Woran könnte man noch denken?",
    hinweis: "Öffne das erst, wenn du bei Aufgabe 1 oder 2 nicht weiterkommst.",
    datei: "assets/bilder/naturkatastrophen.jpg",
    alt: "Übersicht: Erdbeben, Tsunami, Vulkanausbruch, Dürre, Waldbrand, Lawine, Überschwemmung, Hurrikan, Tornado, Erdrutsch, Meteoriteneinschlag, nukleare Explosion, chemische Kontamination",
    unterschrift: "Ereignisse, die Leid verursachen – von Naturereignissen bis zu menschengemachten Katastrophen."
  },
  aufgaben: [
    { id: "k1", typ: "text",
      frage: "Beschreibe, was du auf der Karikatur siehst.",
      zusatz: "Noch nicht deuten – zunächst nur festhalten, was tatsächlich dargestellt ist.",
      minLen: 150,
      platzhalter: "Zu sehen ist …",
      hinweisLeer: "Deine Beschreibung fehlt noch oder ist sehr knapp. Nenne Personen, Gegenstände und Text." },

    { id: "k2", typ: "text",
      frage: "Deute die Karikatur: Welche Aussage trifft sie – und an wen richtet sie sich?",
      minLen: 180,
      platzhalter: "Die Karikatur kritisiert …",
      hinweisLeer: "Deine Deutung fehlt noch oder ist sehr knapp. Begründe sie an dem, was du zuvor beschrieben hast." },

    { id: "k3", typ: "multi",
      frage: "Welche Arten von Leid lassen sich unterscheiden?",
      zusatz: "Mehrere Antworten sind richtig.",
      optionen: [
        "Leid durch Naturereignisse, für die niemand verantwortlich ist",
        "Leid, das Menschen anderen Menschen zufügen",
        "Leid, das immer als Strafe verstanden werden muss",
        "Leid durch Vergänglichkeit, Krankheit und Tod"
      ],
      loesung: [0, 1, 3],
      hinweis: "Drei der vier Aussagen beschreiben Arten von Leid. Eine davon ist bereits eine Deutung – und keine besonders überzeugende." }
  ]
},

/* ---------------------------------------------------------------- 2 */
{
  id: "leibniz1", kurz: "2", kapitel: "Lernschritt 2",
  titel: "Leibniz: Die beste aller möglichen Welten",
  lead: "Lies den Text über Leibniz und arbeite seine Kernaussage heraus.",
  abschnitt: "l1",
  aufgaben: [
    { id: "a1", typ: "mc",
      frage: "In welcher Schrift hat Leibniz das Theodizeeproblem behandelt?",
      optionen: [
        "„Lehrgedicht über die Katastrophe von Lissabon“",
        "„Abhandlung über die Güte Gottes, die Freiheit des Menschen und den Ursprung des Übels“",
        "„Candide oder der Optimismus“"
      ],
      loesung: 1,
      hinweis: "Die anderen beiden Titel stammen von Voltaire. Sieh im zweiten Absatz nach." },

    { id: "a2", typ: "text",
      frage: "Gib Leibniz’ Kernaussage zur Theodizeefrage in einem Satz wieder.",
      minLen: 80,
      platzhalter: "Nach Leibniz ist unsere Welt …",
      hinweisLeer: "Deine Antwort fehlt noch oder ist sehr knapp.",
      schluessel: [["beste", "bestmöglich"], ["welt"]],
      hinweisSchluessel: "Die Kernaussage enthält den Ausdruck „beste aller möglichen Welten“." }
  ]
},

/* ---------------------------------------------------------------- 3 */
{
  id: "leibniz2", kurz: "3", kapitel: "Lernschritt 3",
  titel: "Leibniz im Wortlaut",
  lead: "Jetzt kommt Leibniz selbst zu Wort. Lies das Zitat gründlich – es ist sperrig, aber der Gedankengang ist klar.",
  abschnitt: "l2",
  aufgaben: [
    { id: "b1", typ: "mc",
      frage: "Warum musste Gott nach Leibniz die beste Welt wählen?",
      optionen: [
        "Weil die Menschen ihn darum gebeten haben.",
        "Weil er nicht anders als nach der höchsten Vernunft handeln kann.",
        "Weil es nur eine einzige mögliche Welt gab."
      ],
      loesung: 1,
      hinweis: "Der letzte Halbsatz des Zitats nennt den Grund ausdrücklich." },

    { id: "b2", typ: "mc",
      frage: "Was wäre nach Leibniz geschehen, wenn es keine beste unter allen möglichen Welten gegeben hätte?",
      optionen: [
        "Gott hätte gar keine Welt geschaffen.",
        "Gott hätte eine beliebige Welt gewählt.",
        "Gott hätte mehrere Welten nebeneinander geschaffen."
      ],
      loesung: 0,
      hinweis: "Lies den Satz mit „wenn es nicht eine beste (optimum) … gegeben hätte“ noch einmal." },

    { id: "b3", typ: "text",
      frage: "Erkläre in eigenen Worten, was Leibniz mit „Welt“ meint.",
      zusatz: "Achte auf den Satz, der mit „Ich nenne Welt …“ beginnt.",
      minLen: 120,
      hinweisLeer: "Deine Erklärung fehlt noch oder ist sehr knapp." }
  ]
},

/* ---------------------------------------------------------------- 4 */
{
  id: "leibniz3", kurz: "4", kapitel: "Lernschritt 4",
  titel: "Leibniz: Warum das Leid kein Widerspruch ist",
  lead: "Leibniz erklärt, warum das Leid seiner These nicht widerspricht. Prüfe seine Begründungen am Text.",
  abschnitt: "l3",
  aufgaben: [
    { id: "c1", typ: "zuordnung",
      frage: "Ordne die Aussagen dem zu, worauf Leibniz das jeweilige Übel zurückführt.",
      koerbe: [
        { id: "a", label: "Folge der Geschöpflichkeit" },
        { id: "b", label: "Folge der menschlichen Freiheit" },
        { id: "c", label: "Folge unserer begrenzten Sicht" }
      ],
      items: [
        { id: "i1", text: "Leiden und Begrenztheit der Menschen", korb: "a" },
        { id: "i2", text: "Menschen können nicht sein wie Gott", korb: "a" },
        { id: "i3", text: "moralische Übel", korb: "b" },
        { id: "i4", text: "der Anschein, die Welt hätte besser sein können", korb: "c" },
        { id: "i5", text: "dass wir die Schönheit und Ordnung des Ganzen nicht erkennen", korb: "c" }
      ],
      hinweisLeer: "Es liegen noch Aussagen im Vorrat.",
      hinweisFalsch: "Eine Zuordnung passt noch nicht. Der Text nennt für jedes Übel ausdrücklich seinen Grund." },

    { id: "c2", typ: "aussagen",
      frage: "Prüfe die folgenden Aussagen am Text.",
      kategorien: ["trifft zu", "muss präzisiert werden", "trifft nicht zu"],
      items: [
        { id: "c2a", text: "Nach Leibniz ist unsere Welt vollkommen.",
          loesung: 2, begruendung: true,
          rueck: "Der Text sagt ausdrücklich: Vollkommen ist nur Gott allein. Die Welt ist die beste mögliche – das ist etwas anderes." },
        { id: "c2b", text: "Eine Verbesserung an einer Stelle der Welt kann an anderer Stelle Verschlechterungen nach sich ziehen.",
          loesung: 0,
          rueck: "Genau das ist Leibniz’ Argument von den Konsequenzen jeder kleinsten Veränderung." },
        { id: "c2c", text: "„Beste aller möglichen Welten“ meint den jetzigen Zustand der Welt.",
          loesung: 2, begruendung: true,
          rueck: "Leibniz denkt dynamisch: Es geht um die Welt mit ihrem Entwicklungspotential, nicht um ihren derzeitigen Zustand." },
        { id: "c2d", text: "Moralische Übel sind der Preis dafür, dass Menschen frei sind.",
          loesung: 0,
          rueck: "So formuliert es der Text: moralische Übel als notwendige Konsequenz der Freiheit." }
      ],
      hinweisLeer: "Mindestens eine Aussage ist noch nicht eingeordnet.",
      hinweisBegruendung: "Zu mindestens einer Aussage fehlt noch eine Begründung von mindestens 60 Zeichen." }
  ]
},

/* ---------------------------------------------------------------- 5 */
{
  id: "sicherung1", kurz: "5", kapitel: "Lernschritt 5",
  titel: "Sicherung: Assoziieren mit Buchstaben – Leibniz",
  lead: "Sichere die zentralen Begriffe des Textes.",
  abschnitt: "l3",
  aufgaben: [
    { id: "s1", typ: "akrostichon",
      frage: "Notiere zu jedem Buchstaben des Wortes „GERECHT“ einen Begriff oder Ausdruck, der zum Erklärungsversuch von Leibniz passt.",
      wort: "GERECHT",
      wortHinweis: "Der jeweilige Buchstabe muss nicht am Anfang deines Wortes stehen – er kann auch mittendrin vorkommen.",
      minLen: 3,
      hinweisLeer: "Es fehlen noch Begriffe. Geh den Text durch und suche nach Schlüsselwörtern.",
      hinweisBuchstabe: "In diesen Begriffen kommt der vorgegebene Buchstabe noch nicht vor." }
  ]
},

/* ---------------------------------------------------------------- 6 */
{
  id: "gelenk", kurz: "6", kapitel: "Lernschritt 6",
  titel: "Gelenk: Das Erdbeben von Lissabon 1755",
  lead: "Ein einziges Ereignis hat das optimistische Denken der Aufklärung erschüttert. Sieh dir zuerst den kurzen Film an und lies dann den Text.",
  abschnitt: "g1",
  link: {
    titel: "Film: Das Erdbeben von Lissabon",
    text: "Film ansehen (öffnet YouTube)",
    hinweis: "Der Film dauert wenige Minuten und öffnet sich in einem neuen Tab. Komm danach hierher zurück.",
    url: "https://www.youtube-nocookie.com/watch?v=Ql8kvZmYF7s"
  },
  aufgaben: [
    { id: "g1a", typ: "multi",
      frage: "Was machte das Erdbeben für die Zeitgenossen theologisch so verstörend?",
      zusatz: "Mehrere Antworten sind richtig.",
      optionen: [
        "Es geschah an einem der größten katholischen Festtage.",
        "Gerade die Gläubigen in den Kirchen starben, während andere überlebten.",
        "Es war das erste Erdbeben in Europa überhaupt.",
        "Fast alle Kirchen der Stadt wurden zerstört."
      ],
      loesung: [0, 1, 3],
      hinweis: "Drei Antworten stehen so im Text. Eine ist sachlich falsch." },

    { id: "g1b", typ: "text",
      frage: "Erkläre, warum das Erdbeben als Wendepunkt der europäischen Geistesgeschichte gilt.",
      minLen: 150,
      hinweisLeer: "Deine Erklärung fehlt noch oder ist sehr knapp. Der letzte Absatz des Textes hilft dir." },

    { id: "g1c", typ: "position",
      frage: "Kann Leibniz’ Erklärung in dieser Situation zufriedenstellend sein?",
      zusatz: "Nimm Stellung und begründe – du hast beide Texte, Leibniz und den Bericht, vor dir.",
      optionen: ["Ja", "Nein", "Teilweise"],
      minLen: 200,
      hinweisWahl: "Wähle zuerst eine Position aus.",
      hinweisText: "Deine Begründung fehlt noch oder ist sehr knapp. Beziehe dich sowohl auf Leibniz als auch auf das Ereignis." }
  ]
},

/* ---------------------------------------------------------------- 7 */
{
  id: "voltaire1", kurz: "7", kapitel: "Lernschritt 7",
  titel: "Voltaire: Die Antwort auf Lissabon",
  lead: "Für Voltaire stand das Erdbeben im deutlichen Gegensatz zu Leibniz’ „bester aller möglichen Welten“.",
  abschnitt: "v1",
  aufgaben: [
    { id: "v1a", typ: "mc",
      frage: "Wodurch wurde Voltaires Einstellung zur Theodizee vor allem geprägt?",
      optionen: [
        "durch seine Kritik am Absolutismus",
        "durch das Erdbeben von Lissabon 1755",
        "durch ein Gespräch mit Leibniz"
      ],
      loesung: 1,
      hinweis: "Der zweite Absatz nennt es ausdrücklich." },

    { id: "v1b", typ: "text",
      frage: "Nenne die beiden Werke, in denen Voltaire auf das Leid und seine zeitgenössische Deutung Bezug nimmt, und ordne sie der jeweiligen Gattung zu.",
      minLen: 90,
      hinweisLeer: "Deine Antwort fehlt noch oder ist sehr knapp. Es sind zwei Werke – eines davon ist ein Roman." }
  ]
},

/* ---------------------------------------------------------------- 8 */
{
  id: "voltaire2", kurz: "8", kapitel: "Lernschritt 8",
  titel: "Voltaire im Wortlaut",
  lead: "Drei Zitate. Achte darauf, wie Voltaire spricht – der Ton ist Teil des Arguments.",
  abschnitt: "v2",
  aufgaben: [
    { id: "v2a", typ: "text",
      frage: "Gegen wen richtet sich Voltaires Vorwurf in „Betrogene Philosophen. Ihr schreit: ‚Alles ist gut!‘“ – und was wirft er ihnen vor?",
      minLen: 150,
      hinweisLeer: "Deine Antwort fehlt noch oder ist sehr knapp." },

    { id: "v2b", typ: "text",
      frage: "Im zweiten Zitat stellt Voltaire sich vor, was Philosophen den Überlebenden zurufen könnten. Erkläre, warum er eine solche Rede „ebenso grausam wie das Erdbeben“ nennt.",
      zusatz: "Was genau ist an diesem Trost verletzend?",
      minLen: 180,
      hinweisLeer: "Deine Erklärung fehlt noch oder ist sehr knapp." },

    { id: "v2c", typ: "mc",
      frage: "Was wirft Voltaire Leibniz im dritten Zitat konkret vor?",
      optionen: [
        "Leibniz habe das Erdbeben vorhergesagt.",
        "Leibniz erkläre nicht, wie Unordnung und Leid in eine bestgeordnete Welt passen.",
        "Leibniz habe die Existenz Gottes bestritten."
      ],
      loesung: 1,
      hinweis: "Achte auf die Formulierung „Leibnitz lehrt mich nicht, durch welche unsichtbaren Knoten …“." }
  ]
},

/* ---------------------------------------------------------------- 9 */
{
  id: "voltaire3", kurz: "9", kapitel: "Lernschritt 9",
  titel: "Voltaire: Leid ohne Sinn",
  lead: "Zum Schluss der Erarbeitung: Was setzt Voltaire an die Stelle von Leibniz’ Deutung?",
  abschnitt: "v3",
  aufgaben: [
    { id: "v3a", typ: "aussagen",
      frage: "Prüfe die folgenden Aussagen über Voltaires Position am Text.",
      kategorien: ["trifft zu", "muss präzisiert werden", "trifft nicht zu"],
      items: [
        { id: "v3a1", text: "Voltaire setzt an die Stelle der Theodizee einen neuen Erklärungsansatz.",
          loesung: 2, begruendung: true,
          rueck: "Der Text sagt ausdrücklich das Gegenteil: Voltaire kritisiert, ohne eine neue Erklärung anzubieten." },
        { id: "v3a2", text: "Nach Voltaire bleibt dem Menschen die Hoffnung auf ein lebenswertes Leben.",
          loesung: 0,
          rueck: "Genau darin besteht bei Voltaire das, was bleibt – aber eben als Hoffnung, nicht als Deutung des Leids." },
        { id: "v3a3", text: "Die Rede von der besten aller möglichen Welten nimmt der Hoffnung ihren Gegenstand.",
          loesung: 0,
          rueck: "Wenn diese Welt schon die beste ist, lässt sich keine bessere mehr erhoffen – so argumentiert Voltaire." },
        { id: "v3a4", text: "Voltaires Kritik trifft sich an einem Punkt mit einer theologischen Kritik am Optimismus.",
          loesung: 0, begruendung: true,
          rueck: "Der Optimismus widerspricht dem christlichen Axiom einer sündhaften Welt, die erlöst werden muss." }
      ],
      hinweisLeer: "Mindestens eine Aussage ist noch nicht eingeordnet.",
      hinweisBegruendung: "Zu mindestens einer Aussage fehlt noch eine Begründung von mindestens 60 Zeichen." },

    { id: "v3b", typ: "text",
      frage: "Notiere Voltaires Argumente gegen Leibniz in eigenen Worten.",
      zusatz: "Mindestens drei Argumente – du brauchst sie gleich in der Debatte.",
      minLen: 250,
      platzhalter: "1. …\n2. …\n3. …",
      hinweisLeer: "Deine Argumentesammlung fehlt noch oder ist zu knapp. Du brauchst sie für die Debatte." }
  ]
},

/* ---------------------------------------------------------------- 10 */
{
  id: "sicherung2", kurz: "10", kapitel: "Lernschritt 10",
  titel: "Sicherung: Assoziieren mit Buchstaben – Voltaire",
  lead: "Dieselbe Übung wie bei Leibniz – jetzt aus Voltaires Sicht.",
  abschnitt: "v3",
  aufgaben: [
    { id: "s2", typ: "akrostichon",
      frage: "Notiere zu jedem Buchstaben des Wortes „GERECHT“ einen Begriff oder Ausdruck, der zum Erklärungsversuch von Voltaire passt.",
      wort: "GERECHT",
      wortHinweis: "Der jeweilige Buchstabe muss nicht am Anfang deines Wortes stehen – er kann auch mittendrin vorkommen.",
      minLen: 3,
      hinweisLeer: "Es fehlen noch Begriffe. Geh die Voltaire-Texte durch.",
      hinweisBuchstabe: "In diesen Begriffen kommt der vorgegebene Buchstabe noch nicht vor." }
  ]
},

/* ---------------------------------------------------------------- 11 */
{
  id: "tafel", kurz: "11", kapitel: "Lernschritt 11",
  titel: "Beide Positionen im Überblick",
  lead: "Baue das Schaubild auf. Tippe einen Baustein an und dann das Feld, in das er gehört – oder ziehe ihn mit dem Finger, dem Pencil oder der Maus dorthin.",
  abschnitt: null,
  tafel: true,
  hilfe: "Beginne oben mit der Leitfrage. Ordne dann die beiden Denker zu und darunter jeweils ihre Kernthese und ihre Begründung. Drei Bausteine im Vorrat gehören nicht ins Bild – sie behaupten etwas, das in keinem der Texte steht.",
  aufgaben: []
},

/* ---------------------------------------------------------------- 12 */
{
  id: "debatte1", kurz: "12", kapitel: "Lernschritt 12",
  titel: "Die Debatte vorbereiten",
  lead: "Ihr debattiert in Vierergruppen nach den Regeln von „Jugend debattiert“: Eröffnungsrunde (je 2 Minuten, Pro beginnt), freie Aussprache (12 Minuten), Schlussrunde (je 1 Minute, keine neuen Argumente). Bereite hier deinen Auftritt vor.",
  abschnitt: null,
  hilfe: "These der Debatte: „Leid ist Teil einer göttlichen Ordnung und hat letztlich einen höheren Sinn.“ – Gruppe Leibniz vertritt Pro, Gruppe Voltaire Contra. Du vertrittst die dir zugewiesene Seite, auch wenn du persönlich anders denkst. Genau das ist der Sinn der Übung.",
  aufgaben: [
    { id: "d1", typ: "mc",
      frage: "Welche Seite vertrittst du in der Debatte?",
      zusatz: "Deine Lehrkraft teilt die Rollen zu.",
      optionen: [
        "Pro (Gruppe Leibniz): Leid ist notwendig, weil nur Gott den umfassenden Sinnzusammenhang erkennt und diese Welt, mitsamt allem Leid, die beste aller möglichen ist.",
        "Contra (Gruppe Voltaire): Leid ist sinnloses und ungerechtes Übel, und jede Deutung als göttliche Ordnung verhöhnt die Opfer und verkennt die Realität des Schmerzes."
      ],
      loesung: null,
      freieWahl: true,
      hinweis: "Wähle die Seite, die dir zugeteilt wurde." },

    { id: "d2", typ: "text",
      frage: "Sammle drei Argumente für deine Seite.",
      zusatz: "Belege jedes Argument am Text – in der Debatte zählt Sachkenntnis.",
      minLen: 280,
      zeilen: 8,
      platzhalter: "1. Argument – Beleg:\n2. Argument – Beleg:\n3. Argument – Beleg:",
      hinweisLeer: "Deine Argumente fehlen noch oder sind zu knapp. Drei begründete Argumente sind das Ziel." },

    { id: "d3", typ: "text",
      frage: "Formuliere deine Eröffnungsrede in Stichpunkten.",
      zusatz: "Maximal zwei Minuten Redezeit: eine klare Position, zwei bis drei Argumente, ein Schlusssatz.",
      minLen: 200,
      zeilen: 7,
      hinweisLeer: "Deine Eröffnungsrede fehlt noch oder ist zu knapp." },

    { id: "d4", typ: "text",
      frage: "Was ist das stärkste Argument der Gegenseite – und wie antwortest du darauf?",
      zusatz: "Wer die Gegenseite ernst nimmt, überzeugt eher.",
      minLen: 200,
      zeilen: 6,
      hinweisLeer: "Deine Antwort fehlt noch oder ist zu knapp. Nimm den stärksten Einwand, nicht den schwächsten." }
  ]
},

/* ---------------------------------------------------------------- 13 */
{
  id: "debatte2", kurz: "13", kapitel: "Lernschritt 13",
  titel: "Nach der Debatte",
  lead: "Die Debatte ist gelaufen. Jetzt darfst du wieder für dich selbst sprechen.",
  abschnitt: null,
  aufgaben: [
    { id: "e1", typ: "text",
      frage: "Halte den Ertrag der Debatte fest: Welches Argument der Gegenseite hat dich am meisten beschäftigt?",
      minLen: 180,
      hinweisLeer: "Deine Antwort fehlt noch oder ist zu knapp." },

    { id: "e2", typ: "text",
      frage: "Nimm nun mit eigener Stimme begründet Stellung: Hat das Leid in der Welt einen höheren Sinn? Beziehe Leibniz und Voltaire ein und setze dich mit beiden auseinander.",
      zusatz: "Zusammenhängender Text, keine Stichpunkte. Richtwert: etwa 300 bis 500 Wörter.",
      minLen: 800,
      zeilen: 18,
      platzhalter: "Beginne mit der Frage und arbeite dich dann Schritt für Schritt durch deine Argumente …",
      strukturOffen: true,
      strukturTitel: "Strukturhilfe: Einleitung – Hauptteil – Schluss",
      struktur: [
        { titel: "Einleitung",
          zusatz: "Kurz halten – etwa ein Zehntel deines Textes.",
          punkte: [
            "Benenne die Theodizeefrage in einem Satz.",
            "Nenne den Anlass: das Erdbeben von Lissabon 1755 und die Debatte, die es auslöste.",
            "Formuliere die Leitfrage, die du bearbeitest.",
            "Kündige an, wie du vorgehst."
          ] },
        { titel: "Hauptteil",
          zusatz: "Der längste Teil. Belege jede Aussage an den Texten.",
          punkte: [
            "Darstellung Leibniz: beste aller möglichen Welten, Geschöpflichkeit, Freiheit, begrenzte Sicht, Entwicklungspotential.",
            "Darstellung Voltaire: Leid ohne Sinn, Kritik am Trost der Philosophen, was von der Hoffnung bleibt.",
            "Argumente für Leibniz’ Position – und wo sie tragen.",
            "Argumente für Voltaires Position – und wo sie tragen.",
            "Prüfe den schwierigsten Punkt: Wem gegenüber wird eine Deutung des Leids ausgesprochen? Macht es einen Unterschied, ob ein Betroffener sie für sich selbst findet oder ob ein Dritter sie ihm zuspricht?",
            "Beziehe den Ertrag der Debatte ein: Welcher Einwand hat sich als der stärkste erwiesen?"
          ] },
        { titel: "Schluss",
          zusatz: "Keine neuen Argumente mehr – aber eine klare Position.",
          punkte: [
            "Bündele dein Ergebnis in zwei bis drei Sätzen.",
            "Nimm begründet Stellung zur Leitfrage.",
            "Benenne, was für dich offen bleibt."
          ] }
      ],
      anstoesse: [
        "Ist eine Erklärung, die stimmen könnte, deshalb schon eine, die man einem Trauernden sagen darf?",
        "Voltaire kritisiert, ohne eine eigene Erklärung anzubieten. Ist das eine Schwäche – oder gerade ehrlich?",
        "Leibniz denkt die beste Welt dynamisch, als Entwicklung. Verändert das die Stoßrichtung von Voltaires Kritik?",
        "Wenn das Leid keinen Sinn hat: Was folgt daraus für den Umgang mit Leidenden?",
        "Gibt es eine dritte Möglichkeit zwischen Deuten und Aushalten?"
      ],
      hinweisLeer: "Deine Stellungnahme fehlt noch oder ist zu knapp. Arbeite Einleitung, Hauptteil und Schluss aus und beziehe beide Positionen ein." }
  ]
},

/* ---------------------------------------------------------------- Abgabe */
{
  id: "abgabe", kurz: "14", kapitel: "Abschluss",
  titel: "Arbeit abgeben",
  lead: "Trage deinen Namen und deinen Kurs ein und gib deine Arbeit verbindlich ab.",
  abschnitt: null,
  abgabe: true,
  aufgaben: []
}
];
