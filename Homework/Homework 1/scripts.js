console.log("hello");
alert("hello SEDC");
//Homework Task 1: price of 30 phoes + tax
console.log("Homework Task 1: price of 30 phoes + tax")
let numberOfPhones = 30;
let phone = 119.95;
const tax = 0.05;
const priceOfPhonePlusTax = phone * (1 + tax);
const totalPrice = priceOfPhonePlusTax * numberOfPhones;
console.log(`The total price of ${numberOfPhones} phones including tax is $${totalPrice.toFixed(2)}`);

//Homework Task 2: minutes to seconds
console.log("Homework Task 2: minutes to seconds")
function MinutesToSeconds(minutes) {
const seconds = 60;
const convertedToSeconds = minutes * seconds;
console.log(`${minutes} minutes converted to seconds are ${convertedToSeconds}`);

}
//Console log example for Task 2: minutes to seconds
const sec = 60;
let minutes = 5;
let convetredToSeconds = minutes * sec;
console.log(convetredToSeconds);
console.log("You can also use the function MinutesToSeconds() and input a number in the brackets to use it yourself");


//Homework Task 3: Incrementing numbers

console.log("Homework Task 3: Incrementing numbers")
function IncrementingNumber(number){
let tempnumber = number
let Incrementednumber = tempnumber + 1;
console.log(`The number ${tempnumber} incremented by 1 is ${Incrementednumber}`);
}
//Console log example for Task 3: Incrementing numbers
const increment = 1;
let number = 5;
let incrementedNum = number + increment;
console.log(incrementedNum);
console.log("You can also use the function IncrementingNumber() and input a number in the brackets to use it yourself");



//Homework Task 4: Area of a triangle
console.log("Homework Task 4: Area of a triangle")
function AreaOfTriangle(base,height){
const half = 0.5;
let area = (base * height) * half;

console.log(`The area of a tringle with a base of ${base} and a height of ${height} is ${area}`);

}
//Console log example for Task 4: Area of a triangle
const half = 0.5;
let base = 15;
let height = 10
let tringleArea = (base * height) * half
console.log(tringleArea);
console.log("You can also use the function AreaOfTriangle() and input a base and a height in the brackets to use it yourself");


//Homework Task 5: Perimeter of a rectangle
console.log("Homework Task 5: Perimeter of a rectangle")
function PerimeterOfRectangle(lenght,widht){
const multiplier = 2;
let perimeter = (lenght + widht) * multiplier;

console.log(`The perimeter of a rectangle with a lenght of ${lenght} and a widht of ${widht} is ${perimeter}`);

}
//Console log example for Task 5: Perimeter of a rectangle
const multiplier = 2;
let lenght = 10;
let widht = 5
let perimeter = (lenght + widht) * multiplier
console.log(perimeter);
console.log("You can also use the function PerimeterOfRectangle() and input a lenght and a widht in the brackets to use it yourself");

//Homework Task 6: Area of circle
console.log("Homework Task 6: Area of circle")
function AreaOfCicle(radius){
const Pi = 3.14;
let circleArea = (radius * radius) * Pi;

console.log(`The area of a circle with a radius of ${radius} a is ${circleArea}`);

}
//Console log example for Task 6: Area of circle
const Pi  = 3.14; 
let radius = 10;

let area = (radius * radius) * Pi
console.log(area);
console.log("You can also use the function PerimeterOfRectangle() and input a lenght and a widht in the brackets to use it yourself");