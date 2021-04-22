import board from './board.js';
import getDiagonals from './diagonals.js'

let currentPlayer;

export function playPiece(row, current) {
  currentPlayer = current;
  for (let col = 0; col < 6; col ++) {
    if (board[0][row] !== 0) { // Full row
      return false;
    } else if (board[5][row] === 0) { // Empty row
      setBoard(5, row);
      return true;
    } else {
      if (board[col][row] !== 0) {
        setBoard(col - 1, row);
        return true;
      }
    }
  }
}

function setBoard(col, row) {
  board[col][row] = currentPlayer;
  const circle = document.querySelector(`[data-col="${col}"][data-row="${row}"]`);
  circle.classList.add('move');
  if (currentPlayer === 1) {
    circle.classList.add('player-one');
  } else {
    circle.classList.add('player-two');
  }
}

export function checkForWin() {
  const oneWin = '1111';
  const twoWin = '2222';

  // Horizontal
  for (let col = 0; col < 6; col ++) {
    const horizontal = board[col].join('');
  if (horizontal.includes(oneWin)) {
    return 1;
  } else if (horizontal.includes(twoWin)) {
    return 2;
  }
  }

 // Vertical
  const matrix = [[],[],[],[],[],[],[]];
  for (let row = 0; row < 7; row ++) {
    for (let col = 0; col < 6; col ++) {
      matrix[row].push(board[col][row])
    }
  }

  for (let row = 0; row < 7; row ++) {
    const vertical = matrix[row].join('');
  if (vertical.includes(oneWin)) {
    return 1;
  } else if (vertical.includes(twoWin)) {
    return 2;
  }
  }

  // Diagonal
  const diagonals = getDiagonals();
  
  for (let i = 0; i < diagonals.length; i ++) {
    const diagonal = diagonals[i];
    if (diagonal.includes(oneWin)) {
      return 1;
    } else if (diagonal.includes(twoWin)) {
      return 2;
    }
  }

  return 0;
}