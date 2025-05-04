const mockContext = {
    clearRect: jest.fn(),
    fillStyle: '',
    fillRect: jest.fn(),
    strokeStyle: '',
    strokeRect: jest.fn()
};

const mockCanvas = {
    getContext: jest.fn(() => mockContext),
    width: 600,
    height: 600,
    getBoundingClientRect: jest.fn(() => ({
        left: 0,
        top: 0
    })),
    addEventListener: jest.fn((event, callback) => {
        if (event === 'click') {
            mockCanvas.clickCallback = callback;
        }
    })
};

document.getElementById = jest.fn(() => mockCanvas);
document.body.appendChild = jest.fn();

// Import the game logic
const game = require('../index.js');

describe('Game of Life', () => {
    beforeEach(() => {
        // Clear all mocks before each test
        jest.clearAllMocks();
    });

    test('canvas dimensions are set correctly', () => {
        expect(mockCanvas.width).toBe(600);
        expect(mockCanvas.height).toBe(600);
    });

    test('grid dimensions are correct', () => {
        const expectedCols = 600 / 20;
        const expectedRows = 600 / 20;
        expect(game.grid.length).toBe(expectedCols);
        expect(game.grid[0].length).toBe(expectedRows);
    });

    test('grid is initialized with zeros', () => {
        const firstCell = game.grid[0][0];
        expect(firstCell).toBe(0);
    });

    test('clicking on a cell toggles it from dead to alive', () => {
        expect(game.grid[1][1]).toBe(0);
        
        // Simulate click at position (25, 25) which should hit cell (1,1)
        const clickEvent = {
            clientX: 25,
            clientY: 25
        };
        
        mockCanvas.clickCallback(clickEvent);
        
        expect(game.grid[1][1]).toBe(1);
    });

    test('clicking on a cell toggles it from alive to dead', () => {
        game.grid[1][1] = 1;
        
        expect(game.grid[1][1]).toBe(1);
        
        const clickEvent = {
            clientX: 25,
            clientY: 25
        };
        
        mockCanvas.clickCallback(clickEvent);
        
        expect(game.grid[1][1]).toBe(0);
    });
}); 