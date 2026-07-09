/* Mithun Manjunath, portfolio. Bento grid interactions. Vanilla JS, no deps. */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* year */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  var cards = Array.prototype.slice.call(document.querySelectorAll(".grid .card"));

  /* staggered entrance */
  function reveal(list) {
    list.forEach(function (c, i) {
      c.classList.remove("in");
      c.style.transitionDelay = Math.min(i, 12) * 45 + "ms";
    });
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { list.forEach(function (c) { c.classList.add("in"); }); });
    });
  }
  reveal(cards);

  /* ── content-fit masonry: size each card's grid-row span to its own content ── */
  var grid = document.getElementById("grid");
  function masonry() {
    if (!grid) return;
    var ar = parseFloat(getComputedStyle(grid).gridAutoRows) || 2;
    cards.forEach(function (c) {
      if (c.classList.contains("hide")) { c.style.gridRowEnd = ""; return; }
      c.style.gridRowEnd = "span " + Math.ceil((c.offsetHeight + 16) / ar);
    });
  }
  masonry();
  requestAnimationFrame(masonry);
  window.addEventListener("load", masonry);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(masonry);
  if (grid) {
    grid.querySelectorAll("img").forEach(function (img) {
      if (!img.complete) img.addEventListener("load", masonry, { once: true });
    });
  }
  var rt;
  window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(masonry, 120); });

  /* ── filters ── */
  var filters = Array.prototype.slice.call(document.querySelectorAll(".filter"));
  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filters.forEach(function (b) { b.classList.toggle("active", b === btn); });
      var f = btn.getAttribute("data-filter");
      var shown = [];
      cards.forEach(function (c) {
        var match = f === "all" || c.getAttribute("data-cat") === f;
        c.classList.toggle("hide", !match);
        if (match) shown.push(c);
      });
      reveal(shown);
      masonry();
      requestAnimationFrame(masonry);
    });
  });

  /* ── résumé dropdown ── */
  var dd = document.getElementById("resumeDD");
  if (dd) {
    var ddBtn = dd.querySelector(".dd-btn");
    function closeDD() { dd.classList.remove("open"); ddBtn.setAttribute("aria-expanded", "false"); }
    ddBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = dd.classList.toggle("open");
      ddBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function (e) {
      if (!dd.contains(e.target)) closeDD();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeDD();
    });
  }

  /* ── modals ── */
  var root = document.getElementById("modalRoot");
  var modals = root ? Array.prototype.slice.call(root.querySelectorAll(".modal")) : [];
  var lastFocus = null;

  function openModal(id) {
    var m = document.getElementById(id);
    if (!m || !root) return;
    lastFocus = document.activeElement;
    root.classList.add("open");
    root.setAttribute("aria-hidden", "false");
    modals.forEach(function (x) { x.classList.toggle("open", x === m); });
    m.scrollTop = 0;
    document.body.style.overflow = "hidden";
    var x = m.querySelector(".modal-x"); if (x) x.focus();
  }
  function closeModal() {
    if (!root) return;
    root.classList.remove("open");
    root.setAttribute("aria-hidden", "true");
    modals.forEach(function (x) { x.classList.remove("open"); });
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.querySelectorAll("[data-modal]").forEach(function (card) {
    card.addEventListener("click", function () { openModal(card.getAttribute("data-modal")); });
  });
  if (root) {
    root.querySelectorAll("[data-close]").forEach(function (el) {
      el.addEventListener("click", closeModal);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && root && root.classList.contains("open")) closeModal();
  });

  /* tabs inside each modal */
  modals.forEach(function (m) {
    var tabs = m.querySelectorAll(".tab");
    var panels = m.querySelectorAll(".tab-panel");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var t = tab.getAttribute("data-tab");
        tabs.forEach(function (x) { x.classList.toggle("active", x === tab); });
        panels.forEach(function (p) { p.classList.toggle("active", p.getAttribute("data-panel") === t); });
      });
    });
  });

})();
