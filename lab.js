//prompt user to input their name
//then store user input in a userName variable
var userName = window.prompt("Please enter your name");
//Use the document.getElementById() method to access the greeting paragraph element. 
//Store this element in a variable called greetingParagraph:
var greetingParagraph = document.getElementById("greeting");
//we can modify it's contents using the .innerHTML property.
//so that the user's name is appended to the end of the greeting
greetingParagraph.innerHTML += ", " + userName;
//First, access the span elements using their ids, and store them into variables:
var span1 = document.getElementById("Operand1");
var span2 = document.getElementById("Operand2");
//Prompt the user for the first number and store it in a variable called 'num1'.
var num1 = window.prompt("Enter a number");
//Prompt the user for the 2nd number and store it in a variable called 'num2'.
var num2 = window.prompt("Enter a number");
//use the innerHTML property of each of these elements to change their contents to display the numbers the user entered.
span1.innerHTML = num1;
span2.innerHTML = num2;

/*
In this section, we will perform arithmetic operations using the 2 operands
 the user inputted. we will store the result of each operation in a variable 
 so that you can access it later to display the results.
*/

//we have created a variable called sum and stored the result of adding the 2 operands:
var sum = num1 + num2;
//result of subtracting the 2 numbers in a variable called difference.
var difference = num1 - num2;
//result of multiplying the 2 numbers in a variable called product.
var product = num1 * num2;
//result of dividing the 2 numbers in a variable called quotient.
var quotient = num1 / num2;
//result of performing the modulus operation on the 2 numbers in a variable called modResult.
var modResult = num1 % num2;

//here we save the string with num1 and num2, with "html span elements - to get their css style" to resultMessage variable.
var resultMessage = "<span>" + num1 + "</span> and <span>" + num2 + "</span> is ";
//Update the paragraph element that has an id of "addition" to display the result of the addition operation.
//and do the same for the rest
document.getElementById("addition").innerHTML = "The sum of " + resultMessage + sum;
document.getElementById("subtraction").innerHTML = "The difference between " + resultMessage + difference;
document.getElementById("multiplication").innerHTML = "The product of " + resultMessage + product;
document.getElementById("division").innerHTML = "The quotient of " + resultMessage + quotient;
document.getElementById("modulus").innerHTML = "The result of mod operation on " + resultMessage + modResult;