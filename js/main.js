// The Handy Home - site interactions
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      var expanded = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  }

  // Footer year
  var yearEls = document.querySelectorAll("[data-year]");
  var thisYear = new Date().getFullYear();
  yearEls.forEach(function (el) { el.textContent = thisYear; });

  // Newsletter + contact forms: local success message only (no backend)
  function wireForm(formId, successId) {
    var form = document.getElementById(formId);
    var success = document.getElementById(successId);
    if (!form || !success) { return; }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.querySelector('input[type="email"]');
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        email.focus();
        email.style.borderColor = "#dc2626";
        return;
      }
      form.style.display = "none";
      success.classList.add("show");
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  wireForm("newsletter-form", "newsletter-success");
  wireForm("contact-form", "contact-success");
})();
