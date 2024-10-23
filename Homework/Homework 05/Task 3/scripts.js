//Homework Task 3:  recipe page from inputs
console.log("Homework Task 3 - recipe page from inputs")

document.getElementById('ingredientCount').addEventListener('input', function() {
    const count = parseInt(this.value);
    const ingredientInputs = document.getElementById('ingredientInputs');
    ingredientInputs.innerHTML = ''; 

    for (let i = 1; i <= count; i++) {
        const label = document.createElement('label');
        label.textContent = `Ingredient ${i}: `;
        const input = document.createElement('input');
        input.type = 'text';
        input.required = true;
        input.id = `ingredient${i}`;
        ingredientInputs.appendChild(label);
        ingredientInputs.appendChild(input);
        ingredientInputs.appendChild(document.createElement('br'));
    }
});


document.getElementById('recipeForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const recipeName = document.getElementById('recipeName').value;
    const ingredientList = document.getElementById('ingredientList');
    const recipeTitle = document.getElementById('recipeTitle');
    ingredientList.innerHTML = ''; 

   
    recipeTitle.textContent = recipeName;

   
    const count = parseInt(document.getElementById('ingredientCount').value);
    for (let i = 1; i <= count; i++) {
        const ingredient = document.getElementById(`ingredient${i}`).value;
        const listItem = document.createElement('li');
        listItem.textContent = ingredient;
        ingredientList.appendChild(listItem);
    }
});
