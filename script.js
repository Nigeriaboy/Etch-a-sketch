const container = document.querySelector('#container');
let gridSize = 16;


function createGrid(gridSize) {
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
}

createGrid();