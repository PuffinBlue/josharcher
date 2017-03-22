// Define variables in this section
// ================================

// The number of squares per side of the grid at initial build
var squaresPerSide = 30

// These need to be defined as null to enable resetting grid and retain user
// defined grid size. If grid is reset before user defines a size, without this
// declaration newGridSize is simply undefined. 
var newGridSize = null

// Similarly, defines rgb as null to avoid undefined before user has selected
// the Random Colour button. 
var rgb = null

// Call functions in this section
// ==============================

// Builds initial grid at predefined size
buildGrid(squaresPerSide);

// Define button behaviour in this section
// =======================================

// Select drawing colour
$("#setColourBlack").click(function () {
    // Need to set to True to cause if statement to return else in randomColor()
    // This allows us to preserve drawLine() colour through grid resets
    setBlack = true
    drawLine();
});

// Random drawing colour
$("#randomColour").click(function () {
    // Need to set to false to cause if statement to run in randomColor()
    // This allows us to preserve drawLine() colour through grid resets
    setBlack = false
    randomColour()
    drawLine()
});
   
// Select grid size
$("#gridSize").click(changeGridSize);

// Reset the grid
$('#clearGrid').click(clearGrid);

// Define function definitions in this section
// ===========================================

// Build the grid by building the number of rows and then adding
// the same number of squares to the rows. This leaves you with a square grid.
function buildGrid (squaresPerSide) {
    // Remove all elements first to give a clean container 
    $('.project-grid-container').children().remove();

    // Build the number of rows (how tall grid is)
    var $tempRow = $('<div class="row"></div>');
    var $tempContainer = $('.project-grid-container');
    for (var i=0; i < squaresPerSide; i++) {
        $tempRow.clone().appendTo($tempContainer);
    }
    
    // Fill the rows with squares (how wide the grid is)
    var $tempSquare = $('<div class="grid-square"></div>');
    var $tempBuiltRow = $('.row');
    for (var i=0; i < squaresPerSide; i++) {
        $tempSquare.clone().appendTo($tempBuiltRow);
    }
    
    // Specify the size of the squares based on how many there are
    var squareSize = $('.project-grid-container').width() / squaresPerSide;
    $('.grid-square').css({
        'width':squareSize + 'px',
        'height':squareSize + 'px',
    })

    // Call drawLine to make sure it's active
    drawLine();
}

// Detect a mouseover event and change the square colour
function drawLine () {
    // Checks if 'Random Colour' has been selected. If yes, preserves it.
    // We use setBlack boolean to preserve drawLine() state through grid
    // resets. 
    if (rgb !== null && setBlack == false) {
        $('.grid-square').mouseover(function() {
            $(this).css('background-color', randomColour());
        })
    }
    // Sets standard line colour to black
    else {
        $('.grid-square').mouseover(function() {
            $(this).css('background-color', 'black');
        })
    }
}

// Reset the grid. Keeps the reset grid size to user entered size if given
function clearGrid () {
    if ( newGridSize !== null) {
        buildGrid(newGridSize);
    }
    else {
        buildGrid(squaresPerSide);
    }
}

// Change the size of the grid by accepting user input
function changeGridSize () {
    newGridSize = prompt('Enter number of squares per side.');
    if ( newGridSize == null || newGridSize == '' || isNaN(newGridSize) == true ) {
        alert("Erm...that's not a number. Please enter a number!");
        }
    else if (newGridSize > 250) {
        alert("Yikes, that number is too large, you'll crash the browser! Pick something less than 400.")
        }
    else {
        buildGrid(newGridSize);
    }
}

// Allow user to make colour of line random
function randomColour () {
    // Set variables to number between 0 and 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    // Create a string matching rbg(000,000,000) for use in CSS
    rgb = "rgb(" + r + "," + g +"," + b + ")"
    return rgb;
}



