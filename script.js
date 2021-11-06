'use strict';

const toggleRight = document.querySelector('.tog-right');
const toggleLeft = document.querySelector('.tog-left');
const john = document.querySelector('.john');
const tanya = document.querySelector('.tanya');

//ids
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const owner1 = document.getElementById('owner1');
const owner2 = document.getElementById('owner2');

const toggleRighty = function () {
  if (john.classList.contains('hidden')) {
    john.classList.remove('hidden');
    text2.classList.remove('hidden');
    owner2.classList.remove('hidden');
    tanya.classList.add('hidden');
    text1.classList.add('hidden');
    owner1.classList.add('hidden');
  }
};

const toggleLefty = function () {
  if (tanya.classList.contains('hidden')) {
    tanya.classList.remove('hidden');
    text1.classList.remove('hidden');
    owner1.classList.remove('hidden');
    john.classList.add('hidden');
    text2.classList.add('hidden');
    owner2.classList.add('hidden');
  }
};

toggleRight.addEventListener('click', toggleRighty);
toggleLeft.addEventListener('click', toggleLefty);
