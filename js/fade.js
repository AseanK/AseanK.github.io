var cards = document.querySelectorAll('.card');

function isInViewport(element) {
  var face1 = element.querySelector('.face1'); // Get the face1 element inside the card
  var rect = face1.getBoundingClientRect(); // Use the face1 element's bounding rectangle
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
