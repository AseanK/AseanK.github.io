var cards = document.querySelectorAll('.card');

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Check each card's visibility on scroll
document.addEventListener('scroll', function() {
  cards.forEach(card => {
    if (isInViewport(card)) {
      card.classList.add('visible');
    } else {
      card.classList.remove('visible');
    }
  });
});
