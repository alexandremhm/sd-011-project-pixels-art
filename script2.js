const colorPaletteContainer = document.querySelector('#color-palette');
colorPaletteContainer.addEventListener('click', (event) => {
  const searchElement = document.querySelector('.selected');
  searchElement.classList.remove('selected');
  const colorPaletteSelected = event.target;
  colorPaletteSelected.classList.add('selected');
});

// Para adicionar a logica abaixo de trocar as cores dos pixels eu utilizei o metodo getComputedStyle
// acessado por este link: https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp

const pixelBoardSquare = document.querySelector('#pixel-board');
pixelBoardSquare.addEventListener('click', (event2) => {
  const colorSelected = document.querySelector('.selected');
  const pixelToPrint = event2.target;
  pixelToPrint.style.backgroundColor = window.getComputedStyle(colorSelected).backgroundColor;
});

const buttonClearColor = document.querySelector('#clear-board');
buttonClearColor.addEventListener('click', () => {
  const pixelsColored = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelsColored.length; index += 1) {
    pixelsColored[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
});
