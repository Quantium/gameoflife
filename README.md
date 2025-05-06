# Game of Life

> Disclaimer: This readme was [partially] generated with AI (except this paragraph). The code was not touched. I didn't even use autocomplete because the only reason to do this is to have some fun.

A JavaScript implementation of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) using HTML5 Canvas.

## Description

This project is an interactive implementation of Conway's Game of Life, a cellular automaton devised by mathematician John Conway in 1970. The game follows simple rules to simulate the evolution of a grid of cells, where each cell can be either alive or dead.

### Demo

[See it here](http://quantium-gameoflife.s3-website-us-east-1.amazonaws.com/)

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

### Or with Docker

If you don't want to install Node.js, you can also use the Docker image by running:

```bash
docker build -t gameoflife .
docker run -p 8000:8000 gameoflife
```

## Deploy

There is a command to deploy to S3 in the package.json file. It points to one of my buckets: _s3://quantium-gameoflife_. Install the AWS CLI and change the bucket URL to deploy it to one of yours.

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
