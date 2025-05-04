const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

// Grid settings
const cellSize = 20;
const cols = canvas.width / cellSize;
const rows = canvas.height / cellSize;

let grid = Array(cols).fill().map(() => Array(rows).fill(0));

let simulationInterval = null;
let isRunning = false;

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            const x = i * cellSize;
            const y = j * cellSize;
            
            ctx.fillStyle = grid[i][j] ? 'white' : 'black';
            ctx.fillRect(x, y, cellSize, cellSize);
            
            ctx.strokeStyle = '#ccc';
            ctx.strokeRect(x, y, cellSize, cellSize);
        }
    }
}

function toggleCell(col, row) {
    console.log("isAlive: ",isAlive(col,row));
    console.log("Neighbors: ",countNeighbors(col,row));
    grid[col][row] = grid[col][row] ? 0 : 1;
    drawGrid();
}
function isAlive(col,row){
    return grid[col][row] === 1
}

function countNeighbors(x,y){
   let c = 0;
   for (let i = x-1; i <= x+1; i++ ){
    for (let j = y-1; j <= y+1; j++){
        // X is under the limits
        let xvalid = i >= 0 && i < grid.length;
        // Y is under the limits
        let yvalid = j >= 0 && j < grid.length;
        // It isn't the center
        let cvalid = !(x==i && y==j)

        let valid = xvalid && yvalid && cvalid;
        if(valid){
            c += grid[i][j];
        }
    }
   }
   return c;
}

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const col = Math.floor(x / cellSize);
    const row = Math.floor(y / cellSize);
    
    toggleCell(col, row);
});

// Initial draw
drawGrid();
