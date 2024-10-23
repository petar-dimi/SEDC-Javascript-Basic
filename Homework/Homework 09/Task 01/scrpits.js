alert("hello SEDC this is homework 09 ")
console.log("hello SEDC this is homework 09 ");


//Homework Task 1 :greeting app
console.log("Homework Task 1 - greeting app ")



$(document).ready(function() {
    $('#greetButton').click(function() {
        var name = $('#nameInput').val();
        $('#greeting').text('Hello there ' + name + '!'); 
    });
});