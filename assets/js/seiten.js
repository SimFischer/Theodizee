/* =====================================================================
   SEITEN  —  Theodizee: Leibniz und Voltaire
   ---------------------------------------------------------------------
   Schlanke Fassung für eine Doppelstunde. Die Erarbeitung (1–8) hat
   pro Lernschritt genau eine Aufgabe und wechselt bewusst die Methode:
   Deuten – Zuordnen – Aussagen prüfen – Zuordnen – Position beziehen –
   Lückentext – Deuten – Argumentationskette sortieren.
   Das Gewicht liegt auf dem Schaubild (9) und der Vertiefung (10, 11).
   Anspruchsniveau: Oberstufe (Q2), Schwerpunkt AFB II und III.
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
  lead: "Sieh dir die Karikatur genau an, bevor du die Aufgabe bearbeitest.",
  abschnitt: null,
  bild: {
    datei: "assets/bilder/karikatur.jpg",
    alt: "Karikatur zum Einstieg",
    unterschrift: "Karikatur „Schreckensbilanz“"
  },
  bildImpuls: {
    titel: "Impuls: Woran könnte man noch denken?",
    hinweis: "Öffne das erst, wenn du nicht weiterkommst.",
    datei: "assets/bilder/naturkatastrophen.jpg",
    alt: "Übersicht: Erdbeben, Tsunami, Vulkanausbruch, Dürre, Waldbrand, Lawine, Überschwemmung, Hurrikan, Tornado, Erdrutsch, Meteoriteneinschlag, nukleare Explosion, chemische Kontamination",
    unterschrift: "Ereignisse, die Leid verursachen – von Naturereignissen bis zu menschengemachten Katastrophen."
  },
  aufgaben: [
    { id: "k2", typ: "text",
      frage: "Deute die Karikatur: Welche Aussage trifft sie, an wen richtet sie sich – und woran machst du das fest?",
      zusatz: "Beschreibe kurz, was zu sehen ist, und gehe dann zur Deutung über.",
      minLen: 200,
      zeilen: 6,
      platzhalter: "Zu sehen ist … Die Karikatur kritisiert …",
      hinweisLeer: "Deine Deutung fehlt noch oder ist sehr knapp. Nenne Aussage, Adressat und einen Beleg im Bild." }
  ]
},

/* ---------------------------------------------------------------- 2 */
{
  id: "arten", kurz: "2", kapitel: "Lernschritt 2",
  titel: "Welche Arten von Leid gibt es?",
  lead: "Bevor es um Antworten geht, lohnt sich eine Unterscheidung: Nicht jedes Leid hat dieselbe Ursache – und je nachdem fällt die Antwort anders aus.",
  abschnitt: null,
  aufgaben: [
    { id: "k3", typ: "zuordnung",
      frage: "Ordne die folgenden Fälle den drei klassischen Übel-Arten zu.",
      zusatz: "Die philosophische Tradition unterscheidet: das physische Übel (Leid durch Naturvorgänge), das moralische Übel (Leid, das Menschen verschulden) und das metaphysische Übel (Leid, das schon daraus folgt, dass alles Geschaffene endlich und begrenzt ist).",
      koerbe: [
        { id: "a", label: "physisches Übel – Leid durch Naturvorgänge" },
        { id: "b", label: "moralisches Übel – Leid durch menschliches Handeln" },
        { id: "c", label: "metaphysisches Übel – Leid aus der Endlichkeit alles Geschaffenen" }
      ],
      items: [
        { id: "i1", text: "Eine Flutwelle reißt die Menschen am Hafen mit sich", korb: "a" },
        { id: "i5", text: "Hilfsgüter werden aus politischem Kalkül zurückgehalten", korb: "b" },
        { id: "i6", text: "Auch wer verschont bleibt, wird altern und sterben", korb: "c" },
        { id: "i4", text: "Eine Seuche breitet sich unter den Überlebenden aus", korb: "a" },
        { id: "i3", text: "Kein Mensch kann die Folgen seiner Entscheidungen ganz überblicken", korb: "c" },
        { id: "i2", text: "Plünderer nutzen die zerstörte Stadt aus", korb: "b" }
      ],
      hinweisLeer: "Es liegen noch Fälle im Vorrat.",
      hinweisFalsch: "Eine Zuordnung passt noch nicht. Frage jeweils: Wer oder was ist die Ursache – die Natur, ein menschlicher Wille oder die Endlichkeit selbst?" }
  ]
},

