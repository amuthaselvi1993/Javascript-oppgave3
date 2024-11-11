/******************************************************************************
------------------------------------
!READ THE ASSIGNMENT TEXT CAREFULLY!
------------------------------------

1.

Use a normal 'for loop' to loop over the people array and do the following:

- If the objects 'name' value is "Otto", do not do any of the changes below to 
  that object (hint: the 'continue' keyword)

- Make a new key on each person object in the array called "city" and set the 
	value to a random city from the cities array.

- Make a new key on each person object called "title" and set it to "Mr." for
	males and "Ms." for females.
	
- Increment the age by 2

- Add "coding" to the beginning of the hobby array on each object.



PS: Use only 1 loop to do the above steps.

console.log(people) after your loop to check that your changes are correct.

Use your loop to also calculate the combined 
age of all the people objects and store it in the combinedAge variable.

Then, after the loop, use the combined age to calculate the average age
of everyone and store it in the averageAge variable.

Do your calculations AFTER you add the two years to the ages, and remember,
skip Otto!

******************************************************************************/

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["writing", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    male: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
  },
];
console.log("---------------------------------------------");
console.log("Skrive ut svar for første oppgave nedenfor");
console.log("---------------------------------------------");
let combinedAge = 0;
//your code here
for (let i = 0; i < people.length; i++) {
  if (people[i].name === "Otto") {
    continue;
  }
  people[i].city = cities[Math.floor(Math.random() * cities.length)]; //her finner vi city fra random number
  people[i].title = people[i].male ? "Mr" : "Ms"; //her lager vi en ny variable title
  people[i].age += 2; // her øker vi alder til hver person ved 2
  people[i].hobbies.unshift("coding"); //her tillater vi coding til hver person hobby
  combinedAge += people[i].age; //her finner vi combinedAge ved bruk av += operator
}

let averageAge = combinedAge / people.length;
console.log(
  "Combined age of people  adding 2 to everyone except adding Otto's age " +
    combinedAge
);
console.log("Average age of people without adding Otto's age " + averageAge);
console.log(people);

/******************************************************************************
2.

Make the following function:

It should take in 1 number as a parameter.

The function should return an array of random numbers between 1 and 6, the 
length of the array is decided by the number the function receives as a 
parameter (think of it as the number of dice we roll)

Examples: 
diceRoller(4) should return something like: [4, 1, 2, 6]
diceRoller(6) should return something like: [5, 5, 6, 2, 3, 4]

EXTRA CREDIT:
(This is not mandatory)
Add a second parameter to the function that decides how many faces the dice 
should have.
diceRoller(5, 20) should return an array of 5 random numbers ranging from 1-20 
******************************************************************************/
console.log("---------------------------------------------");
console.log("Skrive ut svar for andre funksjon nedenfor");
console.log("---------------------------------------------");

function diceRoller(numberOfTry) {
  let diceTryValues = [numberOfTry];
  for (let i = 0; i < numberOfTry; i++) {
    diceTryValues[i] = Math.ceil(Math.random() * 6);
  }
  return diceTryValues;
}
function polyHedralDiceRoller(numberOfTry, numberOfSides) {
  let diceTryValues = [numberOfTry];
  for (let i = 0; i < numberOfTry; i++) {
    diceTryValues[i] = Math.ceil(Math.random() * numberOfSides);
  }
  return diceTryValues;
}
console.log("Dice roller arrays with single input method");
console.log(diceRoller(4));
console.log(diceRoller(6));
console.log("Dice roller arrays with two input method");
console.log(polyHedralDiceRoller(5, 20));
/******************************************************************************
3.

Make the following function:

The function should take in 1 array of strings.

Inside the function, do this:

Write a loop that loops strings in the array, and does the following:
- Removes whitespace from the beginning and end of each word
- Converts all the words to lower case

Use a "FOR of" loop.

After the loop, use a method to join the array into a string with a single 
space between the words (" "), and return the resulting string.

Example:
[" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]
should return:
"this text needs to be cleaned up"
******************************************************************************/
console.log("---------------------------------------------");
console.log("Skrive ut svar for tredje funksjon nedenfor");
console.log("---------------------------------------------");

let cleanUpTxtArray = [
  " thIS",
  "teXt  ",
  " nEeds ",
  "to",
  "BE",
  "cleANED   ",
  " Up",
];
console.log("Input Array" + cleanUpTxtArray.toString());
function textCleanUp(cleanUpArray) {
  let cleanedString = "";
  for (let word of cleanUpArray) {
    cleanedString += word.trim().toLowerCase() + " ";
    console.log(word);
  }
  console.log("*****Output String*****");
  console.log(cleanedString.trim());
}
textCleanUp(cleanUpTxtArray);

/******************************************************************************
4.

EXTRA CREDIT:

(This assignment is not mandatory, only for those who want an extra challenge)

Make a function called 'helloChecker' that takes in 1 string 
as a parameter.

Write code that checks all the words in the string if they match the word for 
'hello' in any of these languages:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
czesc - polish

If any of the words in the string matches any of these, the function should 
return: "HELLO detected in (name of the language)."

If none of the words in the string match any of the words for hello in the 
different languages, your function should return: "No HELLO detected."

PS: Make sure the function is case insensitive, both 'Hello' and 'hello' 
should be detected.

I have provided some string variables to test your function with.
******************************************************************************/

