alert("hello SEDC this is homework 05 ")
console.log("hello SEDC this is homework 05 ");


//Homework Task 1:  Change the page with JavaScript
console.log("Homework Task 1 - aChange the page with JavaScript")
const headers = document.querySelectorAll('h1');

headers.forEach(header => {
    header.textContent = 'Homework 03';
});


const paragraphs = document.querySelectorAll('p');


paragraphs.forEach(paragraph => {
    paragraph.textContent = 'task 1';
});

