
const typingText = document.getElementById('typing-text');
const textToType = ['Omeji Mustapha','A Front-End Web Developer' ];
let currentText = 0;
let currentChar = 0;

function typeText() {
  if (currentChar < textToType[currentText].length) {
    typingText.textContent = textToType[currentText].slice(0, currentChar + 1);
    currentChar++;
    setTimeout(typeText, 50); // adjust the speed here
  } else {
    setTimeout(() => {
      currentText = (currentText + 1) % textToType.length;
      currentChar = 0;
      typeText();
    }, 2500); // adjust the delay between texts here
  }
}

typeText();