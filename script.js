// Título
const title = document.getElementById('title');
title.style = 'font-family: New Tegomin';

// Adiciona background-color em todos os quadrados da paleta de cores

const blackSquare = document.getElementById('black');
blackSquare.style = 'background-color: black';

const redSquare = document.getElementById('red');
redSquare.style = 'background-color: red';

const orangeSquare = document.getElementById('orange');
orangeSquare.style = 'background-color: orange';

const yellowSquare = document.getElementById('yellow');
yellowSquare.style = 'background-color: yellow';

// Criando seção para armazenar o botão "limpar";

const sectionPixelBoard = document.createElement('section');
document.body.appendChild(sectionPixelBoard);

const button = document.createElement('button');
button.innerText = 'Limpar';
button.id = 'clear-board';
sectionPixelBoard.appendChild(button);

function changeColor() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    const removeColor = pixels[index];
    removeColor.style.backgroundColor = 'white';
  }
}
button.addEventListener('click', changeColor);

// Criando tabela

const divPixels = document.createElement('div');
divPixels.id = 'pixel-board';
document.body.appendChild(divPixels);

for (let index = 1; index <= 5; index += 1) {
  const tableLines = document.createElement('tr');
  divPixels.appendChild(tableLines);

  for (let indice = 1; indice <= 5; indice += 1) {
    const columnLines = document.createElement('td');
    columnLines.classList = 'pixel';
    columnLines.addEventListener('click', (buttom) => {
      if (document.querySelector('.selected')) {
        const color = document.querySelector('.selected').style.backgroundColor;
        buttom.target.style.backgroundColor = color;
      }
    });
    tableLines.appendChild(columnLines);
  }

  // Criando botão

  const firstEventButton = document.getElementById('color-palette');

  firstEventButton.addEventListener('click', (event2) => {
    if (document.querySelector('.selected') !== null) {
      (document.querySelector('.selected').classList.remove('selected'));
    }
    event2.target.classList.add('selected');
  });
}
