const fields = document.querySelectorAll("div.field");
const spans = document.querySelectorAll("span");
const h2 = document.querySelector("h2");

let gameEnd = false;

const handleFieldClick = (event) => {
  const clickedField = event.target;
  const randomNum = Math.floor(Math.random() * 9);
  const span = clickedField.querySelector("span");
  if (!span.textContent) {
    span.textContent = "X";
    clickedField.classList.add("player");
    generateRandomField(randomNum);
  } else {
    return;
  }
};

const generateRandomField = (random) => {
  const randomSpan = fields[random].querySelector("span");
  const randomField = fields[random];
  if (randomSpan.textContent !== "O" && randomSpan.textContent !== "X") {
    fields[random].classList.add("robot");
    randomSpan.textContent = "O";
  } else {
    random = Math.floor(Math.random() * (9 - 1) + 1);
    generateRandomField(random);
  }
};

fields.forEach((field) => {
  field.addEventListener("click", handleFieldClick);
});

przyklad = [
  ["O", undefined, "X"],
  ["O", "X", undefined],
  ["X", undefined, "O"],
];

const findWinner = function (game) {
  let czyskonczone = 0;
  let checkWinner = [
    (Row1 = [game.at(0)[0], game.at(0)[1], game.at(0)[2]]),
    (Row2 = [game.at(0)[0], game.at(1)[1], game.at(2)[2]]),
    (Row3 = [game.at(0)[0], game.at(1)[1], game.at(2)[2]]),
    (column1 = [game.at(0)[0], game.at(1)[0], game.at(2)[0]]),
    (column2 = [game.at(0)[1], game.at(1)[1], game.at(2)[1]]),
    (column3 = [game.at(0)[2], game.at(1)[2], game.at(2)[2]]),
    (diagonal1 = [game.at(0)[0], game.at(1)[1], game.at(2)[2]]),
    (diagonal2 = [game.at(0)[2], game.at(1)[1], game.at(0)[2]]),
  ];
  for (let i in checkWinner) {
    if (
      checkWinner[i].at(0) === "X" &&
      checkWinner[i].at(1) === "X" &&
      checkWinner[i].at(2) === "X"
    ) {
      fields.forEach((field) => {
        field.classList.add("player");
      });
      h2.textContent = "X";
      return "X";
    } else if (
      checkWinner[i].at(0) === "O" &&
      checkWinner[i].at(1) === "O" &&
      checkWinner[i].at(2) === "O"
    ) {
      fields.forEach((field) => {
        field.classList.add("robot");
      });
      h2.textContent = "O";
      return "O";
    }
  }
  for (let i in checkWinner) {
    if (
      checkWinner[i].at(0) === undefined ||
      checkWinner[i].at(1) === undefined ||
      checkWinner[i].at(2) === undefined
    ) {
      czyskonczone = false;
    }
  }
  if (czyskonczone === false) {
    return undefined;
  } else {
    return null;
  }
};

while (gameEnd === false) {
  let amountOfMoves = 0;

  board = [
    [spans[0].textContent, spans[1].textContent, spans[3].textContent],
    [spans[4].textContent, spans[5].textContent, spans[6].textContent],
    [spans[7].textContent, spans[8].textContent, spans[9].textContent],
  ];
  for (i in board) {
    for (j in board[i]) {
      if (j.textContent === "X" || j.textContent === "O") {
        amountOfMoves += 1;
      }
    }
  }
  if (amountOfMoves >= 3) {
    findWinner(board);
  }
}
