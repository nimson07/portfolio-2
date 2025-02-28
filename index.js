
// const words = ["A Web Developer", "A Materials Scientist."];
// let i = 0;
// let j = 0;
// let currentWord = "";
// let isDeleting = false;

// function type() {
//   currentWord = words[i];
//   if (isDeleting) {
//     document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
//     j--;
//     if (j == 0) {
//       isDeleting = false;
//       i++;
//       if (i == words.length) {
//         i = 0;
//       }
//     }
//   } else {
//     document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
//     j++;
//     if (j == currentWord.length) {
//       isDeleting = true;
//     }
//   }
//   setTimeout(type, 100);
// }

// type();

const typingElement = document.getElementById('typing');
const bracketLeft = document.getElementById('bracket-left');
const bracketRight = document.getElementById('bracket-right');
const cursorBlink = document.getElementById('cursor-blink');

const text = " Hi, I am Nimdie Jackson.";
let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100); // Adjust typing speed here
    } else {
        // Show the blinking cursor after typing is done
        startCursorBlink();
    }
}

function blinkCursor(element, times, delay) {
    let count = 0;
    const interval = setInterval(() => {
        element.classList.toggle('hidden');
        count++;
        if (count === times * 2) {
            clearInterval(interval);
        }
    }, delay);
}

function startCursorBlink() {
    cursorBlink.classList.remove('hidden');
    blinkCursor(cursorBlink, 1, 300); // Blink cursor twice after typing
}

// Begin the animation
blinkCursor(bracketLeft, 3, 300); // Blink cursor for the left bracket
setTimeout(() => {
    bracketLeft.textContent = '{'; // Type the left bracket
    bracketLeft.classList.remove('cursor'); // Hide the cursor
    typingElement.classList.remove('hidden'); // Show typing element
    setTimeout(typeText, 600); // Start typing after blink
}, 1200); // Delay before showing the typing text

