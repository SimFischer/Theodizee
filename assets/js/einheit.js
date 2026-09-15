/* =====================================================================
   EINHEIT  —  zentrale Einstellungen dieser Lerneinheit
   ---------------------------------------------------------------------
   Das ist die erste Datei, die du für eine neue Einheit anpasst.
   Alles Weitere steckt in:
     assets/js/quelle.js            – der Quellentext
     assets/js/seiten.js            – die Lernschritte und Aufgaben
     assets/js/tafelbild_inhalt.js  – das interaktive Schaubild (optional)
     assets/js/supabase_config.js   – Zugang zur Datenbank

   WICHTIG — "id" und "speicherSchluessel":
   Mehrere Einheiten unter derselben GitHub-Pages-Adresse teilen sich den
   lokalen Speicher des Browsers. Vergib deshalb für JEDE Einheit eigene,
   unverwechselbare Werte, sonst überschreiben sich die Arbeitsstände
   deiner Schülerinnen und Schüler gegenseitig.
   ===================================================================== */
window.EINHEIT = {

  /* Kennung der Einheit in der Datenbank. Kleinschreibung, keine Leerzeichen.
     Die Lehrkräfteansicht zeigt nur Abgaben mit genau dieser Kennung. */
  id: "beispiel",

  /* Eigener Schlüssel für die lokale Speicherung auf dem Schülergerät. */
  speicherSchluessel: "lerneinheit-beispiel.v1",

  /* Überschriften */
  titel:       "Freiheit und Regeln",
  untertitel:  "Eine Beispieleinheit zum Anpassen",
  kopfMarke:   "Freiheit und Regeln",
  kopfZusatz:  "Beispieleinheit – Sekundarstufe",

  /* Einleitung auf der Startseite */
  startHinweise: [
    "Lies zuerst den Quellenabschnitt, dann bearbeite die Aufgaben darunter.",
    "Der Text bleibt oben sichtbar und lässt sich ein- und ausklappen.",
    "Du kannst im Text markieren: Stelle auswählen, dann eine der vier Farben antippen.",
    "Dein Stand wird automatisch auf diesem Gerät gespeichert."
  ],

  /* Aufgaben-Ids, deren Antworten zusätzlich in der Spalte "recherche"
     gesichert werden sollen. Leer lassen, wenn du das nicht brauchst. */
  rechercheAufgaben: [],

  /* Aufgaben-Id, deren Antwort zusätzlich in der Spalte "urteil" landet.
     null, wenn du das nicht brauchst. */
  urteilAufgabe: null
};
