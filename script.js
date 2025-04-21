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

// Project Navigation (Carousel Effect)
const projectContainers = document.querySelectorAll('.project-container');
const leftArrows = document.querySelectorAll('.left-arrow');
const rightArrows = document.querySelectorAll('.right-arrow');

projectContainers.forEach((container, index) => {
    let scrollAmount = 0;

    function moveLeft() {
        scrollAmount -= 300;
        if (scrollAmount < 0) {
            scrollAmount = 0;
        }
        container.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    function moveRight() {
        const maxScroll = container.scrollWidth - container.clientWidth;
        scrollAmount += 300;
        if (scrollAmount > maxScroll) {
            scrollAmount = maxScroll;
        }
        container.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    leftArrows[index].addEventListener('click', moveLeft);
    rightArrows[index].addEventListener('click', moveRight);
});
