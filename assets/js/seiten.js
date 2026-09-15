/* =====================================================================
   SEITEN  —  Theodizee: Leibniz und Voltaire
   Aufbau nach dem Stundenraster vom 05.05.2025:
   Einstieg – Erarbeitung I – Sicherung I – Gelenk – Erarbeitung II –
   Sicherung II – Vertiefung (Gottesbild) – Abgabe
   ---------------------------------------------------------------------
   Anspruchsniveau: Oberstufe (Q2). Reine Textsuche (AFB I) ist nur dort
   vorgesehen, wo sie eine anschliessende Deutung vorbereitet; der
   Schwerpunkt liegt auf AFB II und III.
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
      frage: "Deute die Karikatur: Welche Aussage trifft sie, an wen richtet sie sich – und mit welchen Mitteln erreicht sie ihre Wirkung?",
      zusatz: "Belege deine Deutung an dem, was du zuvor beschrieben hast. Karikaturen arbeiten mit Übertreibung, Verkürzung und Anspielung; benenne, wo du das findest.",
      minLen: 250,
      zeilen: 6,
      platzhalter: "Die Karikatur kritisiert …",
      hinweisLeer: "Deine Deutung fehlt noch oder ist sehr knapp. Nenne Aussage, Adressat und mindestens ein gestalterisches Mittel." },

    { id: "k3", typ: "zuordnung",
      frage: "Ordne die folgenden Fälle den drei klassischen Übel-Arten zu.",
      zusatz: "Die philosophische Tradition unterscheidet: das physische Übel (Leid durch Naturvorgänge), das moralische Übel (Leid, das Menschen verschulden) und das metaphysische Übel (Leid, das schon daraus folgt, dass alles Geschaffene endlich und begrenzt ist).",
      koerbe: [
        { id: "a", label: "physisches Übel – Leid durch Naturvorgänge" },
        { id: "b", label: "moralisches Übel – Leid durch menschliches Handeln" },
        { id: "c", label: "metaphysisches Übel – Leid aus der Endlichkeit alles Geschaffenen" }
      ],
      items: [
        { id: "i1", text: "Eine Flutwelle reißt die Menschen im Hafen mit sich", korb: "a" },
        { id: "i2", text: "Plünderer nutzen die zerstörte Stadt aus", korb: "b" },
        { id: "i3", text: "Kein Mensch kann die Folgen seiner Entscheidungen ganz überblicken", korb: "c" },
        { id: "i4", text: "Eine Seuche breitet sich unter den Überlebenden aus", korb: "a" },
        { id: "i5", text: "Hilfsgüter werden aus politischem Kalkül zurückgehalten", korb: "b" },
        { id: "i6", text: "Auch wer verschont bleibt, wird altern und sterben", korb: "c" }
      ],
      hinweisLeer: "Es liegen noch Fälle im Vorrat.",
      hinweisFalsch: "Eine Zuordnung passt noch nicht. Frage jeweils: Wer oder was ist die Ursache – die Natur, ein menschlicher Wille oder die Endlichkeit selbst?" },

    { id: "k4", typ: "text",
      frage: "Prüfe die Unterscheidung an einem Grenzfall: In Lissabon starben besonders viele Menschen in den schlecht gebauten Häusern der Armenviertel. Erörtere, ob dieses Leid ein physisches oder ein moralisches Übel ist – und was jeweils davon abhängt, wie man es einordnet.",
      zusatz: "Denk daran, wen die Einordnung entlastet und wen sie in die Verantwortung nimmt.",
      minLen: 300,
      zeilen: 7,
      hinweisLeer: "Deine Erörterung fehlt noch oder ist zu knapp. Argumentiere für beide Einordnungen und ziehe dann ein begründetes Fazit." }
  ]
},

/* ---------------------------------------------------------------- 2 */
{
  id: "leibniz1", kurz: "2", kapitel: "Lernschritt 2",
  titel: "Leibniz: Die beste aller möglichen Welten",
  lead: "Lies den Text über Leibniz und arbeite seine Kernaussage heraus.",
  abschnitt: "l1",
  aufgaben: [
    { id: "a1", typ: "text",
      frage: "Gib Leibniz’ Kernaussage zur Theodizeefrage in einem einzigen, präzisen Satz wieder und nenne die Schrift, in der er sie entfaltet.",
      zusatz: "Ein Satz, kein Absatz. Achte darauf, dass dein Satz eine Behauptung enthält und nicht nur ein Thema benennt.",
      minLen: 120,
      platzhalter: "Nach Leibniz ist unsere Welt …",
      schluessel: [["beste", "bestmöglich"], ["welt"]],
      hinweisLeer: "Deine Antwort fehlt noch oder ist sehr knapp.",
      hinweisSchluessel: "Die Kernaussage enthält den Ausdruck „beste aller möglichen Welten“ – und die Schrift heißt „Abhandlung über die Güte Gottes, die Freiheit des Menschen und den Ursprung des Übels“." },

    { id: "a2", typ: "text",
      frage: "Der Text nennt Leibniz einen Denker, der „die Wissenschaft als eine Einheit“ betrachtete. Erläutere, was diese Grundüberzeugung für seinen Umgang mit der Theodizeefrage bedeutet.",
      zusatz: "Wer alles als einen Zusammenhang denkt, wird auch das Leid als Teil eines Zusammenhangs denken. Was folgt daraus – und was wird dadurch schwierig?",
      minLen: 250,
      zeilen: 6,
      hinweisLeer: "Deine Erläuterung fehlt noch oder ist zu knapp. Stelle einen Zusammenhang zwischen dem Einheitsdenken und der Deutung des Leids her." }
  ]
},

