const pixelBoard = document.getElementById('pixel-board');
const generateButton = document.getElementById('generate-board');
const boardSize = document.getElementById('board-size');

function generateInitialBoard(input) {
  for (let index = 0; index < input; index += 1) {
    const row = document.createElement('div');
    pixelBoard.appendChild(row);
    row.className = 'row';
    for (let secondIndex = 0; secondIndex < input; secondIndex += 1) {
      const pixel = document.createElement('div');
      row.appendChild(pixel);
      pixel.className = 'pixel';
    }
  }
}

window.onload = generateInitialBoard(5);

generateButton.onclick = function generateBoard() {
  pixelBoard.innerHTML = '';
  const input = boardSize.value;
  if (input === null) alert('Board inválido');
  generateInitialBoard(input);
};

const colorPalette = document.getElementById('color-palette');
const pixel = document.getElementsByClassName('pixel');
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].style.backgroundColor = 'white';
}

const color = document.getElementsByClassName('color');
const listOfColors = ['black', 'orange', 'yellow', 'red'];
for (let index = 0; index < color.length; index += 1) {
  color[index].style.backgroundColor = listOfColors[index];
}

colorPalette.onclick = function selectColor(event) {
  const selectedColor = document.querySelector('.selected');
  const colorAux = selectedColor;
  if (selectedColor) colorAux.classList.remove('selected');
  event.target.classList.add('selected');
};

pixelBoard.onclick = function paint(e) {
  const selectedColor = document.querySelector('.selected');
  if (e.target.className === 'pixel') {
    e.target.style.backgroundColor = selectedColor.style.backgroundColor;
  }
};

const clearButton = document.getElementById('clear-board');

clearButton.onclick = function clearBoard() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
};
