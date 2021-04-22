import { playPiece } from '../game/mechanics.js'

export function playAIPiece() {
  let played = false;
  do {
    const random = Math.floor(Math.random() * 7);
    played = playPiece(random, 2);
  }
  while(played === false);
}