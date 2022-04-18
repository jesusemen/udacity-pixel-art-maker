const tableCanvas = document.querySelector('.table-canvas');
const sizePicker = document.querySelector('.sizePicker')

function makeTable() {
   let tableHeight = document.querySelector('.height-input').value;
   let tablewidth = document.querySelector('.width-input').value;
   while (tableCanvas.firstChild){
       tableCanvas.removeChild(tableCanvas.firstChild);
      
   }

   for(let i = 1; i <= tableHeight; i++) {
      let tableRow = document.createElement('tr');
      tableCanvas.appendChild(tableRow);
      for (let j = 1; j <= tablewidth; j++) {
          let tableCell = document.createElement('td');
          tableRow.appendChild(tableCell);

          tableCell.addEventListener('mousedown', function(){
              const cellColor = document.querySelector('.pick-color').value;
              this.style.backgroundColor = cellColor;
          })
      }
   }

}

makeTable(23, 23);
sizePicker.addEventListener('submit', function(e){
    e.preventDefault();
    makeTable();
})

