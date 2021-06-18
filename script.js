'use strict';


const btnsShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const countryHolder = document.querySelector('#countryHolder');
const submitBtn = document.querySelector('.submit-btn');
const countrySelector = document.querySelector('#country');

//this function is to show the modal
let openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}

//this function is to close the modal
let closeModalFunction = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

}



for (let i = 0; i < btnsShowModal.length; i++)
    btnsShowModal[i].addEventListener('click', openModal)


closeModal.addEventListener('click', closeModalFunction)

overlay.addEventListener('click', closeModalFunction)



document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModalFunction();
    }
});

// video number 4
submitBtn.addEventListener('click', function () {
    countryHolder.textContent = countrySelector.value;
    closeModalFunction();
})