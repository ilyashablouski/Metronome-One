/**
 * Define variables
 */
const mainNode = document.querySelector('.is-app-theme');
const mainModalNode = document.getElementById('modal-container');
const modalNodeOther = document.querySelector('.we-modal-1');
const modalNodeUpdate = document.querySelector('.we-modal-2');
// const modalCommonNode = document.querySelector('.we-modal');
// const closeModalButtons = document.querySelectorAll('.close-button');
const stickNode = document.getElementById('localnav');

/**
  Show first modal node's definition
 */
function showModalFirst() {
  event.preventDefault();
  document.body.classList.add('overflow-hidden');
  modalNodeOther.classList.remove('modal-container_close');
}

/**
  Show second modal node's definition
 */
function showModalSecond() {
  event.preventDefault();
  document.body.classList.add('overflow-hidden');
  modalNodeUpdate.classList.remove('modal-container_close');
}

/**
 * Close second modal node's definition
 *
 * @param {object} currentNode -текущий элемент
 */
function closeModal(currentNode) {
  event.preventDefault();
  document.body.classList.remove('overflow-hidden');
  currentNode.closest('.we-modal').classList.add('modal-container_close');
}

// DOM loaded
window.addEventListener('DOMContentLoaded', () => {
  /**
   * Add styles to nav with scroll
   */
  window.addEventListener('scroll', function() {
    if (window.pageYOffset >= 44) {
      stickNode.classList.add('localnav-sticking');
    } else {
      stickNode.classList.remove('localnav-sticking');
    }
  });

  /**
  Dilocation and call events
 */
  mainNode.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('button-modal-1')) {
      showModalFirst();
    } else if (target.classList.contains('button-modal-2')) {
      showModalSecond();
    } else {
      return;
    }
  });

  // Overlay close areas
  mainModalNode.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('close-button') ||
        target.classList.contains('overlay')) {
      closeModal(target);
    } else {
      return;
    }
  });
});
