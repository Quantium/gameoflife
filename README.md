# Game of Life

 > Disclaimer: This readme [only] was generated with AI (Except this paragraph). the code don't tough. I've doesn't even use autocomplete because the only reason to do this is to have some fun.

A JavaScript implementation of Conway's Game of Life using HTML5 Canvas.

## Description

This project is an interactive implementation of Conway's Game of Life, a cellular automaton devised by mathematician John Conway in 1970. The game follows simple rules to simulate the evolution of a grid of cells, where each cell can be either alive or dead.

## Rules of the Game

1. Any live cell with fewer than two live neighbors dies (underpopulation)
2. Any live cell with two or three live neighbors lives on to the next generation
3. Any live cell with more than three live neighbors dies (overpopulation)
4. Any dead cell with exactly three live neighbors becomes a live cell (reproduction)

![Game Of Life Sample](./docs/gameoflife-sample.gif)

## Features

- Interactive grid where users can click to toggle cell states
- Start/Stop button to control the simulation
- Clear button to reset the grid

### To Do

- Random button to generate a random initial state
- Adjustable grid size
- Adjustable simulation speed
- Visual representation of live and dead cells

## Technologies Used

- HTML5 Canvas
- JavaScript (ES6+)
- CSS3

## Setup and Installation

Clone the repository:

```bash
git clone https://github.com/Quantium/gameoflife.git
cd gameoflife
```

Open `index.html` in your web browser

## Usage

- Click on cells to toggle their state (alive/dead)
- Use the Start/Stop button to start/stop the simulation
- Use the Clear button to reset the grid
- ~~Use the Random button to generate a random initial state~~
- ~~Adjust the grid size and simulation speed using the provided controls~~

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
