/* Interaktives Tafelbild: Bausteine per Tippen oder Ziehen einordnen.
   Die Verbindungslinien werden aus den Feldpositionen berechnet. */
(function () {
  "use strict";

  /* Inhalt kommt aus tafelbild_inhalt.js */
  var INHALT  = window.TAFEL_INHALT || {};
  var FELDER    = INHALT.felder    || [];
  var BAUSTEINE = INHALT.bausteine || [];
  var LINIEN    = INHALT.linien    || [];
  var HINWEISE  = INHALT.hinweise  || {};

  function baustein(bid) {
    for (var i = 0; i < BAUSTEINE.length; i++) if (BAUSTEINE[i].id === bid) return BAUSTEINE[i];
    return null;
  }

  /* Schnittpunkt der Verbindungsstrecke mit dem Rand des Feldes */
  function rand(r, zx, zy) {
    var cx = r.x + r.w / 2, cy = r.y + r.h / 2;
    var dx = zx - cx, dy = zy - cy;
    if (!dx && !dy) return { x: cx, y: cy };
    var tx = dx ? (r.w / 2) / Math.abs(dx) : Infinity;
    var ty = dy ? (r.h / 2) / Math.abs(dy) : Infinity;
    var t = Math.min(tx, ty);
    return { x: cx + dx * t, y: cy + dy * t };
  }

  function montieren(ziel, state, beiAenderung, nurAnzeige) {
    if (!state.tafelbild) state.tafelbild = {};
    var gewaehlt = null;

    ziel.innerHTML =
      '<div class="tafel-huelle">' +
        '<div class="tafel' + (nurAnzeige ? " tafel-statisch" : "") + '">' +
          '<svg class="linien" aria-hidden="true"><defs>' +
            '<marker id="pf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">' +
              '<path d="M0,0 L10,5 L0,10 z" fill="#3a5878"></path></marker>' +
          "</defs></svg>" +
          FELDER.map(function (f) {
            return '<div class="slot ' + f.klasse + '" data-feld="' + f.id + '"></div>';
          }).join("") +
        "</div>" +
        (nurAnzeige ? "" :
          '<div class="tafel-vorrat" data-rolle="vorrat"></div>' +
          '<div class="knopfzeile"><button type="button" class="knopf stumm klein" data-rolle="leeren">Tafelbild leeren</button>' +
          '<span class="zusatz" data-rolle="status" style="margin:0"></span></div>') +
      "</div>";

    var tafel  = ziel.querySelector(".tafel");
    var svg    = ziel.querySelector("svg.linien");
    var vorrat = ziel.querySelector('[data-rolle="vorrat"]');
    var status = ziel.querySelector('[data-rolle="status"]');

    function zeichnen() {
      var basis = tafel.getBoundingClientRect();
      var pos = {};
      Array.prototype.forEach.call(tafel.querySelectorAll(".slot"), function (el) {
        var r = el.getBoundingClientRect();
        pos[el.dataset.feld] = { x: r.left - basis.left, y: r.top - basis.top, w: r.width, h: r.height };
      });
      svg.setAttribute("viewBox", "0 0 " + Math.round(basis.width) + " " + Math.round(basis.height));
      var inhalt = svg.querySelector("defs").outerHTML;
      LINIEN.forEach(function (l) {
        var a = pos[l.von], b = pos[l.nach];
        if (!a || !b) return;
        var p1 = rand(a, b.x + b.w / 2, b.y + b.h / 2);
        var p2 = rand(b, a.x + a.w / 2, a.y + a.h / 2);
        inhalt += '<line x1="' + p1.x.toFixed(1) + '" y1="' + p1.y.toFixed(1) +
                  '" x2="' + p2.x.toFixed(1) + '" y2="' + p2.y.toFixed(1) +
                  '" stroke="#3a5878" stroke-width="' + (l.fein ? 1 : 1.6) +
                  '" opacity="' + (l.fein ? .45 : .8) + '"' +
                  (l.pfeil ? ' marker-end="url(#pf)"' : "") + "></line>";
      });
      svg.innerHTML = inhalt;
    }

    function malen() {
      Array.prototype.forEach.call(tafel.querySelectorAll(".slot"), function (el) {
        var bid = state.tafelbild[el.dataset.feld];
        var b = bid ? baustein(bid) : null;
        if (b) {
          el.classList.add("voll");
          el.innerHTML = window.Leser.esc(b.text) +
            (nurAnzeige ? "" : '<button type="button" class="weg" data-weg="' + el.dataset.feld +
             '" aria-label="Baustein entfernen">×</button>');
        } else {
          el.classList.remove("voll");
          el.innerHTML = '<span class="leer">hier einordnen</span>';
        }
      });
      if (vorrat) {
        var benutzt = Object.keys(state.tafelbild).map(function (k) { return state.tafelbild[k]; });
        vorrat.innerHTML = BAUSTEINE.filter(function (b) { return benutzt.indexOf(b.id) < 0; })
          .map(function (b) {
            return '<button type="button" class="baustein' + (gewaehlt === b.id ? " gewaehlt" : "") +
                   '" data-baustein="' + b.id + '">' + window.Leser.esc(b.text) + "</button>";
          }).join("") || '<span class="zusatz" style="margin:0">Alle Bausteine sind eingeordnet.</span>';
      }
      if (status) {
        var offen = FELDER.filter(function (f) { return !state.tafelbild[f.id]; }).length;
        status.textContent = offen ? offen + " von " + FELDER.length + " Feldern sind noch leer."
                                   : "Alle Felder sind belegt.";
      }
      requestAnimationFrame(zeichnen);
    }

    function setzen(feldId, bid) {
      Object.keys(state.tafelbild).forEach(function (k) {
        if (state.tafelbild[k] === bid) delete state.tafelbild[k];
      });
      state.tafelbild[feldId] = bid;
      gewaehlt = null;
      malen();
      beiAenderung && beiAenderung();
    }

    if (!nurAnzeige) {
      ziel.addEventListener("click", function (ev) {
        var weg = ev.target.closest("[data-weg]");
        if (weg) {
          ev.stopPropagation();
          delete state.tafelbild[weg.dataset.weg];
          malen(); beiAenderung && beiAenderung();
          return;
        }
        var bs = ev.target.closest("[data-baustein]");
        if (bs) { gewaehlt = (gewaehlt === bs.dataset.baustein) ? null : bs.dataset.baustein; malen(); return; }
        var slot = ev.target.closest(".slot");
        if (slot) {
          if (gewaehlt) { setzen(slot.dataset.feld, gewaehlt); }
          else if (state.tafelbild[slot.dataset.feld]) {
            gewaehlt = state.tafelbild[slot.dataset.feld];
            delete state.tafelbild[slot.dataset.feld];
            malen(); beiAenderung && beiAenderung();
          }
        }
      });

      /* Ziehen (Pointer Events – funktioniert mit Finger, Pencil und Maus) */
      ziel.addEventListener("pointerdown", function (ev) {
        var bs = ev.target.closest("[data-baustein]");
        if (!bs) return;
        var startX = ev.clientX, startY = ev.clientY, geist = null, aktiv = false;
        var bid = bs.dataset.baustein;

        function bewegen(e) {
          if (!aktiv && Math.abs(e.clientX - startX) + Math.abs(e.clientY - startY) < 8) return;
          if (!aktiv) {
            aktiv = true;
            bs.classList.add("geist");
            geist = bs.cloneNode(true);
            geist.className = "baustein zieh-geist";
            document.body.appendChild(geist);
          }
          geist.style.left = e.clientX + "px";
          geist.style.top = e.clientY + "px";
          geist.hidden = true;
          var unten = document.elementFromPoint(e.clientX, e.clientY);
          geist.hidden = false;
          Array.prototype.forEach.call(tafel.querySelectorAll(".slot"), function (s) { s.classList.remove("ziel"); });
          var slot = unten && unten.closest ? unten.closest(".slot") : null;
          if (slot) slot.classList.add("ziel");
        }
        function loslassen(e) {
          window.removeEventListener("pointermove", bewegen);
          window.removeEventListener("pointerup", loslassen);
          window.removeEventListener("pointercancel", loslassen);
          Array.prototype.forEach.call(tafel.querySelectorAll(".slot"), function (s) { s.classList.remove("ziel"); });
          if (!aktiv) return;
          if (geist) { geist.hidden = true; }
          var unten = document.elementFromPoint(e.clientX, e.clientY);
          if (geist) geist.remove();
          bs.classList.remove("geist");
          var slot = unten && unten.closest ? unten.closest(".slot") : null;
          if (slot) setzen(slot.dataset.feld, bid);
          else malen();
        }
        window.addEventListener("pointermove", bewegen);
        window.addEventListener("pointerup", loslassen);
        window.addEventListener("pointercancel", loslassen);
      });

      ziel.addEventListener("click", function (ev) {
        var l = ev.target.closest('[data-rolle="leeren"]');
        if (!l) return;
        if (!window.confirm("Alle eingeordneten Bausteine wieder in den Vorrat zurücklegen?")) return;
        state.tafelbild = {}; gewaehlt = null; malen(); beiAenderung && beiAenderung();
      });
    }

    window.addEventListener("resize", zeichnen);
    malen();
    return { malen: malen, zeichnen: zeichnen };
  }

  /* Prüfung mit gestuften Hinweisen – ohne Lösungsverrat */
  function pruefen(state) {
    if (!FELDER.length) return [];
    var t = state.tafelbild || {};

    var leer = FELDER.filter(function (f) { return !t[f.id]; });
    if (leer.length) {
      var vorlage = HINWEISE.leer ||
        "Es {ist_sind} noch {anzahl} {feld} leer.";
      return [vorlage
        .replace("{ist_sind}", leer.length === 1 ? "ist" : "sind")
        .replace("{anzahl}", leer.length)
        .replace("{feld}", leer.length === 1 ? "Feld" : "Felder")];
    }

    var fehler = [];
    var ablenker = FELDER.filter(function (f) {
      var b = baustein(t[f.id]);
      return b && !b.feld;
    });
    if (ablenker.length) {
      fehler.push(HINWEISE.ablenker ||
        "Mindestens ein eingeordneter Baustein gehört nicht ins Bild.");
    }

    var falsch = FELDER.filter(function (f) {
      var b = baustein(t[f.id]);
      return !b || b.feld !== f.id;
    });
    if (falsch.length && !ablenker.length) {
      fehler.push(HINWEISE.falsch ||
        "Die Zuordnung stimmt noch nicht überall. Lies den Text erneut.");
    }
    return fehler;
  }

  window.Tafel = { montieren: montieren, pruefen: pruefen, FELDER: FELDER, BAUSTEINE: BAUSTEINE, baustein: baustein };
})();
