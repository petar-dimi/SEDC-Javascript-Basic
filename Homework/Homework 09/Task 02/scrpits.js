


//Homework Task 2 : header generator
console.log("Homework Task 1 -header generator")



$(document).ready(function() {
    $('#generateButton').click(function() {
        var text = $('#headerText').val().trim(); 
        var color = $('#headerColor').val().trim(); 
        var messageElement = $('#message');
        
        
        messageElement.text('');
        
        
        if (text === '') {
            messageElement.text('Error: Header text cannot be empty.').addClass('error');
            return;
        }

        if (!isValidColor(color)) {
            messageElement.text('Error: Invalid color.').addClass('error');
            return;
        }

        
        var newHeader = $('<h1></h1>').text(text).css('color', color);
        $('#headerContainer').append(newHeader);
    });
});


function isValidColor(color) {
    const s = new Option().style;
    s.color = color;
    return s.color !== '';
}