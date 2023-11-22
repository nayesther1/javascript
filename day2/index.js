/*As you can see, console.log() simply displays information in your JavaScript console — in this case the value 1.
We will use console.log() as a tool to test our code.
Great! Now, we can talk about JavaScript variables.*/

console.log(1);

/* But, what happens if we use console.log() to log our new variable?

let test;
console.log(test);
Javascript
the output will dispplayed undefined
 
//This is because we have not initialized our variable. Initializing a variable is the process of assigning a value to it. */

//We can assign a value to a variable with the assignment operator =.
let test;
test = 1;
console.log(test);

//You can also assign a value to a variable directly when you create it.
let test1 =1;
console.log(test1);

//Reassign a value to a variable

let num = 1;
let num1 = 2;
console.log(num);


const num5=6;
console.log(num5);

let num4;
num4=9;
console.log(num4);
/*In this simple exercise we declare a variable called num and assign it a value of 5. Then we try to log the value of the variable using the console.log() method.
But, the console.log() method contains a small mistake. If you try to run the code, you will see an error message.
Fix the mistake and run the code again.*/
const num6 = 5;
console.log(num6);
/*In this exercise we practice how to declare a new variable and how to assign it a number. The console.log() statement below attempts to log a variable named num.
Declare a variable with this name and assign it a number of your choice. Run the code to see if the number is being logged.*/

const num7 = 55 ;
console.log('The value of num is: ' + num7);