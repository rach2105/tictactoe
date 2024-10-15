const cells = document.querySelectorAll('.cell');
const resetBtn = document.getElementById('reset-btn');
let currentPlayer = 'X';
let gameStatus = Array(9).fill(null);

// Game logic
cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        const index = parseInt(cell.dataset.index);
        if (gameStatus[index] === null) {
            gameStatus[index] = currentPlayer;
            cell.textContent = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

// Check winner
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
        if (
            gameStatus[combination[0]] !== null &&
            gameStatus[combination[0]] === gameStatus[combination[1]] &&
            gameStatus[combination[1]] === gameStatus[combination[2]]
        ) {
            alert(`Player ${gameStatus[combination[0]]} wins!`);
            resetGame();
            return;
        }
    }

    if (!gameStatus.includes(null)) {
        alert('It\'s a draw!');
        resetGame();
    }
}

// Reset game
resetBtn.addEventListener('click', resetGame);

function resetGame() {
    gameStatus = Array(9).fill(null);
    cells.forEach((cell) => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
}
