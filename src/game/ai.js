import { playPiece } from '../game/mechanics.js'

export function playAIPiece(currentPlayer) {
  let played = false;
  do {
    const random = Math.floor(Math.random() * 7);
    played = playPiece(random, currentPlayer);
  }
  while (played === false);
}