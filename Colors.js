// The color generator
const colors = colorGenerator(6);
// The selectors
const square = document.querySelectorAll(".square");
const displayColor = colorPicker();
const message = document.getElementById("message");
const picker = document.getElementById("picker");
const h1 = document.querySelector("h1");
const stripe = document.getElementById("stripe");
const isOver = true;

// No longer hard coded, picked by a function at the bottom of the code
const correct = colorPicker();

// Sets the span to show the correct variable's RBG value
// displayColor.textContent = correct;
picker.textContent = correct;
// Loops through all of the squares and gives them a different color
for(var i = 0; i < square.length; i++){
    
    square[i].style.backgroundColor = colors[i];
    
    // Makes all of the squares clickable colors
    square[i].addEventListener("click", function(){
        // Tests to see if squares are clickable
        const clicked = this.style.backgroundColor;
        
        // Checks if the right answer was clicked
        if(clicked === correct){
            message.textContent = "Correct!";
            h1.style.backgroundColor = correct;
            stripe.style.backgroundColor = correct;
            colorChange(clicked);
            console.log(clicked);
        }else{
            this.style.backgroundColor = "#232323";
            message.textContent = "Try again!";
            console.log(clicked);
        }
    });
};

// Changes all squares to the color of the correct square
function colorChange(color){
    for(var i = 0; i < square.length; i++){
        square[i].style.background = correct;
        this.backgroundColor = correct;
    }
};

function colorPicker(){
    const rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
};

function colorGenerator(num){
    // The array to be filled
    const arr = [];
    // The array will be filled num times
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    };

    return arr;
};

function randomColor(){
    
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g  + ", " + b + ")";
};

console.log(correct);