alert("hello SEDC this is homework 07 ")
console.log("hello SEDC this is homework 07 ");


//Homework Task 1:  Create OBJECT animal
console.log("Homework Task 1 - Create OBJECT animal ")


const animal = {
  name: "", 
  kind: "",
  speak: function(message) {
      console.log(`${this.kind} says: '${message}'`);
  }
};


animal.name = prompt("Enter the name of the animal:");
animal.kind = prompt("Enter the kind of the animal:");


animal.speak("Hey bro!!!");