/* ---------------------------------------------------------------- 3 */
{
  id: "leibniz1", kurz: "3", kapitel: "Lernschritt 3",
  titel: "Leibniz: Die beste aller möglichen Welten",
  lead: "Lies den Text über Leibniz und halte seine Kernaussage fest.",
  abschnitt: "l1",
  aufgaben: [
    { id: "a1", typ: "text",
      frage: "Gib Leibniz’ Kernaussage zur Theodizeefrage in einem einzigen, präzisen Satz wieder.",
      zusatz: "Ein Satz, kein Absatz. Achte darauf, dass dein Satz eine Behauptung enthält und nicht nur ein Thema benennt.",
      minLen: 100,
      zeilen: 3,
      platzhalter: "Nach Leibniz ist unsere Welt …",
      schluessel: [["beste", "bestmöglich"], ["welt"]],
      hinweisLeer: "Deine Antwort fehlt noch oder ist sehr knapp.",
      hinweisSchluessel: "Die Kernaussage enthält den Ausdruck „beste aller möglichen Welten“." }
  ]
},

/* ---------------------------------------------------------------- 4 */
{
  id: "leibniz2", kurz: "4", kapitel: "Lernschritt 4",
  titel: "Leibniz im Wortlaut",
  lead: "Jetzt kommt Leibniz selbst zu Wort. Das Zitat ist sperrig, aber der Gedankengang ist klar.",
  abschnitt: "l2",
  aufgaben: [
    { id: "b1", typ: "aussagen",
      frage: "Prüfe die beiden Aussagen am Wortlaut des Zitats.",
      zusatz: "Begründe jede Einordnung kurz am Text. „Muss präzisiert werden“ heißt: im Kern richtig, aber so formuliert missverständlich.",
      kategorien: ["trifft zu", "muss präzisiert werden", "trifft nicht zu"],
      items: [
        { id: "b1a", text: "Gott war gezwungen, die beste Welt zu wählen.",
          loesung: 1, begruendung: true,
          rueck: "Leibniz schreibt, Gott handle „nicht anders, als nach der höchsten Vernunft“. Das ist kein Zwang von außen, sondern eine Folge seiner eigenen Vollkommenheit – Gott kann nicht gegen sich selbst handeln." },
        { id: "b1b", text: "Hätte es unter den möglichen Welten keine beste gegeben, hätte Gott überhaupt keine Welt geschaffen.",
          loesung: 0, begruendung: true,
          rueck: "Genau das sagt der Bedingungssatz des Zitats. Schöpfung setzt für Leibniz einen vernünftigen Wahlgrund voraus." }
      ],
      hinweisLeer: "Mindestens eine Aussage ist noch nicht eingeordnet.",
      hinweisBegruendung: "Zu mindestens einer Aussage fehlt noch eine Begründung von mindestens 60 Zeichen." }
  ]
},

/* ---------------------------------------------------------------- 5 */
{
  id: "leibniz3", kurz: "5", kapitel: "Lernschritt 5",
  titel: "Leibniz: Warum das Leid kein Widerspruch ist",
  lead: "Leibniz erklärt, warum das Leid seiner These nicht widerspricht. Für jedes Übel nennt er einen Grund – ordne sie einander zu.",
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
        { id: "i4", text: "der Anschein, die Welt hätte besser sein können", korb: "c" },
        { id: "i1", text: "Leiden und Begrenztheit der Menschen", korb: "a" },
        { id: "i3", text: "moralische Übel", korb: "b" },
        { id: "i5", text: "dass wir die Schönheit und Ordnung des Ganzen nicht erkennen", korb: "c" },
        { id: "i2", text: "Menschen können nicht sein wie Gott", korb: "a" }
      ],
      hinweisLeer: "Es liegen noch Aussagen im Vorrat.",
      hinweisFalsch: "Eine Zuordnung passt noch nicht. Der Text nennt für jedes Übel ausdrücklich seinen Grund." }
  ]
},

