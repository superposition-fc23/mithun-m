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
    });
  });

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

  /* ── slow mode: inertia (lerp) wheel scrolling ── */
  var toggle = document.getElementById("modeToggle");
  var active = false, raf = null, current = window.scrollY, target = window.scrollY;
  function tick() {
    var d = target - current;
    if (Math.abs(d) < 0.5) { current = target; window.scrollTo(0, Math.round(current)); raf = null; return; }
    current += d * 0.09; window.scrollTo(0, current); raf = requestAnimationFrame(tick);
  }
  function onWheel(e) {
    if (e.target.closest && e.target.closest(".modal")) return; /* let modals scroll natively */
    e.preventDefault();
    var delta = e.deltaY; if (e.deltaMode === 1) delta *= 40; else if (e.deltaMode === 2) delta *= innerHeight;
    var max = document.documentElement.scrollHeight - innerHeight;
    target = Math.max(0, Math.min(target + delta, max));
    if (!raf) raf = requestAnimationFrame(tick);
  }
  window.addEventListener("scroll", function () { if (!raf) { current = target = window.scrollY; } }, { passive: true });
  if (toggle && !prefersReduced) {
    toggle.addEventListener("click", function () {
      active = !active;
      toggle.setAttribute("aria-pressed", active ? "true" : "false");
      if (active) { current = target = window.scrollY; window.addEventListener("wheel", onWheel, { passive: false }); }
      else { window.removeEventListener("wheel", onWheel); if (raf) { cancelAnimationFrame(raf); raf = null; } }
    });
  } else if (toggle) {
    toggle.style.display = "none";
  }
})();