/* ---------------------------------------------------------------- 3 */
{
  id: "leibniz2", kurz: "3", kapitel: "Lernschritt 3",
  titel: "Leibniz im Wortlaut",
  lead: "Jetzt kommt Leibniz selbst zu Wort. Lies das Zitat gründlich – es ist sperrig, aber der Gedankengang ist klar.",
  abschnitt: "l2",
  aufgaben: [
    { id: "b1", typ: "aussagen",
      frage: "Prüfe die folgenden Aussagen am Wortlaut des Zitats.",
      zusatz: "Begründe jede Einordnung am Text. „Muss präzisiert werden“ heißt: im Kern richtig, aber so formuliert missverständlich.",
      kategorien: ["trifft zu", "muss präzisiert werden", "trifft nicht zu"],
      items: [
        { id: "b1a", text: "Gott war gezwungen, die beste Welt zu wählen.",
          loesung: 1, begruendung: true,
          rueck: "Leibniz schreibt, Gott handle „nicht anders, als nach der höchsten Vernunft“. Das ist kein Zwang von außen, sondern eine Folge seiner eigenen Vollkommenheit – Gott kann nicht gegen sich selbst handeln." },
        { id: "b1b", text: "Hätte es unter den möglichen Welten keine beste gegeben, hätte Gott überhaupt keine Welt geschaffen.",
          loesung: 0, begruendung: true,
          rueck: "Genau das sagt der Bedingungssatz des Zitats. Schöpfung setzt für Leibniz einen vernünftigen Wahlgrund voraus." },
        { id: "b1c", text: "Mit „Welt“ meint Leibniz die Erde und ihre Bewohner.",
          loesung: 2, begruendung: true,
          rueck: "„Welt“ ist bei Leibniz „das ganze Nebeneinandersein aller bestehenden Dinge“ – über alle Zeiten und Orte hinweg. Nicht ein Ort, sondern ein vollständiger Zusammenhang." },
        { id: "b1d", text: "Das Zitat beweist, dass unsere Welt die beste ist.",
          loesung: 2, begruendung: true,
          rueck: "Leibniz beweist nichts an der Welt, er folgert vom Begriff Gottes her: Ein vollkommen weiser und guter Schöpfer kann nur das Beste wählen. Die These steht und fällt also mit dieser Voraussetzung." }
      ],
      hinweisLeer: "Mindestens eine Aussage ist noch nicht eingeordnet.",
      hinweisBegruendung: "Zu mindestens einer Aussage fehlt noch eine Begründung von mindestens 60 Zeichen." },

    { id: "b3", typ: "text",
      frage: "Bestimme Leibniz’ Begriff von „Welt“ und zeige, welche Folge er für sein Argument hat: Warum lässt sich von einem einzelnen Übel aus nicht beurteilen, ob diese Welt die beste ist?",
      zusatz: "Zwei Schritte: erst den Begriff klären, dann die argumentative Konsequenz. Prüfe zum Schluss, ob dieser Zug das Argument stark macht – oder unangreifbar und damit unprüfbar.",
      minLen: 300,
      zeilen: 7,
      hinweisLeer: "Deine Antwort fehlt noch oder ist zu knapp. Es fehlt entweder die Begriffsbestimmung oder die Konsequenz für das Argument." }
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
      zusatz: "Begründe jede Einordnung – auch die, bei der du dir sicher bist. Die Begründung ist die eigentliche Leistung.",
      kategorien: ["trifft zu", "muss präzisiert werden", "trifft nicht zu"],
      items: [
        { id: "c2a", text: "Nach Leibniz ist unsere Welt vollkommen.",
          loesung: 2, begruendung: true,
          rueck: "Der Text sagt ausdrücklich: Vollkommen ist nur Gott allein. Die Welt ist die beste mögliche – das ist etwas anderes." },
        { id: "c2b", text: "Eine Verbesserung an einer Stelle der Welt kann an anderer Stelle Verschlechterungen nach sich ziehen.",
          loesung: 0, begruendung: true,
          rueck: "Genau das ist Leibniz’ Argument von den Konsequenzen jeder kleinsten Veränderung. Entscheidend ist, was daraus folgt: Nur Gott kann diese Folgen überschauen – wir können deshalb keine bessere Welt angeben." },
        { id: "c2c", text: "„Beste aller möglichen Welten“ meint den jetzigen Zustand der Welt.",
          loesung: 2, begruendung: true,
          rueck: "Leibniz denkt dynamisch: Es geht um die Welt mit ihrem Entwicklungspotential, nicht um ihren derzeitigen Zustand." },
        { id: "c2d", text: "Moralische Übel sind der Preis dafür, dass Menschen frei sind.",
          loesung: 0, begruendung: true,
          rueck: "So formuliert es der Text: moralische Übel als notwendige Konsequenz der Freiheit. Zu prüfen bleibt, ob dieses Argument auch das Leid der Opfer erklärt – oder nur die Tat der Täter." }
      ],
      hinweisLeer: "Mindestens eine Aussage ist noch nicht eingeordnet.",
      hinweisBegruendung: "Zu mindestens einer Aussage fehlt noch eine Begründung von mindestens 60 Zeichen." },

    { id: "c3", typ: "text",
      frage: "Leibniz’ Begründungen tragen unterschiedlich weit. Bestimme, welche seiner vier Begründungen das physische Übel (etwa eine Naturkatastrophe) am wenigsten erklärt – und begründe dein Urteil.",
      zusatz: "Freiheit, Geschöpflichkeit, begrenzte Sicht, Entwicklungspotential: Halte jede Begründung an einen konkreten Fall und sieh zu, wo sie greift und wo nicht.",
      minLen: 280,
      zeilen: 7,
      hinweisLeer: "Dein Urteil fehlt noch oder ist zu knapp. Nenne die Begründung, prüfe sie am Fall und ziehe ein Fazit." }
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
  lead: "Ein einziges Ereignis hat das optimistische Denken der Aufklärung erschüttert. Lies den Bericht gründlich – achte dabei nicht nur darauf, was geschah, sondern wen es traf.",
  abschnitt: "g1",
  aufgaben: [
    { id: "g1a", typ: "aussagen",
      frage: "Prüfe die folgenden Aussagen über die Wirkung des Erdbebens.",
      zusatz: "Hier geht es nicht mehr um das Auffinden von Textstellen, sondern um ihre Deutung. Begründe jede Einordnung.",
      kategorien: ["trifft zu", "muss präzisiert werden", "trifft nicht zu"],
      items: [
        { id: "g1a1", text: "Theologisch verstörend war vor allem die hohe Zahl der Toten.",
          loesung: 2, begruendung: true,
          rueck: "Die Zahl allein erklärt die Erschütterung nicht – Seuchen und Kriege forderten mehr Opfer. Verstörend war, wen es traf: die Gläubigen im Gottesdienst, und zwar an Allerheiligen." },
        { id: "g1a2", text: "Die Verteilung der Opfer widerlegte das Deutungsmuster, Unglück sei Strafe für die Sünder.",
          loesung: 0, begruendung: true,
          rueck: "Genau daran zerbrach das Muster: Wer in der Kirche war, starb; wer im Hafenviertel war, überlebte. Ein Strafgericht müsste die Schuldigen treffen." },
        { id: "g1a3", text: "Das Erdbeben widerlegt Leibniz’ These von der besten aller möglichen Welten.",
          loesung: 1, begruendung: true,
          rueck: "Logisch widerlegt es sie nicht – Leibniz kann jedes Einzelübel als notwendigen Teil des Ganzen deuten. Was zerbricht, ist nicht die Beweisbarkeit, sondern die Zumutbarkeit dieser Deutung." },
        { id: "g1a4", text: "Dass das Beben europaweit zum Streitfall wurde, lag auch an einer technischen Entwicklung.",
          loesung: 0, begruendung: true,
          rueck: "Der Text nennt die fortgeschrittene Presseverbreitung: Lissabon gilt als erstes großes internationales Medienereignis. Erst die Öffentlichkeit macht aus einem Unglück eine Debatte." }
      ],
      hinweisLeer: "Mindestens eine Aussage ist noch nicht eingeordnet.",
      hinweisBegruendung: "Zu mindestens einer Aussage fehlt noch eine Begründung von mindestens 60 Zeichen." },

    { id: "g1b", typ: "text",
      frage: "Erdbeben waren 1755 nichts Neues. Erkläre, warum trotzdem gerade dieses Beben als Wendepunkt der europäischen Geistesgeschichte gilt.",
      zusatz: "Drei Ebenen helfen dir: das Ereignis selbst, die Betroffenen und der Zeitpunkt in der Geistesgeschichte.",
      minLen: 280,
      zeilen: 7,
      hinweisLeer: "Deine Erklärung fehlt noch oder ist zu knapp. Es genügt nicht, das Ereignis nachzuerzählen – erkläre, was es im Denken der Zeit zum Einsturz brachte." },

    { id: "g1c", typ: "position",
      frage: "Kann Leibniz’ Erklärung angesichts von Lissabon zufriedenstellend sein?",
      zusatz: "Nimm Stellung und begründe. Unterscheide dabei zwei Fragen: Ist die Erklärung in sich schlüssig? Und: Ist sie einem Betroffenen gegenüber vertretbar?",
      optionen: ["Ja", "Nein", "Teilweise"],
      minLen: 280,
      hinweisWahl: "Wähle zuerst eine Position aus.",
      hinweisText: "Deine Begründung fehlt noch oder ist zu knapp. Beziehe dich sowohl auf Leibniz als auch auf das Ereignis und trenne Schlüssigkeit von Zumutbarkeit." }
  ]
},

