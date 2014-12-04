//These are examples of variables.
	
//Some variables are integers.

var x = 4;
var y = 7;

//Some variables are strings
var statement = "Cheese is my favorite food.";
var z= "Dairy";
var sentence = "One of my favorite cheeses is Gruyere.";

//This is an example of a Boolean data type.
var TheKnicksAreBadThisYear = true;

//This is an array.
var cheeses = ["Gruyere", "Manchego", "Swiss", "Labneh", "Camembert"];
var numbers = [2, 3, 4, 5, 6];

//This is an example of a multi-dimensional array.

var crazycombo = [cheeses, numbers];

//I think this is an example of arrayception. 

console.log(crazycombo[0][0]);
//The above command should access the first item in the first array, which is Gruyere. It does! Hooray.

//The above comment could have been multi-line, in which it would have looked like:

/*This
is an example
of a comment that stretches
across multiple lines*/

//Here's a test of some variables with an alert.

alert(x + y);
alert(crazycombo);
alert(sentence);

//Here's another test using the console.
console.log(cheeses);
console.log(x + y);

//Another way to test is to log directly to html. I'm going to show this directly on assignment.hmtl.

//Here is a logic test:

if (x > y){
	console.log("you won't see this because 4 is less than 7");
} else{
	console.log("you'll see this message");
}

//Here are some super simple functions:

function addThree (number){
	return number + 3;
}
console.log(addThree(4));

function alertCheese (cheesename){
	return alert(cheesename);
}
alertCheese("Manchego");

function multiply (a, b){
	return a * b;
}
console.log(multiply (4, 3));
	



