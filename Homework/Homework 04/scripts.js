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