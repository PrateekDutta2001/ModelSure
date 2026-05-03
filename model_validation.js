(function () {
  "use strict";

  function initTocActiveState() {
    var links = document.querySelectorAll('.toc-pills a[href^="#"]');
    var sections = document.querySelectorAll('.content section[id]');
    if (!links.length || !sections.length) return;

    function setActive(id) {
      links.forEach(function (a) {
        a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
      });
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-12% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach(function (sec) {
      observer.observe(sec);
    });

    var first = sections[0];
    if (first && first.id) setActive(first.id);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTocActiveState);
  } else {
    initTocActiveState();
  }
})();
