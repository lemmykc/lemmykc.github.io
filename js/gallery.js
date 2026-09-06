// Gallery: shuffle on load + lightbox
(function() {
  var grid = document.querySelector('.gallery-grid');
  if (!grid) return;

  var items = Array.from(grid.querySelectorAll('.gallery-item'));

  // Fisher-Yates shuffle
  for (var i = items.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    grid.appendChild(items[j]);
    // Swap in array to maintain correct references
    var temp = items[i];
    items[i] = items[j];
    items[j] = temp;
  }

  // Lightbox
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = lightbox.querySelector('.lightbox-img');
  var closeBtn = lightbox.querySelector('.lightbox-close');
  var prevBtn = lightbox.querySelector('.lightbox-prev');
  var nextBtn = lightbox.querySelector('.lightbox-next');
  var currentIndex = 0;

  // Get shuffled items (current DOM order)
  function getItems() {
    return Array.from(grid.querySelectorAll('.gallery-item'));
  }

  function openLightbox(index) {
    var allItems = getItems();
    currentIndex = index;
    var img = allItems[currentIndex].querySelector('img');
    lightboxImg.src = img.getAttribute('data-full') || img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  function navigate(direction) {
    var allItems = getItems();
    currentIndex = (currentIndex + direction + allItems.length) % allItems.length;
    var img = allItems[currentIndex].querySelector('img');
    lightboxImg.src = img.getAttribute('data-full') || img.src;
    lightboxImg.alt = img.alt;
  }

  // Click handlers for gallery items
  items.forEach(function(item, i) {
    item.addEventListener('click', function() {
      // Find current index in DOM order (after shuffle)
      var allItems = getItems();
      var idx = allItems.indexOf(item);
      openLightbox(idx >= 0 ? idx : 0);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', function() { navigate(-1); });
  nextBtn.addEventListener('click', function() { navigate(1); });

  // Click overlay background to close
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('open')) return;

    switch(e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        navigate(-1);
        break;
      case 'ArrowRight':
        navigate(1);
        break;
    }
  });
})();
