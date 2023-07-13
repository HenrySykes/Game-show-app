// Get the element with the ID of qwerty and save it to a variable.

const qwerty   = document.getElementById('qwerty');

// Get the element with the ID of phrase and save it to a variable.

const phrase = document.getElementById('phrase');

// Create a missed variable, initialized to 0, that you’ll use later to 
// keep track of the number of guesses the player has missed (remember, if 
// the player guesses wrong 5 times, they lose the game)




// Attach an event listener to the “Start Game” button to hide the start screen overlay.
const btnReset = document.querySelector('.btn__reset')

btnReset.addEventListener('click', (event) => {
    const startOverlay = event.target.parentNode;
    if (startOverlay.className === 'start'){
    startOverlay.style.display = 'none';  
    }       
});


// Create a phrases array that contains at least 5 different phrases as strings.