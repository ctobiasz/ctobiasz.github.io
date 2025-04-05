let currentRotation = 0;
const hex = document.querySelector('.rotating-hex');

setInterval(() => {
    currentRotation += 180;
    hex.style.transform = `rotate(${currentRotation}deg)`;
}, 10000);