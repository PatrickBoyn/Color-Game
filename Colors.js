// The hard coded color list
const colors = [
    "RGB(255, 0, 0)",
    "RGB(255, 255, 0)",
    "RGB(0, 255, 0)",
    "RGB(0, 255, 255)",
    "RGB(255, 255, 255)",
    "RGB(12, 5, 100)" 
];

// The selectors
const square = document.querySelectorAll(".square");
const displayColor = colorPicker();
const message = document.getElementById("message");
const test = document.getElementById("test");

// The hard coded correct color
const correct = colorPicker();

// Sets the span to show the correct variable's RBG value
// displayColor.textContent = correct;
test.textContent = correct;
// Loops through all of the squares and gives them a different color
for(var i = 0; i < square.length; i++){
    
    square[i].style.backgroundColor = colors[i];
    
    // Makes all of the squares clickable colors
    square[i].addEventListener("click", function(){
        // Test to see if squares are clickable
        const clicked = this.style.backgroundColor;
        
        // Checks if the right answer was clicked
        if(clicked === correct){
            message.textContent = "Correct!";
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
        square[i].style.background = color;
    }
};

function colorPicker(){
    const rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
};

console.log(correct);