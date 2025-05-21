const container = document.querySelector('#container');
let defaultGridSize = 16;


function createGrid(gridSize = defaultGridSize) {
    for (let i = 0; i < gridSize; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.display = 'flex';

        for (let j = 0; j < gridSize; j++){
            const square = document.createElement('div');
            square.classList.add('square');
            // Get the container's width
            let containerWidth = container.offsetWidth;
            // Get the container's height
            let containerHeight = container.offsetHeight;
            // Set the width and height of each square
            square.style.width = `${containerWidth / gridSize}px`;
            square.style.height = `${containerHeight/ gridSize}px`;
            square.style.border = '1px solid black';
            row.appendChild(square);
        }

        container.appendChild(row);
    }

    const squareHover = document.querySelectorAll('.row .square')

    for (let hover of squareHover){
        hover.addEventListener('mouseover', () => {
            hover.style.backgroundColor = randomColor();
        })
    }
}

function randomColor() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);

    let color = `rgb(${R},${G},${B})`;

    return color;
}



const resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', () => {
    const gridInput = document.querySelector('#grid-size');
    let gridInputValue = gridInput.value;
    
    if (gridInputValue > 100) {
        alert('Please enter a number less than or equal to 100');
    }
    else if (gridInputValue < 1) {
        alert('Please enter a number greater than or equal to 1');
    }
    else {
        container.innerHTML = '';
        createGrid(gridInputValue);
    }
})
createGrid();