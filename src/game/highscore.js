export function saveWinner(winner, count, ai) {
  const storage = window.localStorage;
  const win = { name: winner, moves: count };
  if (ai) {
    let highscore = storage.getItem('highscoreAI') ?? "[]";
    highscore = JSON.parse(highscore);
    highscore.push(win);
    storage.setItem('highscoreAI', JSON.stringify(highscore));
  } else {
    let highscore = storage.getItem('highscore') ?? "[]";
    highscore = JSON.parse(highscore);
    highscore.push(win);
    storage.setItem('highscore', JSON.stringify(highscore));
  }
}

export function getHighscore(ai) {
  const storage = window.localStorage;
  let highscore;
  if (ai) {
    highscore = storage.getItem('highscoreAI') ?? "[]";
    highscore = JSON.parse(highscore);
  } else {
    highscore = storage.getItem('highscore') ?? "[]";
    highscore = JSON.parse(highscore);
  }
  highscore = returnTopTen(highscore);
  return highscore;
}

function returnTopTen(highscore) {
  highscore = highscore.sort(compare)
  const topTen = [];
  for (let i = 0; i < 10; i++) {
    if (highscore[i] === undefined) break;
    topTen.push(highscore[i])
  }
  return topTen;
}

function compare(a, b) {
  if (a.moves < b.moves) {
    return - 1;
  }
  if (a.moves > b.moves) {
    return 1;
  }
  return 0;
}