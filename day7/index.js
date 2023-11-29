/*function  testFunction()  {
         console.log("Hello");
            console.log("World");
     }


console.log("let's  begin:");  //  ->  let's  begin:
console.log("Hello");  //  ->  Hello
console.log("World");  //  ->  World
console.log("and  again:");  //  ->  and  again:
console.log("Hello");  //  ->  Hello
console.log("World");  //  ->  World
console.log("and  once  more:");  //  ->  and  once  more:
console.log("Hello");  //  ->  Hello
console.log("World");  //  ->  World*/


var  globalGreeting  =  "Good  ";
var  localGreeting  =  "how are you   ";
   
function  testFunction()  {
          var  localGreeting  =  "Morning  ";    
          console.log("function:");

         console.log(globalGreeting);
         console.log(localGreeting);
 }

    
 testFunction();

    
 console.log("main  program:");
 console.log(globalGreeting);
 console.log(localGreeting); 

 /* Variable shadowing JavaScript allows for variable shadowing. 
 What does that mean? It means that we can declare a global variable and a local variable of the same name.*/

 // this example is for global variable:

 let  counter  =  100;
 console.log(counter);  //  ->  100
 {
        counter  =  200;
        console.log(counter);  //  ->  200
 }
 console.log(counter);  //  ->  200


// this example is for local variable: local variables can be accessed only within the function or block in which they are defined.

 let counter1 = 100;
 console.log(counter1); // -> 100
 {
     let counter = 200;
     console.log(counter1); // -> 200
 }
 console.log(counter1); // -> 100

 console.log ("======================================");

  var  counters  =  100;
  
 function  testFunction()  {
          var  counters  =  200;    
          console.log(counters);
 }
    
 console.log(counters);  //  ->  100
 testFunction();  //  ->  200
 console.log(counters);  //  ->  100

 console.log ("======================================");

 // example of typeof operator

  let  year  =  1990;
 console.log(typeof  year);  //  ->  number
 console.log(typeof  1991);  //  ->  number
   
 let  name  =  "Alice";
 console.log(typeof  name);  //  ->  string
 console.log(typeof  "Bob");  //  ->  string
   
 let  typeOfYear  =  typeof  year;
 console.log(typeOfYear);  //  ->  number
 console.log(typeof  typeOfYear);  //  ->  string
