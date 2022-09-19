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

    console.log(target)
}
