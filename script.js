const container = document.getElementById('container');
const screenDiv = document.querySelector('.screen');
const userInput = prompt('Enter the number of divs you want to create:');
const eraserBtn = document.getElementById('Eraser');
const blackBtn = document.getElementById('black');
const redBtn = document.getElementById('red');
const newGrid = document.getElementById('new-grid')


function createGrid(numSquares) {
  const totalSquares = numSquares * numSquares;
  container.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;
  for (let i = 0; i < totalSquares; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('cubics');
    container.appendChild(gridDiv);
  }
}

createGrid(16);

newGrid.addEventListener('click', () => {
  // Prompt the user to enter the number of squares they want for the new grid
  const userInput = prompt('Enter the number of squares you want for the new grid:');
  // Clear the existing grid
  container.innerHTML = '';
  // Generate a new grid based on the user's input
  createGrid(userInput);
});


for (let i = 0; i < userInput; i++) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('cubics');
  container.append(newDiv);
}

redBtn.addEventListener('click', () => {
  const divs = document.querySelectorAll('.cubics');
  divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'red';
    });
  });
});

blackBtn.addEventListener('click', () => {
  const divs = document.querySelectorAll('.cubics');
  divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'black';
    });
  });
});

eraserBtn.addEventListener('click', () => {
  const divs = document.querySelectorAll('.cubics');
  divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'white';
    });
  });
});