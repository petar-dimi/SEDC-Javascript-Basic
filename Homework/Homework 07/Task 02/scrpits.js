alert("hello SEDC this is homework 07 ")
console.log("hello SEDC this is homework 07 ");


//Homework Task 2:   reading status of some book
console.log("Homework Task 2 -  reading status of some book ")



const book = {
  title: "",
  author: "",
  readingStatus: false,
  getStatus: function() {
      if (this.readingStatus) {
          return `Already read '${this.title}' by ${this.author}.`;
      } else {
          return `You still need to read '${this.title}' by ${this.author}.`;
      }
  }
};


book.title = prompt("Enter the title of the book:");
book.author = prompt("Enter the author of the book:");
book.readingStatus = confirm("Have you read this book? (OK for Yes, Cancel for No)");


console.log(book.getStatus());