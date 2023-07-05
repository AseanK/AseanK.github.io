function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function addFadeInToCard(card, delay) {
  setTimeout(function() {
    if (isInViewport(card)) {
      card.classList.add('visible');
    //   card.stlye.opacity = '1'
    }
    else
      card.classList.remove('visible');
  }, delay);
}

var cards = document.querySelectorAll('.card');

// addFadeInToCard(cards[0], 0);

// for (var i = 1; i < cards.length; i++) {
//   var delay = i * 500;
//   addFadeInToCard(cards[i], delay);
// }

// Check each card's visibility on scroll
document.addEventListener('scroll', function() {
  cards.forEach(function(card) {
    for (var i = 1; i < cards.length; i++) {
        var delay = i * 500;
        addFadeInToCard(card, delay);
      }
  });
});
