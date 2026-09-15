/* =====================================================================
   TAFELBILD  —  Leibniz und Voltaire gegenübergestellt
   ===================================================================== */
window.TAFEL_INHALT = {
  aktiv: true,

  felder: [
    { id: "frage",    klasse: "s-oben betont" },
    { id: "leibniz",  klasse: "s-links" },
    { id: "voltaire", klasse: "s-rechts" },
    { id: "lbox",     klasse: "s-linksbox kasten" },
    { id: "anlass",   klasse: "s-mitte" },
    { id: "vbox",     klasse: "s-rechtsbox kasten" },
    { id: "lgrund",   klasse: "s-linksunten" },
    { id: "vgrund",   klasse: "s-rechtsunten" },
    { id: "streit",   klasse: "s-breit1" }
  ],

  bausteine: [
    { id: "b1", text: "Theodizeefrage: Warum lässt ein guter Gott das Leid zu?", feld: "frage" },
    { id: "b2", text: "Leibniz",  feld: "leibniz" },
    { id: "b3", text: "Voltaire", feld: "voltaire" },
    { id: "b4", text: "Die beste aller möglichen Welten", feld: "lbox" },
    { id: "b5", text: "Leid ist sinnlos", feld: "vbox" },
    { id: "b6", text: "Erdbeben von Lissabon 1755", feld: "anlass" },
    { id: "b7", text: "Unser Blick auf das Ganze ist zu begrenzt", feld: "lgrund" },
    { id: "b8", text: "Eine Deutung des Leids verhöhnt die Opfer", feld: "vgrund" },
    { id: "b9", text: "Streitpunkt: Hat das Leid einen höheren Sinn?", feld: "streit" },
    { id: "x1", text: "Gott straft die Ungläubigen", feld: null },
    { id: "x2", text: "Voltaire setzt eine neue Erklärung an die Stelle der alten", feld: null },
    { id: "x3", text: "Leibniz hält die Welt für vollkommen", feld: null }
  ],

  linien: [
    { von: "frage",   nach: "leibniz",  pfeil: true },
    { von: "frage",   nach: "voltaire", pfeil: true },
    { von: "leibniz", nach: "lbox",     fein: true },
    { von: "voltaire",nach: "vbox",     fein: true },
    { von: "lbox",    nach: "lgrund",   fein: true },
    { von: "vbox",    nach: "vgrund",   fein: true },
    { von: "anlass",  nach: "vbox",     pfeil: true },
    { von: "anlass",  nach: "lbox",     pfeil: true }
  ],

  hinweise: {
    leer:     "Es {ist_sind} noch {anzahl} {feld} leer. Beginne oben mit der Leitfrage und ordne dann die beiden Positionen zu.",
    ablenker: "Mindestens ein eingeordneter Baustein steht so in keinem der beiden Texte. Prüfe, was Leibniz und Voltaire tatsächlich behaupten – und was nicht.",
    falsch:   "Die Zuordnung stimmt noch nicht überall. Achte darauf, welche Begründung zu welcher Position gehört."
  }
};
