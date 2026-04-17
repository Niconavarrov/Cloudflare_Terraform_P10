(function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav");
  var mobileHost = document.getElementById("nav-mobile");

  if (toggle && nav && mobileHost) {
    var clone = nav.cloneNode(true);
    clone.classList.remove("nav");
    clone.classList.add("nav-mobile__links");
    clone.removeAttribute("aria-label");
    mobileHost.appendChild(clone);

    toggle.addEventListener("click", function () {
      var open = mobileHost.hasAttribute("hidden");
      mobileHost.hidden = !open;
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });

    mobileHost.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        mobileHost.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menú");
      }
    });
  }

  var prefersReduced =
    typeof matchMedia !== "undefined" &&
    matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReduced && "IntersectionObserver" in window) {
    var reveals = document.querySelectorAll(".reveal");
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.08 }
    );
    reveals.forEach(function (el) {
      obs.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
