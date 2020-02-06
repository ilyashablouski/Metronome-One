/**
 * Define variables
 */
const stickNode = document.getElementById('localnav');


/**
 * Add styles to nav with scroll
 */
function ready() {
  window.addEventListener('scroll', function() {
    if (window.pageYOffset >= 44) {
      stickNode.classList.add('localnav-sticking');
    } else {
      stickNode.classList.remove('localnav-sticking');
    }
  });
}

/**
 * Events
 */
document.addEventListener('DOMContentLoaded', ready);
