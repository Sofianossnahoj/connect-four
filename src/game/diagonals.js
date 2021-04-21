import board from './board.js'

export default function getDiagonals() {
  const diagonals = [];

  diagonals.push(
    // Direction back-slash
    board[2][0].toString() + board[3][1].toString() + board[4][2].toString() + board[5][3].toString(),
    board[1][0].toString() + board[2][1].toString() + board[3][2].toString() + board[4][3].toString() + board[5][4].toString(),
    board[0][0].toString() + board[1][1].toString() + board[2][2].toString() + board[3][3].toString() + board[4][4].toString() + board[5][5].toString(),
    board[0][1].toString() + board[1][2].toString() + board[2][3].toString() + board[3][4].toString() + board[4][5].toString() + board[5][6].toString(),
    board[0][2].toString() + board[1][3].toString() + board[2][4].toString() + board[3][5].toString() + board[4][6].toString(),
    board[0][3].toString() + board[1][4].toString() + board[2][5].toString() + board[3][6].toString(),
    // Direction slash
    board[0][3].toString() + board[1][2].toString() + board[2][1].toString() + board[3][0].toString(),
    board[0][4].toString() + board[1][3].toString() + board[2][2].toString() + board[3][1].toString() + board[4][0].toString(),
    board[0][5].toString() + board[1][4].toString() + board[2][3].toString() + board[3][2].toString() + board[4][1].toString() + board[5][0].toString(),
    board[0][6].toString() + board[1][5].toString() + board[2][4].toString() + board[3][3].toString() + board[4][2].toString() + board[5][1].toString(),
    board[1][6].toString() + board[2][5].toString() + board[3][4].toString() + board[4][3].toString() + board[5][2].toString(),
    board[2][6].toString() + board[3][5].toString() + board[4][4].toString() + board[5][3].toString(),
  )
  
  return diagonals;
}