/* ---------------------------------------------------------------- 6 */
{
  id: "gelenk", kurz: "6", kapitel: "Lernschritt 6",
  titel: "Gelenk: Das Erdbeben von Lissabon 1755",
  lead: "Ein einziges Ereignis hat das optimistische Denken der Aufklärung erschüttert. Lies den Bericht – achte nicht nur darauf, was geschah, sondern wen es traf.",
  abschnitt: "g1",
  aufgaben: [
    { id: "g1c", typ: "position",
      frage: "Kann Leibniz’ Erklärung angesichts von Lissabon zufriedenstellend sein?",
      zusatz: "Nimm Stellung und begründe am Text. Unterscheide dabei zwei Fragen: Ist die Erklärung in sich schlüssig? Und: Ist sie einem Betroffenen gegenüber vertretbar?",
      optionen: ["Ja", "Nein", "Teilweise"],
      minLen: 250,
      hinweisWahl: "Wähle zuerst eine Position aus.",
      hinweisText: "Deine Begründung fehlt noch oder ist zu knapp. Beziehe dich sowohl auf Leibniz als auch auf das Ereignis und trenne Schlüssigkeit von Zumutbarkeit." }
  ]
},

/* ---------------------------------------------------------------- 7 */
{
  id: "voltaire1", kurz: "7", kapitel: "Lernschritt 7",
  titel: "Voltaire: Wer er war und worauf er reagiert",
  lead: "Für Voltaire stand das Erdbeben im deutlichen Gegensatz zu Leibniz’ „bester aller möglichen Welten“. Sichere die Eckdaten, bevor du seine Zitate liest.",
  abschnitt: "v1",
  aufgaben: [
    { id: "v1d", typ: "lueckentext",
      frage: "Fülle die Lücken mit Hilfe des Textes.",
      zusatz: "Tippe auf ein Auswahlfeld und wähle den passenden Ausdruck.",
      teile: [
        "Voltaire war ein französischer Philosoph und Schriftsteller und gilt als einer der Vordenker der ",
        { id: "L1", optionen: ["Scholastik", "Romantik", "Aufklärung", "Gegenreformation", "Klassik"], loesung: 2 },
        ". In seinen Werken prangerte er die Missstände des Absolutismus und der Feudalherrschaft an; so forderte er die ",
        { id: "L2", optionen: ["Mündigkeit", "Brüderlichkeit", "Souveränität", "Gleichheit", "Toleranz"], loesung: 3 },
        " aller Bürgerinnen und Bürger. Theologisch äußerte er sich häufig ",
        { id: "L3", optionen: ["kirchenkritisch", "kirchentreu", "atheistisch", "gleichgültig", "mystisch"], loesung: 0 },
        ". Seine Einstellung zur Theodizee prägte vor allem ",
        { id: "L4", optionen: ["die Französische Revolution", "ein Briefwechsel mit Leibniz", "das Erdbeben von Lissabon 1755", "die Pest von Marseille 1720", "der Siebenjährige Krieg"], loesung: 2 },
        ". Als Reaktion darauf schrieb er das ",
        { id: "L5", optionen: ["Traktat", "Sonett", "Klagelied", "Lehrgedicht", "Epos"], loesung: 3 },
        " über die Katastrophe von Lissabon sowie den Roman ",
        { id: "L6", optionen: ["„Zadig oder das Schicksal“", "„Candide oder der Optimismus“", "„Émile oder über die Erziehung“", "„Die Theodicee“", "„Nathan der Weise“"], loesung: 1 },
        "."
      ],
      hinweisLeer: "Es ist noch nicht jede Lücke gefüllt.",
      hinweisFalsch: "Mindestens eine Lücke passt noch nicht. Mehrere Antworten klingen plausibel – nur eine steht so im Text. Lies die beiden Absätze genau." }
  ]
},

/* ---------------------------------------------------------------- 8 */
{
  id: "voltaire2", kurz: "8", kapitel: "Lernschritt 8",
  titel: "Voltaire im Wortlaut",
  lead: "Drei Zitate. Achte darauf, wie Voltaire spricht – der Ton ist Teil des Arguments.",
  abschnitt: "v2",
  aufgaben: [
    { id: "v2b", typ: "text",
      frage: "Im zweiten Zitat stellt Voltaire sich vor, was Philosophen den Überlebenden zurufen könnten. Erkläre, warum er eine solche Rede „ebenso grausam wie das Erdbeben“ nennt.",
      zusatz: "Sieh dir an, wovon die aufgezählten Vorteile handeln – und wem sie zugutekommen. Was genau ist an diesem Trost verletzend?",
      minLen: 220,
      zeilen: 6,
      hinweisLeer: "Deine Erklärung fehlt noch oder ist zu knapp." }
  ]
},

