// Homepage gallery card: three panels, each independently crossfading
// to a random Overland photo at randomised intervals.
(function() {
  var card = document.querySelector('[data-gallery-card]');
  if (!card) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var pool;
  try {
    pool = JSON.parse(card.getAttribute('data-pool'));
  } catch (e) {
    return;
  }
  if (!pool || pool.length < 3) return;

  var base = card.getAttribute('data-base');
  var panels = card.querySelectorAll('.gallery-card__panel');

  // Filenames currently on screen — never show the same photo twice at once.
  var showing = [];

  function pickName() {
    var name;
    do {
      name = pool[Math.floor(Math.random() * pool.length)];
    } while (showing.indexOf(name) !== -1);
    return name;
  }

  function makeLayer(name) {
    var img = document.createElement('img');
    img.className = 'gallery-card__img';
    img.alt = '';
    img.decoding = 'async';
    img.src = base + name;
    return img;
  }

  // Seed each panel with a starting photo.
  panels.forEach(function(panel, i) {
    var name = pickName();
    showing[i] = name;
    var img = makeLayer(name);
    img.classList.add('is-visible');
    panel.appendChild(img);
  });

  if (reduced) return; // static three-photo card, no swapping

  function swap(panel, i) {
    var name = pickName();
    var next = makeLayer(name);

    var outgoing = panel.querySelector('.gallery-card__img.is-visible');

    var reveal = function() {
      showing[i] = name;
      panel.appendChild(next);
      // Force a reflow so the opacity transition actually runs.
      void next.offsetWidth;
      next.classList.add('is-visible');

      if (outgoing) {
        outgoing.classList.remove('is-visible');
        setTimeout(function() {
          if (outgoing.parentNode) outgoing.parentNode.removeChild(outgoing);
        }, 1600);
      }
      schedule(panel, i);
    };

    // Only crossfade once the new photo has loaded — no flash of blank.
    // Guarded so a stalled request can never leave a panel stuck forever.
    var settled = false;
    var once = function(fn) {
      return function() {
        if (settled) return;
        settled = true;
        fn();
      };
    };
    next.onload = once(reveal);
    next.onerror = once(function() { schedule(panel, i); });
    setTimeout(once(function() { schedule(panel, i); }), 8000);
    if (next.complete) next.onload();
  }

  function schedule(panel, i) {
    // Randomised so the three panels drift out of sync with each other.
    var delay = 5000 + Math.random() * 6000;
    setTimeout(function() {
      // Don't churn through images while the tab is hidden.
      if (document.hidden) {
        schedule(panel, i);
        return;
      }
      swap(panel, i);
    }, delay);
  }

  panels.forEach(function(panel, i) {
    // Stagger the first swap so they never move in lockstep.
    setTimeout(function() { schedule(panel, i); }, i * 1400);
  });
})();
