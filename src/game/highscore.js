export function saveWinner(winner, count, ai) {
  const storage = window.localStorage;
  const win = { name: winner, moves: count };
  console.log(win);
  if (ai) {
    let highscore = storage.getItem('highscoreAI') ?? "[]";
    console.log(highscore);
    highscore = JSON.parse(highscore);
    highscore.push(win);
    storage.setItem('highscoreAI', JSON.stringify(highscore));
  } else {
    let highscore = storage.getItem('highscore') ?? "[]";
    console.log(highscore);
    highscore = JSON.parse(highscore);
    highscore.push(win);
    storage.setItem('highscore', JSON.stringify(highscore));
  }
}