/* ---------------------------------------------------------------- 9 */
{
  id: "voltaire3", kurz: "9", kapitel: "Lernschritt 9",
  titel: "Voltaire: Leid ohne Sinn",
  lead: "Was setzt Voltaire an die Stelle von Leibniz’ Deutung? Sein Gedankengang hängt Schritt für Schritt zusammen – rekonstruiere ihn.",
  abschnitt: "v3",
  aufgaben: [
    { id: "v3a", typ: "kette",
      frage: "Voltaires Gedankengang liegt durcheinander. Bringe die fünf Schritte in die Reihenfolge, in der sie auseinander folgen.",
      zusatz: "Tippe einen Baustein an, um ihn anzuhängen. Mit den Pfeilen verschiebst du ihn, mit dem × geht er zurück in den Vorrat. Frage dich bei jedem Schritt: Was muss gesagt sein, damit der nächste Satz überhaupt Sinn ergibt?",
      /* Die Reihenfolge dieser Liste ist bewusst gemischt – sie bestimmt,
         wie die Bausteine im Vorrat erscheinen. Die Lösung steht unten
         im Feld "reihenfolge". */
      items: [
        { id: "kt4", text: "In der „besten aller möglichen Welten“ lässt sich aber keine bessere Zukunft mehr erhoffen." },
        { id: "kt1", text: "Die Philosophen deuten das Leid als Teil einer großen, idealen Ordnung." },
        { id: "kt5", text: "Also nimmt der Optimismus der Hoffnung ihren Gegenstand – und widerspricht der christlichen Rede von einer Welt, die Erlösung braucht." },
        { id: "kt3", text: "Was dem Menschen bleibt, ist allein die Hoffnung, trotz allem ein lebenswertes Leben zu führen." },
        { id: "kt2", text: "Für Voltaire ist das Zynismus und Verspottung der Leidenden: Das Leid hat keinen Sinn." }
      ],
      reihenfolge: ["kt1", "kt2", "kt3", "kt4", "kt5"],
      hinweisLeer: "Es liegen noch Bausteine im Vorrat. Alle fünf gehören in die Kette.",
      hinweisFalsch: "Die Reihenfolge stimmt noch nicht. Der Gedankengang beginnt bei dem, was die anderen behaupten, und endet bei dem, was Voltaire daraus folgert." }
  ]
},

/* ---------------------------------------------------------------- 10 */
{
  id: "tafel", kurz: "10", kapitel: "Lernschritt 10",
  titel: "Beide Positionen im Überblick",
  lead: "Jetzt stellst du beide Sichtweisen einander gegenüber. Baue das Schaubild auf: Tippe einen Baustein an und dann das Feld, in das er gehört – oder ziehe ihn mit dem Finger, dem Pencil oder der Maus dorthin.",
  abschnitt: null,
  tafel: true,
  hilfe: "Beginne oben mit der Leitfrage. Ordne dann die beiden Denker zu und darunter jeweils ihre Kernthese und ihre Begründung. Drei Bausteine im Vorrat gehören nicht ins Bild – sie behaupten etwas, das in keinem der Texte steht.",
  aufgaben: []
},

