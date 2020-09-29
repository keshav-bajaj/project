// Get the button and input field from document
var randomBtn = document.getElementById("ran-btn");
var colorbox = document.getElementById("col-name");

// A function to generate random colors
function generatecolor() {
    var red = Math.floor((Math.random() * 255) + 1); 
    var green = Math.floor((Math.random() * 255) + 1);
    var blue = Math.floor((Math.random() * 255) + 1);
    var color =  "rgb" + "(" + red + "," + green + "," + blue + ")";
    colorbox.value = color;
    document.body.style.backgroundColor = color;
};

// Execute the function on load
generatecolor();

// Execute again when button is clicked
randomBtn.onclick = generatecolor;

// Get the copy button
var copyBtn = document.getElementById("copy-btn");

// Assign copy function
copyBtn.onclick = function copyText() {
    colorbox.select();
    colorbox.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied Color");
}