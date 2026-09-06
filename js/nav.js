// Mobile navigation toggle
(function() {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function() {
    var isOpen = nav.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked
  var links = nav.querySelectorAll('.nav-links a');
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      nav.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu on escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && nav.classList.contains('nav-open')) {
      nav.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
