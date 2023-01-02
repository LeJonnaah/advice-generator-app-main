'use strict'

// 1. Variables

const titleAdviceGenerator = document.querySelector('.generator__title');
const buttonAdviceGenerator = document.querySelector('.generator__button');
const containerAdviceGenerator = document.querySelector('.generator__container');
const textAdviceGenerator = document.querySelector('.generator__text');
const numberAdviceGenerator = document.querySelector('.generator__number');

// 2. Functions

function getRandomAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const advice = data.slip.advice;
            const number = data.slip.id;
            textAdviceGenerator.innerHTML = `"${advice}"`;
            numberAdviceGenerator.innerHTML = 'Advice #' + number;
        });
}

// 3. Events

buttonAdviceGenerator.addEventListener('click', getRandomAdvice);