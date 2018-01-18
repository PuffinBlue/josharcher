+++
date = "2018-01-18T14:24:08Z" 
draft = "false"
title = "The Odin Project - JavaScript Fundamentals Part 1" 
description = "A complete set of answers to the study questions from the Odin Project - JavaScript Fundamentals Part 1 course. " 
categories = ["Odin Project"]
tags = ["JavaScript Fundamentals Odin Project","Odin Project JavaScript"]
url = ""
slug = "/code/odin-project-javascript-fundamentals-part-1"
pageimage = ""
+++
Reading the linked info in the course is essential, it covers much more material than the questions ask below. 

To save unnecessary typing, some redundant questions have been grouped together so answers can be given in one section in a more complete manner. 

## How do you declare a variable in javascript? What are three different ways to declare a variable? Which one should you use when?

You can use any of the reserved words `let`, `const` and `var` to declare a variable. You should use `let` as 'standard'. Use this to create most variables. 

You should NOT use `var`, it's behaviour is rooted in a time the language didn't have certain abilities and variables created this way may behave differently than expected. 

You should use `const` when creating variable that will have fixed, unchanging, 'constant' values. Variable created this way cannot have their values altered, once created they will always retain their initial value. 

There are several ways of using these words. For example: 

```javascript
let message;
``` 

...will create the variable `message` but it will have no value assigned. 

You use the assignment operator `=` to assign a value to the variable. For example:

```javascript
let message;

message = 'Hello world!';
```

...assigns the value `Hello world!` to the variable named `message`.

More examples of the many ways (most more efficient that the above example) to create a variable can be found at the link below:

[http://javascript.info/variables](http://javascript.info/variables)

## What are the rules for naming variables?

A full explanation would be redundant as it has been covered in excellent detail here:

[http://javascript.info/variables#variable-naming](http://javascript.info/variables#variable-naming)

In the case of `const`, names are generally UPPERCASE for those with values created before execution - i.e. those with hard-coded values. 

If a `const` value is not known before run time but instead receives a calculated value after execution, normal camel case rules should be used. 

To expand the definition of this question away from the technicalities touches on 1 of the 2 hard problems in Computer Science:

* Cache invalidation
* Naming things
* Off by 1 errors

The basic gist is name a variable something self-explanatory and easy for both others and you to work with. A good rule of thumb is to think what would happen if you didn't revisit this particular piece of code you are writing for a year, can you still make easy sense of it with your choice of variable names?

A list of further tips can be found here:

http://javascript.info/variables#name-things-right

A very in depth look can be found on the Wikipedia page:

[https://en.wikipedia.org/wiki/Naming\_convention\_(programming)](https://en.wikipedia.org/wiki/Naming_convention_(programming))
 
## What are operators, operands, and operations? What are the different type of operators in Javascript? What are assignment operators? What is the “Unary +” Operator?

The full [definition of an operator](https://en.wikipedia.org/wiki/Operator_(computer_programming)) in Computer Science is arcane. It's enough to say operators are things which act upon *operands*.

This is best explained with example:

```javascript
1 + 2; // Operands are the numbers, operator is the +
```

In the case above, an arithmetic operator acts upon numbers, two of the - so it is called said to be 'binary.

A unary operator acts upon a single operand. This is a fancy way of saying something like this:

```javascript
x = -x
```

In the above case the `-` is a unary operator because it only operates on the `x`. 

There are many different types of operators found in JavaScript:

* Arithmetic
* Assignment
* String
* Comparison
* Conditional (Ternary)
* Logical
* Bitwise
* typeof
* delete
* in
* instanceof
* void

A much more detailed example of each of these types can be found here:

[https://www.w3schools.com/jsref/jsref_operators.asp](https://www.w3schools.com/jsref/jsref_operators.asp)
   
A different take on the same info can be found here if the above link isn't to your learning tastes:

[https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)

## What are the increment/decrement operators? What is the difference between prefixing and postfixing them?

A full answer to this is a little long and covered fully at the link below:

[http://javascript.info/operators#increment-decrement](http://javascript.info/operators#increment-decrement)

The increment and decrement operators are written `++` and `--` respectively. It's basically shorthand notation for increasing the value of a variable by 1 (or decreasing it by 1). 

Prefixing the operator and accessing the operands immediately will return the value of the operand as it would be *after* the operation has taken place. Put more simply, if the variable (operand) was `1`, prefixing the increment operator and then calling the value of the variable (operand) would return `2`.

Postfixing is the opposite, it'll return the value of the variable *before* any operation took place. 

## What is concatenation and what happens when you add numbers and strings together?

[String concatenation](https://en.wikipedia.org/wiki/Concatenation) is the operation of joining character strings end to end.

There is quite a lot of 'funny business' that occurs when you add numbers and strings together in JavaScript. A lot depends on which way you add them and even which comes first or last in the addition operation. 

A comprehensive set of examples covering what happens can be found here:

[https://www.w3schools.com/js/js_numbers.asp](https://www.w3schools.com/js/js_numbers.asp)

There really is no substitute to simply reading each example and seeing what happens. 

The basic premise is that adding a number and a string will concatenate the values into a string, but reading the example in that link is the best way to understand the finer points. It's not hard, there's just too many gotchas to write out in this post. 

## What is the difference between == and ===?

First we must understand what each of this operators are. Both of them are comparison operators which check if the values of two different operands are 'equal'. But there are slightly different kinds of 'equal'.

`==` is an 'equality' operator. `===` is an 'identity' operator. 

Starting with the simplest, `===` requires that the operands have identical value and be of the same type. That means no '[type conversion](https://en.wikibooks.org/wiki/Computer_Programming/Type_conversion)' is performed on the operands. So a string `"10"` would not be equal to the number `10` using this operator because the types do not match. 

From that you can probably guess that the `==` operator *does* perform type conversion, so the example string `"10"` ***would*** be equal to the number `10` using this particular operand. 

There are a few more caveats with the `==` operator too:

* If the types of the two expressions are different, attempt to convert them to string, number, or Boolean.

* NaN is not equal to anything including itself.

* Negative zero equals positive zero.

* null equals both null and undefined.

* Values are considered equal if they are identical strings, numerically equivalent numbers, the same object, identical Boolean values, or (if different types) they can be coerced into one of these situations.

* Every other comparison is considered unequal.

For a very comprehensive answer to this question you can't do better than this answer on StackOverflow:

[https://stackoverflow.com/a/359509](https://stackoverflow.com/a/359509)

    
## What are operator precedence values?

All operators have an order of precedence in which they are applied with respect to any other operator. 

For example, like in school maths, multiplication is performed before addition. The same is true in programming. 

For JavaScript there are 20 levels of precedence. A full table listing each operator and its precedence level can be found at the links below:

[Mozilla MDN precedence table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table)

[w3schools.com precedence table](https://www.w3schools.com/js/js_arithmetic.asp) - (scroll to bottom and only lists 19 levels)
    
    
    
    
    


