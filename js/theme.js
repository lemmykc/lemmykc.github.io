// Dark/light mode toggle with localStorage persistence
(function() {
  var toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', function() {
    var current = document.documentElement.getAttribute('data-theme');
    var isDark;

    if (current === 'dark') {
      isDark = false;
    } else if (current === 'light') {
      isDark = true;
    } else {
      // No explicit theme set — check system preference
      isDark = !window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    var newTheme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
})();
