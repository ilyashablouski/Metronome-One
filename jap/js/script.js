/**
 * Define variables
 */
const mainNode = document.querySelector('.is-app-theme');
const mainModalNode = document.getElementById('modal-container');
const modalNodeOther = document.querySelector('.we-modal-1');
const modalNodeUpdate = document.querySelector('.we-modal-2');
const modalUpLeft = document.querySelector('.upLeftModal');
const modalDownLeft = document.querySelector('.downLeftModal');
const modalUpRight = document.querySelector('.upRightModal');
const modalDownRight = document.querySelector('.downRightModal');


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
  Show second modal node's definition
 */
function showModalUpLeft() {
  event.preventDefault();
  document.body.classList.add('overflow-hidden');
  modalUpLeft.classList.remove('modal-container_close');
}

/**
  Show second modal node's definition
 */
function showModalDownLeft() {
  event.preventDefault();
  document.body.classList.add('overflow-hidden');
  modalDownLeft.classList.remove('modal-container_close');
}

/**
  Show second modal node's definition
 */
function showModalUpRight() {
  event.preventDefault();
  document.body.classList.add('overflow-hidden');
  modalUpRight.classList.remove('modal-container_close');
}

/**
  Show second modal node's definition
 */
function showModalDownRight() {
  event.preventDefault();
  document.body.classList.add('overflow-hidden');
  modalDownRight.classList.remove('modal-container_close');
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
  window.addEventListener('scroll', function () {
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
    } else if (target.classList.contains('upLeftButton')) {
      showModalUpLeft();
    } else if (target.classList.contains('downLeftButton')) {
      showModalDownLeft();
    } else if (target.classList.contains('upRightButton')) {
      showModalUpRight();
    } else if (target.classList.contains('downRightButton')) {
      showModalDownRight();
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