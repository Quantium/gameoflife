# Game of Life

A JavaScript implementation of Conway's Game of Life using HTML5 Canvas.

## Description

This project is an interactive implementation of Conway's Game of Life, a cellular automaton devised by mathematician John Conway in 1970. The game follows simple rules to simulate the evolution of a grid of cells, where each cell can be either alive or dead.

## Rules of the Game

1. Any live cell with fewer than two live neighbors dies (underpopulation)
2. Any live cell with two or three live neighbors lives on to the next generation
3. Any live cell with more than three live neighbors dies (overpopulation)
4. Any dead cell with exactly three live neighbors becomes a live cell (reproduction)

## Features

- Interactive grid where users can click to toggle cell states
- Play/Pause button to control the simulation
- Clear button to reset the grid
- Random button to generate a random initial state
- Adjustable grid size
- Adjustable simulation speed
- Visual representation of live and dead cells

## Technologies Used

- HTML5 Canvas
- JavaScript (ES6+)
- CSS3

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gameoflife.git
cd gameoflife
```

2. Open `index.html` in your web browser

## Usage

- Click on cells to toggle their state (alive/dead)
- Use the Play/Pause button to start/stop the simulation
- Use the Clear button to reset the grid
- Use the Random button to generate a random initial state
- Adjust the grid size and simulation speed using the provided controls

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 