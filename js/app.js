console.log('JS is working')

//////////// CONCEPTUAL QUESTIONS //////////////////

// 1. How do we assign a value to a variable? // 
  // let goodTimes = 'roll'; // 

// 2. How do we change the value of a variable? // 
  // let goodTimes = 'roll'; {
  //   goodTimes = 'keep on going';
  //   console.log(goodTimes);
  // }    

// 3. How do we assign an existing variable to a new variable? // 
  // let arpiar = ['raresh', 'rhadoo', 'petre'];
  // let sunWaves23 = arpiar 
  //   console.log(sunWaves23);

//////////// CONCEPTUAL QUESTIONS //////////////////


//////////// STRINGS //////////////////

// 1. Create a variable called firstVariable. // 
  // let firstVariable = 'Hello World';
  //   firstVariable = 83;
  // let secondVariable = firstVariable
  //   console.log(secondVariable);
  //   secondVariable.toString();
  //   console.log(secondVariable);

// 2. Create a variable called yourName and set it equal to your name as a string. // 
  // let yourName = 'Alex';
  //   console.log('Hello, my name is ' + yourName);

//////////// STRINGS //////////////////


/////////////////// BOOLEANS /////////////////////

// 1. a < b //
// 2. c > d // 
// 3. 'name' === 'name' // 
// 4. a + b === c // 
// 5. a * a === d //
// 6. e === 'kevin' // 
// 7. 48 != '48' // 

/////////////////// BOOLEANS /////////////////////

////////////////// THE FARM /////////////////////

// 1. //
// let animal = 'cow';
// let snake = 'python';
//   if (animal === snake){
//     console.log('mooooo');
// } else {
//     console.log('Hey! You are not a cow');
// }



// const animal = (Cow) => {

//   if (animal === Cow) {
//     console.log('moooooooo'); 
//   } else 
//     console.log('Hey! You are not a cow');
// }

// animal('');



////////////////// THE FARM /////////////////////


///////////////// DRIVERS ED ///////////////////

// Write a variable that will hold a person's age. // 
//   const personA = 23;
//   const personB = 14;

// // Write code that will print out 'Here are the keys', if the age is 16 years or older. //
// // if (personA > 16){
// //   console.log('Here are the keys.');
// // }

// // // Change your code so that if the age is younger than 16, a message will print "Sorry, you are too young." // 
// if (personA < personB){
//   console.log('Here are the keys.');
// }
// else {
//   console.log('Sorry, you are too young.');
// }

///////////////// DRIVERS ED ///////////////////

///////////////// JUST LOOP IT /////////////////////

// Write code that will print out all the numbers in the range 0 - 10. // 
// for (let i = 0; i <= 10; i++){

//   console.log(i);

// };

// Write code that will pring out all the numebrs in the range 10 - 4000. // 
// for (let i = 10; i <= 4000; i++){

//   console.log(`${i}`);

// };

// Write code that will print out every other number in the range 10 - 4000. // 
// for (let i = 10; i <= 4000; i += 2){

//   console.log(`${i}`);

// };

///////////////// JUST LOOP IT /////////////////////

//////////////// LETS GET EVEN ////////////////////

// Print out the even numbers that are within the range of 1 - 100. // 
// Adjust your code to add a message next to the even number that says: "is an even number". // 

// for (let i = 1; i <= 100; i++){
//   if (i % 2 === 0){
//     console.log(`${i} is an even number`);
//   }
// };

//////////////// LETS GET EVEN ////////////////////

/////////////// GIVE ME FIVE /////////////////////

// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five. // 

// for (let i = 0; i <= 100; i++){
//   if (i % 5 === 0)
//   console.log(`${i} I found a number. High five!`);

// };

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.//

// for (let i = 0; i <= 100; i++){
//   if (i % 5 === 0 || i % 3 === 0){
//   console.log(`I found a ${i} High five!`);
//   }
//   else {
//   console.log(`I found a ${i} Three is a crowd.`);
//   }
// };

/////////////// GIVE ME FIVE /////////////////////

/////////////// SAVINGS ACOUNT //////////////////

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account. // 

// let bank_account = 'sum'; 

// for (let bank_account = 1; bank_account <= 10; bank_account++) {
   
//     console.log(`${'sum'}`);
  
// }

// let sum = 0;
// let bank_account = 0;
// while (bank_account < 10) {
//   bank_account++;
//   sum += bank_account;

// };


////////////// SAVINGS ACOUNT //////////////////

///////////// MULTIPLES OF 3 & 5 ////////////////////

// let sum = 0;
// for (let i = 0; i <= 1000; i++){
//   if (i % 5 === 0 || i % 3 === 0){
//     sum += i;
//  }
// };
// console.log(`${sum}`);

///////////// MULTIPLES OF 3 & 5 ////////////////////

//////////// EASY DOES IT //////////////////////////

// let quotes = ["What I tell", "you three times", "is true."];
//   console.log(quotes);

//////////// EASY DOES IT //////////////////////////


///////////////// RANDOM /////////////////////////
// // Given the following array:
//       randomThings = [1, 10, "Hello", true]; 
// // 1. how do you access the 1st element in the array? 
//       // randomThings[0] = _______

// // 2. Change the value of "Hello" to "World". 
//       randomThings[2] = "World";

// // 3. Check the value of the array to make sure it updated the array.
//       console.log(randomThings[2]);

///////////////// RANDOM /////////////////////////

