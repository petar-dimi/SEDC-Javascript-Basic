//Homework Task 2:  Print all numbers from an array and the sum
console.log("Homework Task 2 - Print all numbers from an array and the sum")


 const numbers = [2, 4, 5];

 // Step 2: Select the list element and output elements
 const numberList = document.getElementById('numberList');
 const sumOutput = document.getElementById('sumOutput');
 const equationOutput = document.getElementById('equationOutput');

 
 numbers.forEach(number => {
     const listItem = document.createElement('li');
     listItem.textContent = number;
     numberList.appendChild(listItem);
 });

 
 const sum = numbers.reduce((acc, curr) => acc + curr, 0);

 
 sumOutput.textContent = `Sum of numbers: ${sum}`;

 const equation = numbers.join(' + ') + ' = ' + sum;
 equationOutput.textContent = `Equation: ${equation}`;