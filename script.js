const Board = document.querySelector("div#board")
const fields = document.querySelectorAll("div.field");
const spans = document.querySelectorAll("span");
const h2 = document.querySelector("h2");

let gameEnd = 0;

let board = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

const handleFieldClick = (event) => {
  if (gameEnd === 9){
    return;
  }
  const clickedField = event.target;
  const randomNum = Math.floor(Math.random() * 9);
  const span = clickedField.querySelector("span");
  const index = clickedField.getAttribute("data-index");
  if (!span.textContent) {
    span.textContent = "X";
    clickedField.classList.add("player");
    board[index[0]][index[2]] = span.textContent;
    gameEnd += 1
    findWinner(board);
    console.log(findWinner(board));
    if (checkDraw() === true){
      return;
    }
    else{
      setTimeout(generateRandomField,1000,randomNum);
      findWinner(board);
    }
  } else {
    return;
  }
};

const generateRandomField = (random) => {
  if (gameEnd === 9){
    return;
  }
  else if (gameEnd < 9){
    const randomSpan = fields[random].querySelector("span");
    const randomField = fields[random];
    const randomIndex = randomField.getAttribute("data-index");
    if (
      randomSpan.textContent !== "O" &&
      randomSpan.textContent !== "X"
    ) {
      randomField.classList.add("robot");
      randomSpan.textContent = "O";
      board[randomIndex[0]][randomIndex[2]] = randomSpan.textContent;
      gameEnd += 1
    } else {
      random = Math.floor(Math.random() * (9));
      generateRandomField(random);
    }
  }
};

const findWinner = function (game) {
  const checkWinner = [
    (Row1 = [game.at(0)[0], game.at(0)[1], game.at(0)[2]]),
    (Row2 = [game.at(1)[0], game.at(1)[1], game.at(1)[2]]),
    (Row3 = [game.at(2)[0], game.at(2)[1], game.at(2)[2]]),
    (column1 = [game.at(0)[0], game.at(1)[0], game.at(2)[0]]),
    (column2 = [game.at(0)[1], game.at(1)[1], game.at(2)[1]]),
    (column3 = [game.at(0)[2], game.at(1)[2], game.at(2)[2]]),
    (diagonal1 = [game.at(0)[0], game.at(1)[1], game.at(2)[2]]),
    (diagonal2 = [game.at(2)[0], game.at(1)[1], game.at(0)[2]]),
  ];
  for (let i in checkWinner) {
    if (
      checkWinner[i].at(0) === "X" &&
      checkWinner[i].at(1) === "X" &&
      checkWinner[i].at(2) === "X"
    ) {
      h2.textContent = "X wins";
      h2.classList.add("player");
      gameEnd = 9;
      return "X"
    } else if (
      checkWinner[i].at(0) === "O" &&
      checkWinner[i].at(1) === "O" &&
      checkWinner[i].at(2) === "O"
    ) {
      h2.textContent = "O wins";
      h2.classList.add("robot");
      gameEnd = 9;
      return "O"
    }
  }
};

const checkDraw = function () {
  if (
    gameEnd === 9 &&
    (findWinner(board) !== "X" &&
    findWinner(board) !== "O")
  ) {
    h2.classList.add("draw")
    h2.textContent = "Draw"
    return true;
  }
}

fields.forEach((field) => {
  field.addEventListener("click", handleFieldClick);
});

