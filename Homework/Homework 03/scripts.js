alert("hello SEDC this is homework 03 ")
console.log("hello SEDC this is homework 03 ");


//Homework Task 1:  ccepts a parameter and returns its type
console.log("Homework Task 1 - accepts a parameter and returns its type ")
function printType(value) {
  const type = typeof value;
  console.log(`The type of the value is: ${type}`);
}

// //Console log example for accepts a parameter and returns its type
printType({});               
printType(true);             
printType(42);               
printType("Hello, world!");  
printType(undefined);        
console.log("You can also use the function printType() and input defferent types in the brackets to use it yourself");

//Homework Task 2: converting human to dog
console.log("Homework Task 2 - converting human to dog")
function calculateAge(age,DogToHuman = false) {
  if (DogToHuman) {
      
      return age / 7;
  } else {
      
      return age * 7;
  }
}

// //Console log example for converting human to dog
console.log(`Your dog's age in human years: ${calculateAge(3)}`); 
console.log(`Your human age in dog years: ${calculateAge(21, true)}`); 
console.log("You can also use the function calculateAge() and input dog years first and true after if you want to use the dog to human conversion option in the brackets to use it yourself");

//Homework Task 3: ATM
console.log("Homework Task 3 - ATM")
let accountBalance = 1000; 

function atm() {
    
    let requestedAmount = parseFloat(prompt("Enter the amount you want to withdraw:"));

    
    if (isNaN(requestedAmount) || requestedAmount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    
    if (requestedAmount > accountBalance) {
        alert("Not enough money.");
    } else {
        
        accountBalance -= requestedAmount;
        alert(`You have withdrawn: $${requestedAmount}. Money left in the account: $${accountBalance}.`);
    }
}


atm();