/* ---------------------------------------------------------------- 11 */
{
  id: "gottesbild", kurz: "11", kapitel: "Lernschritt 11",
  titel: "Das Gottesbild auf dem Prüfstand",
  lead: "Leibniz und Voltaire streiten nicht nur über das Leid, sondern über Gott. Denn die Theodizeefrage entsteht erst, wenn man drei Sätze gleichzeitig für wahr hält: Gott ist allmächtig. Gott ist gut. Und es gibt sinnloses Leid. Alle drei zusammen lassen sich nicht widerspruchsfrei denken – wer an der Frage arbeitet, muss also an einem der drei Sätze etwas verändern. Welcher es ist, entscheidet darüber, welches Bild von Gott am Ende übrig bleibt.",
  abschnitt: null,
  hilfe: "Das Trilemma in Kurzform: (1) Gott ist allmächtig – er könnte das Leid verhindern. (2) Gott ist gut – er wollte das Leid verhindern. (3) Es gibt Leid, das keinen erkennbaren Sinn hat. Hält man alle drei Sätze zugleich fest, widersprechen sie einander. Leibniz greift Satz 3 an: Das Leid sieht nur für uns sinnlos aus. Voltaire hält Satz 3 fest und lässt die Frage nach Gott offen. Es gibt weitere Wege – und jeder hat seinen Preis.",
  aufgaben: [
    { id: "p1", typ: "zuordnung",
      frage: "Jede Antwort auf die Theodizeefrage gibt einen der drei Sätze preis oder schwächt ihn ab. Ordne die folgenden Antworten zu.",
      zusatz: "Frage bei jeder Antwort: Was wird hier über Gott – oder über das Leid – nicht mehr behauptet?",
      koerbe: [
        { id: "a", label: "schwächt Gottes Allmacht ab" },
        { id: "b", label: "schwächt Gottes Güte ab" },
        { id: "c", label: "bestreitet, dass das Leid sinnlos ist" }
      ],
      items: [
        { id: "t1", text: "Gott leidet mit den Menschen, kann das Leid aber nicht verhindern", korb: "a" },
        { id: "t3", text: "Das Erdbeben war eine Strafe für die Sünden der Stadt", korb: "b" },
        { id: "t5", text: "Was uns als Übel erscheint, gehört zu einer Ordnung, die wir nicht überblicken", korb: "c" },
        { id: "t2", text: "Gott hat sich zurückgenommen, damit der Mensch wirklich frei sein kann", korb: "a" },
        { id: "t6", text: "Leid ist der notwendige Preis dafür, dass Menschen frei handeln können", korb: "c" },
        { id: "t4", text: "Gott hat die Welt geschaffen und überlässt sie seither sich selbst", korb: "b" }
      ],
      hinweisLeer: "Es liegen noch Antworten im Vorrat.",
      hinweisFalsch: "Eine Zuordnung passt noch nicht. Prüfe: Wird hier Gottes Können eingeschränkt, sein Wollen – oder wird das Leid umgedeutet?" },

    { id: "p2", typ: "aussagen",
      frage: "Prüfe, was die beiden Positionen über Gott voraussetzen.",
      zusatz: "Begründe jede Einordnung. Es geht jetzt nicht mehr um das Leid allein, sondern um das Gottesbild, das dahintersteht.",
      kategorien: ["trifft zu", "muss präzisiert werden", "trifft nicht zu"],
      items: [
        { id: "p2a", text: "Leibniz rettet Gottes Güte, indem er bestreitet, dass das Leid sinnlos ist.",
          loesung: 0, begruendung: true,
          rueck: "Genau das ist sein Zug: Güte und Allmacht bleiben unangetastet, dafür ist das Leid nur scheinbar sinnlos – wir überblicken das Ganze nicht." },
        { id: "p2b", text: "Voltaire bestreitet, dass es Gott gibt.",
          loesung: 2, begruendung: true,
          rueck: "Er bestreitet nicht Gott, sondern eine bestimmte Rede von ihm. Sein Zitat fragt, wie man sich einen Gott denken soll, der die Güte selbst ist und doch Übel über seine Geschöpfe gießt – das ist eine Frage an das Gottesbild, keine Leugnung." },
        { id: "p2c", text: "Wer sagt, Gott greife bewusst nicht ein, damit der Mensch frei bleibt, hat die Theodizeefrage gelöst.",
          loesung: 1, begruendung: true,
          rueck: "Für das moralische Übel trägt dieser Gedanke. Das Erdbeben von Lissabon hat aber niemand verschuldet – für das physische Übel bleibt die Frage offen." },
        { id: "p2d", text: "Ein Gott, der mitleidet, aber nicht helfen kann, ist kein Gott mehr.",
          loesung: 1, begruendung: true,
          rueck: "Das hängt daran, was „Gott“ heißen soll. Wer die Allmacht zur Grundbedingung macht, muss zustimmen; wer Gott von der Liebe her denkt, kann widersprechen. Genau hier scheiden sich die Gottesbilder." }
      ],
      hinweisLeer: "Mindestens eine Aussage ist noch nicht eingeordnet.",
      hinweisBegruendung: "Zu mindestens einer Aussage fehlt noch eine Begründung von mindestens 60 Zeichen." },

    { id: "p3", typ: "position",
      frage: "An welchem der drei Sätze würdest du am ehesten etwas verändern?",
      zusatz: "Wähle und begründe. Sage dabei ausdrücklich, welches Bild von Gott übrig bleibt, wenn du dich so entscheidest – und welchen Preis du dafür zahlst.",
      optionen: [
        "an der Allmacht: Gott kann das Leid nicht verhindern",
        "an der Güte: Gott will das Leid nicht in jedem Fall verhindern",
        "an der Sinnlosigkeit: das Leid hat einen Sinn, den wir nicht sehen"
      ],
      minLen: 280,
      hinweisWahl: "Wähle zuerst eine der drei Möglichkeiten.",
      hinweisText: "Deine Begründung fehlt noch oder ist zu knapp. Es fehlt entweder die Begründung deiner Wahl oder das Gottesbild, das daraus folgt." },

    { id: "p4", typ: "text",
      frage: "Trifft Voltaires Kritik den Glauben an Gott – oder nur ein bestimmtes Bild von Gott? Beurteile das begründet.",
      zusatz: "Der letzte Textabschnitt hilft: Voltaires Kritik trifft sich mit einer theologischen Kritik am Optimismus, weil der Glaube von einer erlösungsbedürftigen Welt ausgeht. Was folgt daraus für die Reichweite seiner Kritik?",
      minLen: 280,
      zeilen: 7,
      hinweisLeer: "Deine Beurteilung fehlt noch oder ist zu knapp. Entscheide dich begründet und belege am Text." }
  ]
},