//////////////// WE'VE GOT CLASS ///////////////////

// // Give the following array: 
//   const ourClass = ['Gizmo', 'Zoom', 'Github', 'Slack'];

// // 1. What would you write to access the 3rd element of the array? // 
//   // ourClass[2] = 
// // 2. Change the value of 'Github' to 'Octocat'. // 
//   ourClass[2] =  'Octocat';
//   console.log(ourClass); 
// // 3. Add a new element, 'Cloud City' to the array. // 
//   ourClass.push('Cloud City');
//   console.log(ourClass); 

//////////////// WE'VE GOT CLASS ///////////////////

//////////////////// MIX IT UP //////////////////////

// Given the following array: 
//   const myArray = [5, 10, 500, 20];
// // 1. Using the push method, add the string 'Egon' to the end of the array. // 
//   myArray.push('Egon');
//   console.log(myArray); 
// // 2. Using the 'unshift' method, add the string 'Bob Marley' to the beggining of the array. // 
//   myArray.unshift('Bob Marley'); 
//   console.log(myArray);
// // 3. Using a different method, remove the string from the beginning of the array. // 
//   myArray.shift('Bob Marley');
//   console.log(myArray);
// // 4. Use the reverse method on this array. //
//   myArray.reverse();
//   console.log(myArray); 

  //////////////////// MIX IT UP //////////////////////

  /////////////////// BIGGIE SMALLS ////////////////////

  // Write an 'if..else' statement: // 
// const biggieSmalls = (number) => {
// if (number < 100){
//   console.log('little number');
// } 
// else {
//   console.log('big number');
// }

// };

// biggieSmalls(43);
// biggieSmalls(298);

/////////////////// BIGGIE SMALLS ////////////////////

/////////////// MONKEY IN THE MIDDLE ///////////////////

// const monkeyMan = (number) => {
//   if (number < 5){
//     console.log('little number');
//   }
//   else {
//     console.log('big number');
//   }

// }

// monkeyMan(10);
// monkeyMan(2); 

/////////////// MONKEY IN THE MIDDLE ///////////////////

///////////// WHATS IN YOUR CLOSET ////////////////////

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];

// // What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset 
// //log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// console.log('kristyn is rocking that ' + kristynsCloset[2] + ' today!');

// // 2. Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe. // 
// kristynsCloset.shift(0);
// console.log(kristynsCloset);
// let kristynsShoe = 'left shoe';
// console.log(kristynsShoe);

// // 3. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
// kristynsCloset.pop('marshmallow peeps');
// kristynsCloset.push('raybans');
// kristynsCloset.push('marshmallow peeps');
// console.log(kristynsCloset);

// // 4. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
// kristynsCloset[5] = 'stained knit hat';
// console.log(kristynsCloset);

// // 5. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
// console.log(thomsCloset[0][1] + ", " + thomsCloset[1][1] + ", and " + thomsCloset[2][1] + "!");

// // 6. In the same way, access one item from Thom's pants array.
// console.log(thomsCloset[1][2]);

// // 7. Access one item from Thom's accessories array.
// console.log(thomsCloset[2][1]);

// // 8. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// console.log ('Thom is looking fierce in a ' + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][1] + "!")

// // 9. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
// thomsCloset[1][2] = 'Gucci Pajamas';
// console.log(thomsCloset[1][2]);

/////////////// FUNCTIONS ///////////////////

// 1. Write a function called printGreeting with a parameter name 
// that returns a greeting with the argument interpolated into the greeting.

// const printGreeting = (name) => {
//   console.log('Hello there, ' + name + '!');
// }

//  printGreeting('Slimer');

///////////////////// REVERSE WORD ORDER ///////////////////

// 1. Write a function reverseWordOrder that accepts a single argument, a string.
// const reverseWordOrder = (bicycle) => {
//   const splitString = bicycle.split('');
//   console.log(reverseWordOrder); 

// }

// const reverseWordOrder = (cut) => {
//   const lowerCase = cut.toLowerCase(); 
//   console.log(lowerCase);
//   const splitString = lowerCase.split('');
//   console.log(splitString);
//   const arr1 = splitString.reverse();
//   console.log(arr1);
//   const reversedString = arr1.join("");
//   console.log(reversedString);

//   if (cut === reversedString){
    
//     return true;
  
//   } else {
    
//     return false;
//   }


// }

// console.log(reverseWordOrder("radar"));

///////////////////// REVERSE WORD ORDER ///////////////////

/////////////////// CALCULATE ///////////////////////

// Write a function called 'calculate'. 
// Name the parameters 'num1', 'num2', 'operation'. 
// const calculate = (num1, num2, operation) => {
//   if (operation === 'mult'){
//     return num1 += num2;
//   } 
//   else if (operation === 'div') {
//     return num1/num2;
//   } 
//   else if (operation === 'exp') {
//     return num1^num2;
//   }
// }

// console.log(calculate(4, 3, 'mult'));
// console.log(calculate(6, 2, 'div'));
// console.log(calculate(94, 5, 'exp'));

/////////////////// CALCULATE ///////////////////////

////////////////// ONE //////////////////////////

// 1. Write a function printCool that accepts one parameter, name as an argument. 
// const printCool = (name) => {
// console.log(name + ' is cool.');
// }

// printCool('Captain Reynolds');

////////////////// ONE //////////////////////////

////////////////// TWO //////////////////////////

const calculateCube = 7 => {
  
  

}














