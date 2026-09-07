// Elizabeth Machado — Portfolio
// Theme toggle (persisted per-browser) + footer year.

(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var STORAGE_KEY = 'em-portfolio-theme';

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      toggle.setAttribute('aria-pressed', 'true');
      toggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
      root.removeAttribute('data-theme');
      toggle.setAttribute('aria-pressed', 'false');
      toggle.setAttribute('aria-label', 'Switch to dark mode');
    }
  }

  // Restore saved preference, falling back to the visitor's OS setting.
  var saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    // localStorage unavailable (private browsing, etc.) — fall back silently.
  }

  if (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    saved = 'dark';
  }
  applyTheme(saved);

  toggle.addEventListener('click', function () {
    var isDark = root.getAttribute('data-theme') === 'dark';
    var next = isDark ? 'light' : 'dark';
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // ignore — theme just won't persist across visits
    }
  });

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // On touch devices there's no hover, so the project circles can't reveal
  // their name that way. First tap flips the card to show the name;
  // tapping the same card again (or its "open" reach) follows the link.
  // Tapping elsewhere un-flips whatever was open.
  var isTouch = window.matchMedia && window.matchMedia('(hover: none)').matches;
  if (isTouch) {
    var cards = document.querySelectorAll('.project-card');
    cards.forEach(function (card) {
      var href = card.getAttribute('href');
      var hasRealLink = href && href !== '#';
      card.addEventListener('click', function (e) {
        // Cards with no real destination yet (href="#") should never
        // navigate — tapping just flips/unflips them in place, since
        // following "#" would jump the whole page back to the top.
        if (!hasRealLink) {
          e.preventDefault();
          var wasFlipped = card.classList.contains('is-flipped');
          cards.forEach(function (c) { c.classList.remove('is-flipped'); });
          if (!wasFlipped) card.classList.add('is-flipped');
          return;
        }
        if (!card.classList.contains('is-flipped')) {
          e.preventDefault();
          cards.forEach(function (c) { c.classList.remove('is-flipped'); });
          card.classList.add('is-flipped');
        }
      });
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.project-card')) {
        cards.forEach(function (c) { c.classList.remove('is-flipped'); });
      }
    });
  }
})();
