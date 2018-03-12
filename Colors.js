// The hard coded color list
const colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 255, 255)",
    "rgb(12, 5, 100)" 
];

// The selectors
const square = document.querySelectorAll(".square");
const displayColor = document.getElementById("displayColor");

// The hard coded correct color
const correct = colors[2];

// Sets the span to show the correct variable's RBG value
displayColor.textContent = correct;

// Loops through all of the squares and gives them a different color
for(var i = 0; i < square.length; i++){
    
    square[i].style.backgroundColor = colors[i];
    
    // Makes all of the squares clickable 
    square[i].addEventListener("click", function(){
        // Test to see if squares are clickable
        const clicked = this.style.backgroundColor;
        
        // Checks if the right answer was clicked
        if(clicked === correct){
            alert("Correct!");
        }else{
            this.style.backgroundColor = "#232323";
        }
    });
};