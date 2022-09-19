const colors_array = ['blue', 'green', 'black','gray',
'purple','red','orange'];

// declaring the function id that will be used when the button is clicked'
function gameStart(){
    let guess = "";
    let correct = false;
    // declaring target index that will be called in the target function. Returning a random color
    const targetIndex = Math.floor(Math.random() * colors_array.length());
    // declaring the target variable which will be a random color I think
    const target = colors_array[targetIndex];

    console.log(target);
    do {
        guess = prompt('I am thinking of one of these colors:\n\n' + colors_array + '\n\nWhat  color am I thinking og? \n');

        if (guess === null) {
            alert('Game  is aborted')
            return;
            let correct = checkGuess(guess, target);
        }
        correct = checkGuess(guess, target)
    }
    while (!correct)
    alert('congrats! You are a good guesser')
}
function checkGuess(guess, target) {
    const sorryMessage = 'Sorry! Incorrect!'
    const tryMessage = 'Try again'
    let correct = false;

    if (!colors_array.includes(guess)) {
        alert('That is not an option')
    } else if (guess > target){
        alert('The answer is lower in the array')
    } else if (guess < target) {
        alert ('The answer is higher in the array,')
    } else {
            correct = true;
        }
    
    return correct;
}


     