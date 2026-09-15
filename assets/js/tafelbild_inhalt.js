/* =====================================================================
   TAFELBILD  —  Inhalt des interaktiven Schaubilds
   ---------------------------------------------------------------------
   Wird diese Datei leer gelassen (aktiv: false), entfällt der Lernschritt
   mit dem Tafelbild; lösche dann auch die Seite mit "tafel: true" aus
   seiten.js.

   felder    – die Ablageflächen. "klasse" bestimmt den Platz im Raster.
               Verfügbar sind: s-oben, s-links, s-rechts, s-linksbox,
               s-mitte, s-rechtsbox, s-linksunten, s-rechtsunten, s-unten,
               s-breit1, s-breit2. Zusätzlich möglich: "betont" (hervorgehoben)
               und "kasten" (mit Rahmen). Nicht belegte Plätze bleiben frei.
   bausteine – die Kärtchen. "feld" ist das richtige Ziel; "feld: null"
               macht den Baustein zum Ablenker, der nirgends hingehört.
   linien    – Verbindungen zwischen Feldern (fein: dünn, pfeil: mit Spitze).
   ===================================================================== */
window.TAFEL_INHALT = {
  aktiv: true,

  felder: [
    { id: "oben",     klasse: "s-oben betont" },
    { id: "links",    klasse: "s-links" },
    { id: "rechts",   klasse: "s-rechts" },
    { id: "linksbox", klasse: "s-linksbox kasten" },
    { id: "mitte",    klasse: "s-mitte" },
    { id: "rechtsbox",klasse: "s-rechtsbox kasten" }
  ],

  bausteine: [
    { id: "b1", text: "Regeln",                                  feld: "oben" },
    { id: "b2", text: "äußere Regeln",                           feld: "links" },
    { id: "b3", text: "innere Regeln",                           feld: "rechts" },
    { id: "b4", text: "ziehen Grenzen, sind erzwingbar",         feld: "linksbox" },
    { id: "b5", text: "eröffnen Spielräume, brauchen Einsicht",  feld: "rechtsbox" },
    { id: "b6", text: "beide ermöglichen Zusammenleben",         feld: "mitte" },
    { id: "x1", text: "Regeln sind immer Einschränkungen",       feld: null },
    { id: "x2", text: "Überzeugungen lassen sich befehlen",      feld: null }
  ],

  linien: [
    { von: "oben",     nach: "links",     pfeil: true },
    { von: "oben",     nach: "rechts",    pfeil: true },
    { von: "links",    nach: "linksbox",  fein: true },
    { von: "rechts",   nach: "rechtsbox", fein: true },
    { von: "linksbox", nach: "mitte",     fein: true },
    { von: "mitte",    nach: "rechtsbox", fein: true }
  ],

  /* Rückmeldungen. Die Platzhalter {anzahl} und {feld} werden ersetzt. */
  hinweise: {
    leer:     "Es {ist_sind} noch {anzahl} {feld} leer. Beginne oben mit dem Oberbegriff.",
    ablenker: "Mindestens ein eingeordneter Baustein widerspricht dem Text. Prüfe, welche Aussagen der Text gerade nicht vertritt.",
    falsch:   "Die Zuordnung stimmt noch nicht überall. Lies den Abschnitt zu den beiden Arten von Regeln erneut."
  }
};
