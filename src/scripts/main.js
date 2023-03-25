'use strict';


const swiper = new Swiper('.slider1', {
  direction: 'vertical',

  mousewheel: {
    releaseOnEdges: true,
    forceToAxis: true,
  },

  on: {
    slideChange: function() {
      setTimeout(function() {
        swiper.params.mousewheel.releaseOnEdges = false;
      }, 500);
    },

    reachEnd: function() {
      setTimeout(function() {
        swiper.params.mousewheel.releaseOnEdges = true;
      }, 750);
    },

    reachBeginning: function() {
      setTimeout(function() {
        swiper.params.mousewheel.releaseOnEdges = true;
      }, 750);
    },
  },

  touchReleaseOnEdges: true,

  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
});

// eslint-disable-next-line no-undef, no-unused-vars
const swiper2 = new Swiper('.slider2', {

  navigation: {
    nextEl: '.features__swiper-button-next',
    prevEl: '.features__swiper-button-prev',
  },

  loop: true,

  pagination: {
    el: '.features__swiper-pagination',
    type: 'fraction',
  },
});

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__field');

function handler(event) {
  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const input1 = document.querySelector('#one');
const input2 = document.querySelector('#two');
const btn = document.querySelector('#button');

input1.addEventListener('input', validate);
input2.addEventListener('input', validate);

function validate() {
  if (input1.value === '' || input2.value === '') {
    btn.setAttribute('disabled', 'disabled');
  } else {
    btn.removeAttribute('disabled');
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});