/* ---------------------------------------------------------------- 12 */
{
  id: "ertrag", kurz: "12", kapitel: "Lernschritt 12",
  titel: "Ertrag und eigene Stellungnahme",
  lead: "Du hast beide Positionen geprüft und gesehen, woran sich die Gottesbilder scheiden. Jetzt sprichst du mit eigener Stimme.",
  abschnitt: null,
  aufgaben: [
    { id: "e1", typ: "text",
      frage: "Halte den Ertrag fest: Welcher Gedanke aus dieser Stunde hat dich am meisten beschäftigt – und was hat er an deiner eigenen Sicht verschoben?",
      zusatz: "Auch „nichts verschoben“ ist eine Antwort, wenn du begründest, warum der Gedanke dich nicht erreicht hat.",
      minLen: 200,
      zeilen: 5,
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
            "Unterscheide durchgehend zwei Fragen: Ist eine Deutung des Leids in sich schlüssig? Und: Ist sie gegenüber Betroffenen vertretbar?",
            "Prüfe den schwierigsten Punkt: Wem gegenüber wird eine Deutung des Leids ausgesprochen? Macht es einen Unterschied, ob ein Betroffener sie für sich selbst findet oder ob ein Dritter sie ihm zuspricht?",
            "Beziehe dein Ergebnis aus Lernschritt 11 ein: An welchem der drei Sätze – Allmacht, Güte, Sinnlosigkeit des Leids – hältst du fest, und welches Gottesbild folgt daraus?"
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
        "Gibt es eine dritte Möglichkeit zwischen Deuten und Aushalten?",
        "Muss ein Gott, an den man sich in der Not wendet, allmächtig sein – oder genügt es, dass er mitgeht?"
      ],
      hinweisLeer: "Deine Stellungnahme fehlt noch oder ist zu knapp. Arbeite Einleitung, Hauptteil und Schluss aus und beziehe beide Positionen ein." }
  ]
},

/* ---------------------------------------------------------------- Abgabe */
{
  id: "abgabe", kurz: "13", kapitel: "Abschluss",
  titel: "Arbeit abgeben",
  lead: "Trage deinen Namen und deinen Kurs ein und gib deine Arbeit verbindlich ab.",
  abschnitt: null,
  abgabe: true,
  aufgaben: []
}
];
