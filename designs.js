// Declare constants from id, why shouldn't I just use them as is? It works...
const sizePicker = document.getElementById('sizePicker');
const pixelCanvas = document.getElementById('pixelCanvas');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const colorPicker = document.getElementById('colorPicker');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', makeGrid);


// Define makeGrid()
function makeGrid(event) {
  // Prevent page refresh on 'submit'
  event.preventDefault();
  // Clear pixelCanvas
  pixelCanvas.replaceChildren();
  // Select size input
  var gridHeight = Number(inputHeight.value);
  var gridWidth = Number(inputWidth.value);
  // Build pixelCanvas table from input
  for (n = 1; n <= gridHeight; n++) {
    var row = document.createElement('tr');
    for (m = 1; m <= gridWidth; m++) {
        var cell = document.createElement('td');
        cell.addEventListener('click', function (event) {
          event.target.style.backgroundColor = colorPicker.value;
        });
        row.appendChild(cell);
    } pixelCanvas.appendChild(row);
  };
};
