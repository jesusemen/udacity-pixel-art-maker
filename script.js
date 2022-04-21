
$(document).ready(function () { // Makes it possible to start to manipulate the document
    $('#size-picker').submit(function makeGrid(grid) {  // Creates the grid upon clicking the button 'Submit'
      $('table tr').remove(); // Lets the grid be cleared when hitting the 'Submit' button again
      var tableHeight = $('#height-input').val(); // Allows the user to add a chosen value inside the input box to add rows 
      var tableWidth = $('#width-input').val(); // Allows the user to add a chosen value inside the 2nd input box to add columns
      for (var i = 1; i <= tableHeight; i++) { 
        $('table').append("<tr></tr>"); // This loop creates a row of cells
        for (var j = 1; j <= tableWidth; j++) {
          $('tr:last').append("<td></td>"); // This loop adds a cell after every row
          $('td').attr("class", 'cells') // For every 'td', a class of 'cells' is created
        }
      }
      grid.preventDefault(); // Prevents the grid to be deleted after it is created
  
      $('.cells').click(function (event) { // The function allows the user to color a cell on click
        var draw = $('#color').val();
        $(event.target).css('background-color', draw); // Lets the chosen color on a click event to be added to the grid
      });
    }); 
  });
  












// const tableCanvas = document.querySelector('.table-canvas');
// const sizePicker = document.querySelector('.sizePicker')

// function makeTable() {
//    let tableHeight = document.querySelector('.height-input').value;
//    let tablewidth = document.querySelector('.width-input').value;
//    while (tableCanvas.firstChild){
//        tableCanvas.removeChild(tableCanvas.firstChild);
      
//    }

//    for(let i = 1; i <= tableHeight; i++) {
//       let tableRow = document.createElement('tr');
//       tableCanvas.appendChild(tableRow);
//       for (let j = 1; j <= tablewidth; j++) {
//           let tableCell = document.createElement('td');
//           tableRow.appendChild(tableCell);

//           tableCell.addEventListener('mousedown', function(){
//               const cellColor = document.querySelector('.pick-color').value;
//               this.style.backgroundColor = cellColor;
//           })
//       }
//    }

// }


// sizePicker.addEventListener('submit', function(e){
    
//     makeTable();
// })