/* ---------------------------------------------------------------- 7 */
{
  id: "voltaire1", kurz: "7", kapitel: "Lernschritt 7",
  titel: "Voltaire: Die Antwort auf Lissabon",
  lead: "Für Voltaire stand das Erdbeben im deutlichen Gegensatz zu Leibniz’ „bester aller möglichen Welten“.",
  abschnitt: "v1",
  aufgaben: [
    { id: "v1b", typ: "zuordnung",
      frage: "Ordne die Titel und Textproben der Gattung zu, zu der sie gehören.",
      zusatz: "Drei Gattungen, sechs Karten. Zwei Werke stammen von Voltaire, eines von Leibniz.",
      koerbe: [
        { id: "a", label: "Lehrgedicht – argumentierende Versdichtung" },
        { id: "b", label: "Roman – erzählende, satirische Prosa" },
        { id: "c", label: "philosophische Abhandlung – systematische Prosa" }
      ],
      items: [
        { id: "w1", text: "„Lehrgedicht über die Katastrophe von Lissabon“", korb: "a" },
        { id: "w2", text: "„Candide oder der Optimismus“", korb: "b" },
        { id: "w3", text: "„Abhandlung über die Güte Gottes, die Freiheit des Menschen und den Ursprung des Übels“", korb: "c" },
        { id: "w4", text: "„Leibnitz lehrt mich nicht, durch welche unsichtbaren Knoten / In den bestgeordneten möglichen Universen …“", korb: "a" },
        { id: "w5", text: "Eine Figur, die nach jedem Unglück beteuert, alles sei zum Besten eingerichtet", korb: "b" },
        { id: "w6", text: "„Ich nenne Welt das ganze Nebeneinandersein aller bestehenden Dinge …“", korb: "c" }
      ],
      hinweisLeer: "Es liegen noch Karten im Vorrat.",
      hinweisFalsch: "Eine Zuordnung passt noch nicht. Achte auf die Form: Verse, Erzählung oder begriffliche Darlegung?" },

    { id: "v1a", typ: "text",
      frage: "Erläutere, warum Voltaire seine Kritik in Versen und in einem Roman vorträgt und nicht in einer philosophischen Abhandlung. Welchen Vorteil verschafft ihm die literarische Form gegenüber Leibniz – und welchen Preis zahlt er dafür?",
      zusatz: "Denk an die Zitate: „Kommt her! Und seht die grässlichen Ruinen“. Was kann Dichtung, was ein Argument nicht kann? Und was kann sie gerade nicht leisten?",
      minLen: 300,
      zeilen: 7,
      hinweisLeer: "Deine Erläuterung fehlt noch oder ist zu knapp. Es fehlt entweder der Vorteil der literarischen Form oder ihr Preis." },

    { id: "v1c", typ: "text",
      frage: "Voltaire prangerte schon vor 1755 Absolutismus und Kirche an. Beurteile, ob das Erdbeben seine Haltung nur bestätigt oder ob es etwas Neues in sein Denken bringt.",
      zusatz: "Achte auf den Unterschied: Kritik an Institutionen trifft Menschen, die es anders machen könnten. Wen trifft die Kritik nach Lissabon?",
      minLen: 250,
      zeilen: 6,
      hinweisLeer: "Deine Beurteilung fehlt noch oder ist zu knapp. Entscheide dich begründet für eine der beiden Deutungen." }
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
      frage: "Voltaire nennt seine Gegner „betrogene Philosophen“. Erkläre, worin der Betrug nach Voltaire besteht: Wer betrügt hier wen, und womit? Zeige dabei, warum Voltaire sie „betrogen“ und nicht „Betrüger“ nennt – und was diese Wortwahl über seinen Vorwurf verrät.",
      zusatz: "Die Antwort „die Philosophen“ genügt nicht. Gefragt ist die Struktur des Vorwurfs.",
      minLen: 280,
      zeilen: 7,
      hinweisLeer: "Deine Antwort fehlt noch oder ist zu knapp. Kläre die Richtung des Betrugs und die Bedeutung des Partizips „betrogen“." },

    { id: "v2b", typ: "text",
      frage: "Im zweiten Zitat stellt Voltaire sich vor, was Philosophen den Überlebenden zurufen könnten. Erkläre, warum er eine solche Rede „ebenso grausam wie das Erdbeben“ nennt.",
      zusatz: "Was genau ist an diesem Trost verletzend? Sieh dir an, wovon die aufgezählten Vorteile handeln – und wem sie zugutekommen.",
      minLen: 250,
      zeilen: 6,
      hinweisLeer: "Deine Erklärung fehlt noch oder ist sehr knapp." },

    { id: "v2c", typ: "text",
      frage: "Im dritten Zitat spricht Voltaire von „unsichtbaren Knoten“. Deute das Bild und bestimme, was Voltaire Leibniz damit genau vorwirft: einen Denkfehler, eine fehlende Erklärung oder eine Zumutung? Entscheide dich begründet und belege am Wortlaut.",
      zusatz: "„Leibnitz lehrt mich nicht …“ – achte darauf, was Voltaire hier behauptet und was er gerade nicht behauptet.",
      minLen: 280,
      zeilen: 7,
      hinweisLeer: "Deine Deutung fehlt noch oder ist zu knapp. Nenne das Bild, entscheide dich für eine der drei Möglichkeiten und belege sie." }
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
      zusatz: "Begründe jede Einordnung am Text – auch dort, wo die Aussage zutrifft.",
      kategorien: ["trifft zu", "muss präzisiert werden", "trifft nicht zu"],
      items: [
        { id: "v3a1", text: "Voltaire setzt an die Stelle der Theodizee einen neuen Erklärungsansatz.",
          loesung: 2, begruendung: true,
          rueck: "Der Text sagt ausdrücklich das Gegenteil: Voltaire kritisiert, ohne eine neue Erklärung anzubieten. Für ihn gilt es auszuhalten, dass es keinen Sinn gibt." },
        { id: "v3a2", text: "Nach Voltaire bleibt dem Menschen die Hoffnung auf ein lebenswertes Leben.",
          loesung: 0, begruendung: true,
          rueck: "Genau darin besteht bei Voltaire das, was bleibt – aber eben als Hoffnung, nicht als Deutung des Leids. Die Hoffnung erklärt nichts, sie hält offen." },
        { id: "v3a3", text: "Die Rede von der besten aller möglichen Welten nimmt der Hoffnung ihren Gegenstand.",
          loesung: 0, begruendung: true,
          rueck: "Wenn diese Welt schon die beste ist, lässt sich keine bessere mehr erhoffen – so argumentiert Voltaire. Der Optimismus schlägt dabei in Resignation um." },
        { id: "v3a4", text: "Voltaires Kritik trifft sich an einem Punkt mit einer theologischen Kritik am Optimismus.",
          loesung: 0, begruendung: true,
          rueck: "Der Optimismus widerspricht dem christlichen Axiom einer sündhaften Welt, die erlöst werden muss. Ein Atheismusvorwurf greift hier also zu kurz." }
      ],
      hinweisLeer: "Mindestens eine Aussage ist noch nicht eingeordnet.",
      hinweisBegruendung: "Zu mindestens einer Aussage fehlt noch eine Begründung von mindestens 60 Zeichen." },

    { id: "v3b", typ: "text",
      frage: "Notiere Voltaires Argumente gegen Leibniz in eigenen Worten und gib zu jedem an, ob es Leibniz’ These als falsch oder als unzumutbar angreift.",
      zusatz: "Mindestens drei Argumente, jeweils mit Belegstelle – du brauchst sie in Lernschritt 12 wieder.",
      minLen: 300,
      zeilen: 8,
      platzhalter: "1. Argument – Beleg – greift an als: falsch / unzumutbar\n2. …\n3. …",
      hinweisLeer: "Deine Argumentesammlung fehlt noch oder ist zu knapp. Drei begründete Argumente mit Einordnung sind das Ziel." }
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
  id: "gottesbild", kurz: "12", kapitel: "Lernschritt 12",
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
        { id: "t2", text: "Gott hat sich zurückgenommen, damit der Mensch wirklich frei sein kann", korb: "a" },
        { id: "t3", text: "Das Erdbeben war eine Strafe für die Sünden der Stadt", korb: "b" },
        { id: "t4", text: "Gott hat die Welt geschaffen und überlässt sie seither sich selbst", korb: "b" },
        { id: "t5", text: "Was uns als Übel erscheint, gehört zu einer Ordnung, die wir nicht überblicken", korb: "c" },
        { id: "t6", text: "Leid ist der notwendige Preis dafür, dass Menschen frei handeln können", korb: "c" }
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
      minLen: 300,
      hinweisWahl: "Wähle zuerst eine der drei Möglichkeiten.",
      hinweisText: "Deine Begründung fehlt noch oder ist zu knapp. Es fehlt entweder die Begründung deiner Wahl oder das Gottesbild, das daraus folgt." },

    { id: "p4", typ: "text",
      frage: "Trifft Voltaires Kritik den Glauben an Gott – oder nur ein bestimmtes Bild von Gott? Beurteile das begründet.",
      zusatz: "Der letzte Textabschnitt hilft: Voltaires Kritik trifft sich mit einer theologischen Kritik am Optimismus, weil der Glaube von einer erlösungsbedürftigen Welt ausgeht. Was folgt daraus für die Reichweite seiner Kritik?",
      minLen: 300,
      zeilen: 7,
      hinweisLeer: "Deine Beurteilung fehlt noch oder ist zu knapp. Entscheide dich begründet und belege am Text." }
  ]
},

