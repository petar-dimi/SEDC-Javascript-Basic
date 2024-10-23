console.log("hello");
alert("hello SEDC This is homework from class 02");

//Homework Task 1: maximum between two numbers
console.log("Homework Task 1: maximum between two numbers")
function findMaxOfTwo(num1, num2) {
  if (num1 === num2) {
    console.log(`The numbers are even` );
      
      
  } else if (num1 > num2) {
    console.log(`The maximum number between ${num1} and ${num2} is ${num1}`);
    
  }
  else if (num2 > num1) {
    console.log(`The maximum number between ${num1} and ${num2} is ${num2}`);
    
  }
 
}

 
// //Console log example for maximum between two numbers
let number1 = 10;  
let number2 = 20;  
const MaxOfTwo = findMaxOfTwo(number1, number2);

console.log("You can also use the function findMaxOfTwo() and input two numbers in the brackets to use it yourself");


//Homework Task 2: maximum between three numbers.
console.log("Homework Task 2: maximum between three numbers.")
function findMaxOfThree(num1, num2, num3) {
  if (num1 === num2 && num2 === num3) {
    console.log("The numbers are even");
    
  }
  else if (num1 >= num2 && num1 >= num3) {
    console.log(`The maximum number between ${num1}, ${num2} and ${num3} is ${num1}`);
  } else if (num2 >= num1 && num2 >= num3) {
    console.log(`The maximum number between ${num1}, ${num2} and ${num3} is ${num2}`);
  } else   {
    console.log(`The maximum number between ${num1}, ${num2} and ${num3} is ${num3}`);
  }
 
}

// //Console log example for maximum between three numbers
let number3 = 10;  
let number4 = 20;
let number5 = 40; 
const MaxOfThree = findMaxOfThree(number3, number4, number5);

console.log("You can also use the function findMaxOfThree() and input three numbers in the brackets to use it yourself");

//Homework Task 3: check whether a number is negative, positive or zero.
console.log("Homework Task 3: check whether a number is negative, positive or zero.")
function checkNumberState(num) {
  if (num > 0) {
      console.log(`${num} is a positive number.`);
  } else if (num < 0) {
      console.log(`${num} is a negative number.`);
  } else {
      console.log(`${num} is zero.`);
  }
}

// //Console log example for whether a number is negative, positive or zero
const number6 = -5
checkNumberState(number6)
console.log("You can also use the function checkNumberState() and input a number in the brackets to use it yourself");

//Homework Task 4:  input between 1-7 (week number) and print week day
console.log("Homework Task 4: input between 1-7 (week number) and print week day")
function getWeekday(weekNumber) {
  switch(weekNumber) {
      case 1:
          console.log(`${weekNumber} corresponds to Monday`);
          break;
      case 2:
          console.log(`${weekNumber} corresponds to Tuesday`);
          break;
      case 3:
          console.log(`${weekNumber} corresponds to Wednesday`);
          break;
      case 4:
          console.log(`${weekNumber} corresponds to Thursday`);
          break;
      case 5:
          console.log(`${weekNumber} corresponds to Friday`);
          break;
      case 6:
          console.log(`${weekNumber} corresponds to Saturday`);
          break;
      case 7:
          console.log(`${weekNumber} corresponds to Sunday`);
          break;
      default:
          console.log("Invalid input. Please enter a number between 1 and 7.");
  }
}
// //Console log example for input between 1-7 (week number) and print week day
const day = 5;
getWeekday(day);

console.log("You can also use the function getWeekday() and input a number between 1 and 7 in the brackets to use it yourself");



//Homework Task 5: check if user typed an input that is a number or not
console.log("Homework Task 5: heck if user typed an input that is a number or not.")
function checkIfNumber(input) {
  
  const inputString = String(input).trim();

  
  if (!isNaN(inputString) && inputString !== '') {
      console.log(`${inputString} is a number.`);
  } else {
      console.log(`${inputString} is not a number.`);
  }
}

// //Console log example for whether a number is negative, positive or zero
const userInput = " ";
checkIfNumber(userInput);
console.log("You can also use the function checkIfNumber()  and input a number in the brackets to use it yourself");


//Homework Task 6:  marks of five subjects
console.log("Homework Task 6: marks of five subjects")
function calculateGrade(physics, chemistry, biology, mathematics, computer) {
  
  const totalMarks = physics + chemistry + biology + mathematics + computer;
  const percentage = (totalMarks / 500) * 100;

 
  let grade;
  if (percentage >= 90) {
      grade = 'A';
  } else if (percentage >= 80) {
      grade = 'B';
  } else if (percentage >= 70) {
      grade = 'C';
  } else if (percentage >= 60) {
      grade = 'D';
  } else if (percentage >= 40) {
      grade = 'E';
  } else {
      grade = 'F';
  }

  
  console.log(`Total Marks: ${totalMarks}`);
  console.log(`Percentage: ${percentage.toFixed(2)}%`);
  console.log(`Grade: ${grade}`);
}
// //Console log example for marks of five subjects
const num1 = 90;
const num2 = 89;
const num3 = 75;
const num4 = 70;
const num5 = 80;
calculateGrade(num1,num2,num3,num4,num5)
console.log("You can also use the function calculateGrade and input grades for each subject in the brrackets to use it yourself");