console.log("---------------------------------------------");
console.log("Skrive ut svar for fjerde funksjon nedenfor");
console.log("---------------------------------------------");

// let salutation = {};
// salutation["hello"] = "English";
// salutation["ciao"] = "Italian";
// salutation["salut"] = "French";
// salutation["hallo"] = "German";
// salutation["hola"] = "Spanish";
// salutation["czesc"] = "Polish";h

let salutation = {
  hello: "English",
  ciao: "Italian",
  salut: "French",
  hallo: "German",
  hola: "Spanish",
  czesc: "Polish",
};
let salut = [
  { hi: "hello", language: "English" },
  { hi: "ciao", language: "Italian" },
  { hi: "salut", language: "French" },
  { hi: "hallo", language: "German" },
  { hi: "hola", language: "Spanish" },
  { hi: "czesc", language: "Polish" },
];
let hellos = [];
for (let i = 0; i < salut.length; i++) {
  hellos.push(salut[i].hi);
}
function helloChecker(textIpForHello) {
  let languagesAns = [];
  for (let hello of hellos) {
    if (textIpForHello.includes(hello)) {
      let lang = hellos.indexOf(hello);
      languagesAns.push(salut[lang].language);
    }
  }
  if (languagesAns.length > 0) {
    console.log(`HELLO detected in ${languagesAns.toString()}`);
  } else {
    console.log("No Hello Detected");
  }
}

let testCaseString = "Now I am saying hello in english";
console.log("Test case 1: " + testCaseString);
helloChecker(testCaseString);
testCaseString = "Adesso dico ciao in italiano";
console.log("Test case 2: " + testCaseString);
helloChecker(testCaseString);
testCaseString = "Maintenant je te dis salut en français";
console.log("Test case 3: " + testCaseString);
helloChecker(testCaseString);
testCaseString = "hallo auf Deutsch";
console.log("Test case 4: " + testCaseString);
helloChecker(testCaseString);
testCaseString = "Ahora estoy diciendo hola en español";
console.log("Test case 5: " + testCaseString);
helloChecker(testCaseString);
testCaseString = "Teraz mówię czesc po polsku";
console.log("Test case 6: " + testCaseString);
helloChecker(testCaseString);
testCaseString =
  "Now I am saying hello in english and Adesso dico ciao in italiano";
console.log("Test case 7: " + testCaseString);
helloChecker(testCaseString);
testCaseString = "Now I am going to test without any required words";
console.log("Test case 8: " + testCaseString);
helloChecker(testCaseString);

function helloChecker2(textIpForHello) {
  let languagesAns = [];
  for (let hello in salutation) {
    if (textIpForHello.includes(hello)) {
      languagesAns.push(salutation[hello]);
    }
  }
  if (languagesAns.length > 0) {
    console.log(`HELLO detected in ${languagesAns.toString()}`);
  } else {
    console.log("No Hello Detected");
  }
}

/******************************************************************************
5.

EXTRA CREDIT:

(This assignment is not mandatory, only for those who want an extra challenge)

Complete the function below to accomplish the following:

Return the string received in the first parameter with the 
following alterations:

any letter in the string matching charA (the second parameter in the function) 
will be replaced with charB (the third parameter) and VICE VERSA - meaning 
letters matching charA will be replaced with charB, and letters matching charB 
will be replaced with charA. See the expected console log comments below.

Examples:

doubleSwap("this is a string", "i", "s")
should return "thsi si a itrsng"

doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a")
should return "maybe another approach is necessary"

doubleSwap("what is the point of this?", "o", "t")
should return "whao is ohe ptino tf ohis?"
******************************************************************************/

console.log("---------------------------------------------");
console.log("Skrive ut svar for fjerde funksjon nedenfor");
console.log("---------------------------------------------");
function doubleSwap(string, charA, charB) {
  const stringAsArray = [...string];
  for (let i = 0; i < stringAsArray.length; i++) {
    if (stringAsArray[i] === charA) {
      stringAsArray[i] = charB;
    } else if (stringAsArray[i] === charB) {
      stringAsArray[i] = charA;
    }
  }
  console.log("Output \n" + stringAsArray.join(""));
}
console.log("Testcase 1 Text --this is a string,charA - i,charB - s ");
doubleSwap("this is a string", "i", "s");
console.log("Testcase 2 Text-what is the point of this?,charA - o,charB - t");
doubleSwap("what is the point of this?", "o", "t");
console.log("Testcase 3 Text-Try one without replace charB?,charA - o,charB- ");
doubleSwap("Try one without replace charB?", "o", "");
console.log("Testcase 4 Text-Try one without replace charA?,charA -,charB - t");
doubleSwap("Try one without replace charA?", "", "t");
console.log("Testcase 5 Text-Try one without charA & charB?,charA -,charB -");
doubleSwap("Try one without charA & charB?", "", "");

console.log("Thank you for the challenges! Have a nice day!");