/* ---------------------------------------------------------------- 13 */
{
  id: "ertrag", kurz: "13", kapitel: "Lernschritt 13",
  titel: "Ertrag und eigene Stellungnahme",
  lead: "Du hast beide Positionen geprüft und gesehen, woran sich die Gottesbilder scheiden. Jetzt sprichst du mit eigener Stimme.",
  abschnitt: null,
  aufgaben: [
    { id: "e1", typ: "text",
      frage: "Halte den Ertrag fest: Welcher Gedanke aus dieser Stunde hat dich am meisten beschäftigt – und was hat er an deiner eigenen Sicht verschoben?",
      zusatz: "Auch „nichts verschoben“ ist eine Antwort, wenn du begründest, warum der Gedanke dich nicht erreicht hat.",
      minLen: 220,
      zeilen: 6,
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
            "Beziehe dein Ergebnis aus Lernschritt 12 ein: An welchem der drei Sätze – Allmacht, Güte, Sinnlosigkeit des Leids – hältst du fest, und welches Gottesbild folgt daraus?"
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
  id: "abgabe", kurz: "14", kapitel: "Abschluss",
  titel: "Arbeit abgeben",
  lead: "Trage deinen Namen und deinen Kurs ein und gib deine Arbeit verbindlich ab.",
  abschnitt: null,
  abgabe: true,
  aufgaben: []
}
];
