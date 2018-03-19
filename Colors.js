var numsquares = 6;

// The selectors
const square = document.querySelectorAll(".square");
const displayColor = colorPicker();
const message = document.getElementById("message");
const picker = document.getElementById("picker");
const h1 = document.querySelector("h1");
const stripe = document.getElementById("stripe");
const instructions = document.getElementById("instructions");
const reset = document.getElementById("new");
const mode = document.querySelectorAll(".mode");

// No longer hard coded, picked by a function at the bottom of the code
var correct = colorPicker();
// The color generator
var colors = colorGenerator(numsquares);

for(var i = 0; i < mode.length; i++){
    mode[i].addEventListener("click", function(){;
        this.classList.add("selected");
        this.classList.remove("selected");
    });
};

// Ignore the easy and hard mode buttons for now.  

// Adds the event listener for changing to easy mode
// easy.addEventListener("click", function(){
//     easy.classList.add("easy");
//     hard.classList.remove("hard");
//     easy.classList.add("selected");
//     hard.classList.remove("selected");
//     numsquares = 3;
//     colors = colorGenerator(numsquares);
//     correct = colorPicker();
//     picker.textContent = correct;
//     for(var i = 0; i < square.length; i++){
//         if(colors[i]){
//             square[i].style.background = colors[i];
//         }else{
//             square[i].style.display = "none";
//         };
//     };
//     console.log(colors);
// });
// // Same for the hard mode
// hard.addEventListener("click", function(){
//     hard.classList.add("hard");
//     easy.classList.remove("easy");
//     hard.classList.add("selected");
//     easy.classList.remove("selected");
//     numsquares = 6;
//     colors = colorGenerator(numsquares);
//     correct = colorPicker();
//     for(var i = 0; i < square.length; i++){
//         square[i].style.background = colors[i];
//         square[i].style.display = "block";
//     }
//     console.log(colors);
// });

// Resets the game
reset.addEventListener("click", function(){
    colors = colorGenerator(numsquares);
    correct = colorPicker();
    picker.textContent = correct;
    for(var i = 0; i < square.length; i++){
        square[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor =  "cyan";
    reset.textContent = "New Colors";
    message.textContent = "";
});

// Sets the span to show the correct variable's RBG value
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

console.log("The correct color is: " + correct);