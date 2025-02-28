
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

         // Target number to count to
         const targetNumber = 10; // Desired number
         const duration = 4000; // Duration of the counter effect in milliseconds
         const counterElement = document.getElementById('counter');
         let hasCounted = false; // Flag to check if counting has started
 
         function animateCounter(start, end, duration) {
             const incrementTime = duration / end; // Time per increment
             let currentCount = start;
             const timer = setInterval(() => {
                 currentCount++;
                 counterElement.innerText = currentCount;
 
                 if (currentCount >= end) {
                     clearInterval(timer);
                 }
             }, incrementTime);
         }
 
         function startCounting(entries) {
             entries.forEach(entry => {
                 if (entry.isIntersecting && !hasCounted) {
                     hasCounted = true; // Prevents multiple counts
                     animateCounter(0, targetNumber, duration);
                 }
             });
         }
 
         // Options for the Intersection Observer
         const options = {
             root: null, // Use the viewport as the root
             rootMargin: '0px', // No margin around the root
             threshold: 0.5 // Trigger when 50% of the target is visible
         };
 
         // Create an Intersection Observer
         const observer = new IntersectionObserver(startCounting, options);
 
         // Observe the counter section
         observer.observe(document.getElementById('counterSection'));