var numsquares = 6;
// The color generator
var colors = colorGenerator(numsquares);
// No longer hard coded, picked by a function at the bottom of the code
var correct = colorPicker();

// The selectors
const square = document.querySelectorAll(".square");
const displayColor = colorPicker();
const message = document.getElementById("message");
const picker = document.getElementById("picker");
const h1 = document.querySelector("h1");
const stripe = document.getElementById("stripe");
const instructions = document.getElementById("instructions");
const reset = document.getElementById("new");
var mode = document.querySelectorAll(".mode");

init();

// Which mode to toggle on and off. 
function select(){
    mode[1].classList.toggle("selected");
    mode[0].classList.toggle("selected");
}

// Changes everything on reset
function change(){
    colors = colorGenerator(numsquares);
    correct = colorPicker();
    picker.textContent = correct;
    for(var i = 0; i < square.length; i++){
        if(colors[i]){
            square[i].style.display = "block";
            square[i].style.backgroundColor = colors[i];
        }else{
            square[i].style.display = "none";
        }

    }
    h1.style.backgroundColor =  "cyan";
    reset.textContent = "New Colors";
    message.textContent = "";
}
console.log("Mode length is: " + mode.length);

// Resets the game
reset.addEventListener("click", function(){
    change();
});

// Changes all squares to the color of the correct square
function colorChange(color){
    for(var i = 0; i < square.length; i++){
        square[i].style.background = correct;
        this.backgroundColor = correct;
    }
};
// Picks the color values 
function colorPicker(){
    const rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
};
// Fills in the squares with random colors
function colorGenerator(num){
    // The array to be filled
    const arr = [];
    // The array will be filled num times
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    };

    return arr;
};

// Generates a random rgb value based between 0 and 255
function randomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g  + ", " + b + ")";
};
function init(){
    
    picker.textContent = correct;
    // Mode listeners
    for(var i = 0; i < mode.length; i++){
        mode[i].addEventListener("click", function(){
            // If one is selected when the other is clicked, turn it off
            // I came up with this part on my own. 
            if(mode[0] === "selected"){
                select();
            }else{
                select();
            }
            
            // Complicated if statement with a ternary operator 
            this.textContent ==="Easy" ? numsquares = 3: numsquares = 6;
            
            change();
            console.log("Mode clicked. ");
        });
    }
    // Fills in the squares
    // Sets the span to show the correct variable's RBG value
// Loops through all of the squares and gives them a different color
for(var i = 0; i < square.length; i++){
    
    // Makes all of the squares clickable colors
    square[i].addEventListener("click", function(){
        // Tests to see if squares are clickable
        const clicked = this.style.backgroundColor;
        
        // Checks if the right answer was clicked
        if(clicked === correct){
            message.textContent = "Correct!";
            h1.style.backgroundColor = correct;
            reset.textContent = "Play again?";
            colorChange(clicked);
            console.log("You clicked on: " + clicked);
        }else{
            this.style.backgroundColor = "darkblue";
            message.textContent = "Try again!";
            console.log("You clicked on " + clicked);
        }
    });
};

change();
};

console.log("The correct color is: " + correct);