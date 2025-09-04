# Game of Life

> Disclaimer: This is a test project using [Cursor](https://cursor.sh/). While the core Game of Life logic was created manually (JS mostly), most of the UI and styling was generated with the help of Cursor's AI assistance.

A JavaScript implementation of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) using HTML5 Canvas.

## Description

This project is an interactive implementation of Conway's Game of Life, a cellular automaton devised by mathematician John Conway in 1970. The game follows simple rules to simulate the evolution of a grid of cells, where each cell can be either alive or dead.

### Demo

[See it here](https://gol.quantium.com.mx/)

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
- ~~Adjustable simulation speed~~ ✔️
- Common Game of Life patterns to load into the grid
- List of different saved states

## Technologies Used

- HTML5 Canvas
- JavaScript (ES6+)
- CSS3
- Docker
- NodeJs
- Pug

## Setup and Installation

Clone the repository:

```bash
git clone https://github.com/Quantium/gameoflife.git
cd gameoflife
```

Open `index.html` in your web browser

## Run the app

Use the npm commands to run the app

### Build

If you edit index.pug, then build it into dist/html by running:

```bash
npm run build
```

### Watch

Or you can watch for changes in the index.pug file and build dist/index.html each time you modify it by running:

```bash
npm run watch
```

### Serve with node

You can run the app on an HTTP server by running:

```bash
npm start
```

## Usage

- Click on cells to toggle their state (alive/dead)
- Use the Start/Stop button to start/stop the simulation
- Use the Clear button to reset the grid
- ~~Use the Random button to generate a random initial state~~ Not ready yet
- ~~Adjust the grid size and simulation speed using the provided controls~~ Not ready yet

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
