const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

// Grid settings
let speed = 100;
let cellSize = 20;
let cols = canvas.width / cellSize;
let rows = canvas.height / cellSize;
let grid = Array(cols).fill().map(() => Array(rows).fill(0));
let gridHistory = [];

let simulationInterval = null;
let isRunning = false;

const emptyBanner = document.getElementById('emptyBanner');
const closeBanner = document.getElementById('closeBanner');

function init(cSize){
    cellSize = cSize;
    cols = canvas.width / cellSize;
    rows = canvas.height / cellSize;
    if(localStorage["gridStatus"]){
        grid = decompressGrid(localStorage["gridStatus"]);
    } else {
        grid = Array(cols).fill().map(() => Array(rows).fill(0));
    } 
}

function drawGrid() {
    addSavedState();
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
    grid[col][row] = grid[col][row] ? 0 : 1;
    drawGrid();
    updateForwardAndStartButtons();
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

function updateStepBackButton() {
  stepBackButton.disabled = gridHistory.length === 0;
  if (stepBackButton.disabled) {
    stepBackButton.classList.add('opacity-50', 'cursor-not-allowed');
  } else {
    stepBackButton.classList.remove('opacity-50', 'cursor-not-allowed');
  }
}

function isGridAllDead() {
  return grid.every(col => col.every(cell => cell === 0));
}

function showEmptyBanner() {
  emptyBanner.style.display = 'flex';
  // Hide after 5 seconds (5000 ms)
  setTimeout(() => {
    emptyBanner.style.display = 'none';
  }, 2000);
}

closeBanner.addEventListener('click', () => {
  emptyBanner.style.display = 'none';
});

function updateForwardAndStartButtons() {
  const isEmpty = isGridAllDead();
  startButton.disabled = isEmpty;
  stepForwardButton.disabled = isEmpty;
  if (isEmpty) {
    startButton.classList.add('opacity-50', 'cursor-not-allowed');
    stepForwardButton.classList.add('opacity-50', 'cursor-not-allowed');
  } else {
    startButton.classList.remove('opacity-50', 'cursor-not-allowed');
    stepForwardButton.classList.remove('opacity-50', 'cursor-not-allowed');
  }
}

function nextGeneration() {
    // Save a deep copy of the current grid to history
    gridHistory.push(grid.map(row => row.slice()));
    let newGrid = grid.map(row => row.slice());
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let neighbors = countNeighbors(i,j);
            let alive = isAlive(i,j);
            newGrid[i][j] = +(neighbors == 3 || (alive && neighbors == 2))
        }
    }
    grid = newGrid.map(row => row.slice());
    drawGrid();
    updateStepBackButton();
    updateForwardAndStartButtons();

    // Stop simulation if grid is all dead
    if (isGridAllDead()) {
      stopSimulation();
      startIcon.classList.remove('fa-stop');
      startIcon.classList.add('fa-play');
      showEmptyBanner();
    }
}

function startSimulation() {
    if (!isRunning) {
        isRunning = true;
        simulationInterval = setInterval(nextGeneration, speed);
    }
}

function stopSimulation() {
    if (isRunning) {
        isRunning = false;
        clearInterval(simulationInterval);
        simulationInterval = null;
    }
}

// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }
// Functions to compress and decompress the grid
// The compression returns a string of numbers separated by commas
function compressGrid(g){
    let g2 = grid.map((v) => parseInt(v.join(""),2))
    return g2.join();
}
function decompressGrid(s){
  let g = s.split(",");
  var l = g.length;
  let g2 = g.map((v) => {
    let tv = parseInt(v).toString(2).split("").map(v => parseInt(v));
    let nv = Array(l-tv.length).fill(0).concat(tv);
    return nv
  })
  return g2
}

// Function to add a saved state to the list
function addSavedState() {
    if (storageAvailable("localStorage")) {
        localStorage.setItem("gridStatus",compressGrid(grid));
    } else {
        console.warn("No local storage");
    }
}


  

const startButton = document.getElementById('startButton');
const startIcon = document.getElementById('startIcon');
const clearButton = document.getElementById('clearButton');
const saveButton = document.getElementById('saveButton');
const speedSlider = document.getElementById('speedSlider');
const speedValue = document.getElementById('speedValue');
const stepBackButton = document.getElementById('stepBackButton');
const stepForwardButton = document.getElementById('stepForwardButton');

// Speed slider handler
speedSlider.addEventListener('input', (event) => {
  speed = parseInt(event.target.value);
  speedValue.textContent = `${speed}ms`;

  // If simulation is running, restart it with the new speed
  if (isRunning) {
    stopSimulation();
    startSimulation();
  }
});

// Step buttons handlers
stepBackButton.addEventListener('click', () => {
    if (gridHistory.length > 0) {
        grid = gridHistory.pop(); // Restore the previous state
        drawGrid();
        updateStepBackButton();
        updateForwardAndStartButtons();
    }
});

stepForwardButton.addEventListener('click', () => {
    nextGeneration();
});

startButton.addEventListener('click', () => {
    if (isRunning) {
        stopSimulation();
        // Toggle to play icon
        startIcon.classList.remove('fa-stop');
        startIcon.classList.add('fa-play');
    } else {
        startSimulation();
        // Toggle to stop icon
        startIcon.classList.remove('fa-play');
        startIcon.classList.add('fa-stop');
    }
});

clearButton.addEventListener('click', () => {
    grid = Array(cols).fill().map(() => Array(rows).fill(0));
    gridHistory = []; // Clear history as well
    drawGrid();
    updateStepBackButton();
    updateForwardAndStartButtons();
});

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const col = Math.floor(x / cellSize);
    const row = Math.floor(y / cellSize);
    
    toggleCell(col, row);
});

init(10);
drawGrid();

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        grid,
        toggleCell,
        drawGrid,
        cols,
        rows,
        cellSize
    };
}

// On page load
updateStepBackButton();
updateForwardAndStartButtons();
