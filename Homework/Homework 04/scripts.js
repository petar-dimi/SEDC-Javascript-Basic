alert("hello SEDC this is homework 04 ")
console.log("hello SEDC this is homework 04 ");


//Homework Task 1:  ccepts a parameter and returns its type
console.log("Homework Task 1 - accepts a parameter and returns")

function tellStory(storyElements) {
  
  const [name, mood, activity] = storyElements;

  
  const story = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;

  return story; 
}


function createStory() {
  
  const name = prompt("Enter a name:");
  const mood = prompt("Enter a mood:");
  const activity = prompt("Enter an activity:");

  
  const storyElements = [name, mood, activity];

  
  const story = tellStory(storyElements);

  
  console.log(story);
}


createStory();

//Homework Task 2:  array of 5 numbers
console.log("Homework Task 2 - array of 5 numbers")


function validateNumber(num) {
 
  return typeof num === 'number' && !isNaN(num);
}


function sumArray(numbers) {
  
  if (!Array.isArray(numbers) || numbers.length !== 5) {
      console.error("Please provide an array of exactly 5 numbers.");
      return;
  }

  let sum = 0;

  
  for (let i = 0; i < numbers.length; i++) {
      if (!validateNumber(numbers[i])) {
          console.error(`Error: ${numbers[i]} is not a valid number.`);
          return; 
      }
      sum += numbers[i]; 
  }

  
  console.log(`The sum of the array is: ${sum}`);
  
  
}

//Console log example for accepts a parameter and returns its type
const numbersArray = [10, 20, 30, 40, 50]; 
sumArray(numbersArray);

//Homework Task 3:  array of strings
console.log("Homework Task 3:  array of strings")
function concatenateStrings(arr) {
  
  return arr.join(' ');
}


const stringArray = ["Hello", "there", "students", "of", "SEDC", "!"];
const result = concatenateStrings(stringArray);
console.log(result); 

//Homework Task 4:  Loop from 1 to 20
console.log("Homework Task 4:  Loop from 1 to 20")
function concatenateNumbers() {
  let output = "";

  
  for (let i = 1; i <= 20; i++) {
      
      if (i % 2 === 0) {
          output += i + "\n"; 
      } else {
          output += i + " "; 
      }
  }

  console.log(output); 
}

// Call the function
concatenateNumbers();
//Homework Task 5: Looping structures
console.log("Homework Task 5: Looping structures")
function sumMaxMin(arr) {

  const filteredArr = arr.filter(item => typeof item === 'number');

  if (filteredArr.length === 0) {
      return "No valid numbers in the array.";
  }
  const max = Math.max(...filteredArr);
  const min = Math.min(...filteredArr);
  const sum = max + min;
  return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}


const arr = [3, 5, 6, 8, 11];
const result2 = sumMaxMin(arr);
console.log(result2); 


const mixedArr = [3, 'text', null, 5, 6, 8, 11, undefined];
const mixedResult = sumMaxMin(mixedArr);
console.log(mixedResult);

//Homework Task 6: Looping structures 2
console.log("Homework Task 6: Looping structures 2")
function getFullNames(firstNames, lastNames) {

  if (firstNames.length !== lastNames.length) {
      return "Error: Arrays must be of the same length.";
  }

  const fullNames = [];

  for (let i = 0; i < firstNames.length; i++) {
      const fullName = `${i + 1}. ${firstNames[i]} ${lastNames[i]}`;
      fullNames.push(fullName);
  }

  return fullNames;
}

const first = ["Bob", "Jill"];
const last = ["Gregory", "Wurtz"];
const full = getFullNames(first, last);

console.log(full);
