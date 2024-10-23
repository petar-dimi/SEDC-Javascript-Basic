alert("hello SEDC this is homework 05 ")
console.log("hello SEDC this is homework 05 ");


//Homework Task 1:  dynamic table
console.log("Homework Task 1 - dynamic table")

    document.getElementById('createTable').addEventListener('click', function() {
      
      const rows = parseInt(document.getElementById('numRows').value);
      const cols = parseInt(document.getElementById('numCols').value);
      const table = document.getElementById('dynamicTable');

      
      table.innerHTML = '';

      
      for (let i = 1; i <= rows; i++) {
          const row = document.createElement('tr'); 
          for (let j = 1; j <= cols; j++) {
              const cell = document.createElement('td'); 
              cell.textContent = `Row-${i} Column-${j}`; 
              row.appendChild(cell); 
          }
          table.appendChild(row); 
      }
  });