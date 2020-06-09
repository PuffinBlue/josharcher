+++
date = "2017-03-23T15:17:24Z"
draft = "false"
pageimage = ""
url = "/code/odin-project-javascript-jquery/"
description = "A walkthrough guide for those needing help with the Odin Project's Javascript and jQuery project."
title = "Javascript and jQuery | An Odin Project"
categories = ["Odin Project"]
tags = ["Odin Project - Javascript and jQuery Project","Javascript and jQuery Project"]
slug = ""

+++
I'm finding the Odin Project isn't really that easy to blog your way through like you can with [LPTHW](/categories/lpthw/), but this project seemed like a great one to share. 

This is a long post, so here are some links to jump to the relevant sections:

1. [Completed example and live project section](#javascript-and-jquery-completed-project).
2. [Lessons learned section](#javascript-and-jquery-project-lessons-learned) (hints on how to approach the project).
3. [Example section](#javascript-and-jquery-an-example) (walkthrough of my project). 

## Javascript and jQuery - completed project

You can take a look at my completed project live in your browser by clicking the link below:

[Josh Archer's solution - Javascript and jQuery - The Odin Project](https://www.josharcher.uk/static/projects/odinproject/javascriptandjquery/project.html)

Below are direct links to the final .html, .css and .js files for the completed project. You can use these as example/inspiration. It's not a good idea to just copy as you'll not get any benefit but hopefully they help you work out whatever issue you are trying to solve:

[GitHub repo](https://github.com/JoshArcher-OdinProject/javascript-jquery).

[Josh Archer's solution - completed .html file](https://github.com/JoshArcher-OdinProject/javascript-jquery/blob/master/project.html).

[Josh Archer's solution - completed .css file](https://github.com/JoshArcher-OdinProject/javascript-jquery/blob/master/style.css).

[Josh Archer's solution - completed .js file](https://github.com/JoshArcher-OdinProject/javascript-jquery/blob/master/script.js).

## Javascript and jQuery Project - lessons learned

I've created websites before, like the one you're reading this one. I've made larger projects and I've made smaller. But, the interesting thing about this particular Odin Project project is how everything is a totally blank slate. 

Going from literally nothing, not even boilerplate code, is a bit unnerving when you've been used to using frameworks or simply adjusting pre-existing code. So, here's a few bits I learned through this project...

### 1. Plan functionality in broad terms
    
It sounds simple but getting a piece of blank paper and writing down what you want the thing you're making to do is a good start. The project makes this easy for you because it tells you what is needed. But that brings us to point 2...


### 2. Plan how each bit will work

Here I'm talking about functionality, not structure. Write down how you'll go about meeting the project requirements, one requirement at a time. 

Let's say that you need to allow users to change the line colour to random. What steps could be involved:

1. Create a button the user can click
2. Have the button change the line colour to random
3. Do we preserve the colour through clearing the grid?
4. Do we preserve the colour through resizing the grid?
5. Do we want users to be able to revert to the original colour?

The last three point are new questions brough up by this first analysis. Can we answer them now? If we can then do so - I'm going to say yes to all of them.

So that leaves us with at least 5 points to think about when just creating this random colour button. 

### 3. Pseudo-code - plan how you'll code the functionality

This is the tricky bit but you should have repeated step 2 above for each 'piece' of functionality you need to build. That'll give you a good idea of the complexity and how things will interoperate. 

Then we can move on to some pseudo-code, just to get a feel for how things will work logically. Lets stick with the example of the button for now:

```text
Create button button for 'Random Colour'
Button click calls randomColour function
create randomColour function that changes line colour to random
Preserve colour through grid clear:
 - if user selected 'randomColour' = true, preserve randomColour after 'gridReset'
 - else return originalColour
Preserve colour through grid resize
 - if user selected 'randomColour' = true, preserve randomColour after 'gridResize'
 - else return originalColour
Create button for 'Original Colour'
Button click calls originalColour function
```

From that you can start to see the steps you'll need to put in place to start coding. We can now start to write some code. 

### 4. JUST START WRITING FOR GOODNESS SAKE!!!

Seriously, just start writing. You'll never get it correct first go. Equally you'll be very unlikely to identify all edge cases before you start. You have to jump in and get some letters down on the screen. 

Once that's done you can start to adjust and iterate to reach the final finished state. 

### 5. Repeat steps 1-4 for each bit you need to add

Ok, sometimes you won't need to do this fully. Step one is probably not required unless it's something major for instance. However, don't forget these steps when you do realise something needs to be added. 

Taking the time to think for a few minutes before leaping in can be beneficial. Then again if you are stuck or you have a massive brain and can hold all of the complexity in your head, just start writing, that is a valid approach. 

## Javascript and jQuery - An example

Taking the example above of the random colour button I want to show you what I did for my own Javascript and jQuery project. 

Firstly, I did a run through of the 5 steps above to flesh out what was needed. This identified some other bits like needing to actually build a grid and needing to draw a line, so lets imagine those other bits have been planned. 

Here's the code I used for the 'Random Colour' button:

```javascript
// Random drawing colour
$("#randomColour").click(function () {
    // Need to set to false to cause if statement to run in randomColor()
    // This allows us to preserve drawLine() colour through grid resets
    setBlack = false
    randomColour()
    drawLine()
});
```

You can see that it:

1. Detects the users click 
2. On click it sets a variable to false
3. Runs the `randomColour()` function
4. Runs the `drawLine()` function

If you look at it, it's very similar to our pseudo-code. 

Let's have a look at the `drawLine()` function to see how that works:

```javascript
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
```

And the `randomColour()` function:

```javascript
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
```

### Stay with me!

Yep, that's a fair load of code for you to go through, but stick with me here. 

If you read each comment you'll see that all the `randomColour()` function is doing is creating and returning a string of format `rgb(000,000,000)` where `000` is set to be a random number between 0 and 255. 

That allows us to use the variable `rgb` as a rgb formatted random colour for use as a CSS property. And if you look in the `if` statement in the `drawLine()` function you can see we use that returned value of `randomColour()` as the `background-color:` property when detecting a mouseover of each square. 

That allows us to set each square to a random colour if that option has been chosen by the user. 

### What's the `rgb != null` bit?

Good question. Before the user clicks on the 'Random Colour' button and `randomColour()` is called, say the first time they visit the page, `rgb` would be `undefined`. That would cause an error, so to get around that I set it to null at the top of the script. 

That way, if 'Random Colour' button isn't clicked `rgb` remains as `null`, the `if` statement in `drawLine()` is skipped (because it's checking `rgb` is `NOT null`) and the `else` statement fires returning a black line. 

### Alright, but what's the `&& setBlack = false` bit?

Well, remember one of the requirements was to allow the user to reset the colour back to black? That allows us to do that. 

Let's look at the code for the button that returns the line colour to black:

```javascript
// Select drawing colour
$("#setColourBlack").click(function () {
    // Need to set to True to cause if statement to return else in randomColor()
    // This allows us to preserve drawLine() colour through grid resets
    setBlack = true
    drawLine();
});
```

We already know that the 'Random Colour' button does two things, set the variable `setBlack` to `false` and calls the `randomColour()` function. That ensures that `rgb` will have a value (i.e. not be `null`) and that `setBlack = false`. 

Remember the `if` statement: 

```javascript
if (rgb !== null && setBlack == false) {
        $('.grid-square').mouseover(function() {
            $(this).css('background-color', randomColour());
        })
    }
```

Well, clicking the 'Random Colour' button means that this statement is satisfied and the code runs. 

In order to set the line back to black we need to make that `if` statement fail. To do so we set the `setBlack` variable to `true` when clicking the 'Set to Black' button, which then causes the `else` statement to run and we go back to black:

```javascript
else {
        $('.grid-square').mouseover(function() {
            $(this).css('background-color', 'black');
        })
    }
```

### Why can't you just set `rgb` to `null` again?

Good question. As best as I can work out, it's because of the `.mouseover` event. Once the 'Random Colour' button is clicked and jQuery starts watching for the `.mouseover` event, it doesn't just 'stop' doing so, it checks constantly. 

So when it detects a mouseover event on a grid square it'll fire off this code each time:

```javascript
$('.grid-square').mouseover(function() {
            $(this).css('background-color', randomColour());
})
```

Because that's calling `randomColour()` it's setting `rgb` to a value at each mouseover detection. That means that at each and every mouseover, `rgb is given a value. 

Between the time you click the 'Set to Black' button and mousing over the grid, `rgb` remains `null`, but on mouseover it'll get a value. 

### So? The line will still stay black despite that won't it. 

Yes, but you remember the requirement to retain the colour after clearing the grid or changing the grid size? Lets look at the code the 'Clear Grid' button runs:

```javascript
// Reset the grid. Keeps the reset grid size to user entered size if given
function clearGrid () {
    if ( newGridSize !== null) {
        buildGrid(newGridSize);
    }
    else {
        buildGrid(squaresPerSide);
    }
}
```

You see how that's calling the `buildGrid()` function. Well if we look at the botton of that function, what is called there?

```javascript
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
```

There it is! `drawLine()`, and because the variable `rgb` does have a value 'in the background' thanks to the mouseover events firing, the `if` statement is satisfied and the grid squares get set to having a random background colour.

### Wow, that was a lot to go through!

Yep, it was. Well done if you got this far!

Hopefully you can see that everything is built up out of smaller logical steps. Breaking everything down into easily managable parts and working on those is a lot easier than trying to read the whole thing in one go. 

## Your questions

I'm interested to hear how you guys did your project, the difficulties you faced (if any) and/or if this post was useful to you so leave a comment below. 

Happy coding!
