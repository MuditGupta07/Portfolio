// Typewriter Effect
const typewriter = document.querySelector('.typewriter');
const textArray = ["Front-End Development", "Software Engineering", "Data Structures & Algorithms"];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        typewriter.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(() => {
            typewriter.textContent = "";
            charIndex = 0;
            textIndex = (textIndex + 1) % textArray.length;
            typeEffect();
        }, 2000);
    }
}
typeEffect();

// Project Navigation
const projectContainer = document.querySelector('.project-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let scrollAmount = 0;

function moveLeft() {
    projectContainer.scrollTo({
        top: 0,
        left: (scrollAmount -= 300),
        behavior: 'smooth'
    });
    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
}

function moveRight() {
    if (scrollAmount <= projectContainer.scrollWidth - projectContainer.clientWidth) {
        projectContainer.scrollTo({
            top: 0,
            left: (scrollAmount += 300),
            behavior: 'smooth'
        });
    }
}

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);