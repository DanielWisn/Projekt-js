const fields = document.querySelectorAll("div.field");
const spans = document.querySelectorAll(".field > span");

const handlefieldClick = (event) => {
  const clickedField = event.target;
  const randomField = Math.floor(Math.random() * (9 - 1) + 1);
  const span = clickedField.querySelectorAll("span");
  if (!span.textContent) {
    span.textContent = "X";
  }

  fields[0].setAttribute("data-index", "O");
  clickedField.classList.add("player");
  clickedField.setAttribute("data-index", "X");
  generateRandomField(randomField);
  const generateRandomField = (random) => {
    if (
      fields[random].getAttribute("data-index") !== "O" &&
      fields[random].getAttribute("data-index") !== "X"
    ) {
      fields[random].classList.add("robot");
      fields[random].setAttribute("data-index", "O");
    } else {
      randomField = Math.floor(Math.random() * (9 - 1) + 1);
      generateRandomField(randomField);
    }
  };
};

fields.forEach((field) => {
  field.addEventListener("click", handlefieldClick);
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
      return "X";
    } else if (
      checkWinner[i].at(0) === "O" &&
      checkWinner[i].at(1) === "O" &&
      checkWinner[i].at(2) === "O"
    ) {
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

while (true) {
  board = [
    [
      fields[0].getAttribute("data-index"),
      fields[1].getAttribute("data-index"),
      fields[3].getAttribute("data-index"),
    ][
      (fields[4].getAttribute("data-index"),
      fields[5].getAttribute("data-index"),
      fields[6].getAttribute("data-index"))
    ][
      (fields[7].getAttribute("data-index"),
      fields[8].getAttribute("data-index"),
      fields[9].getAttribute("data-index"))
    ],
  ];
  if (findWinner(board) === "X") {
    fields.forEach((field) => {
      field.classList.add("player");
    });
  } else if (findWinner(board) === "O") {
    fields.forEach((field) => {
      field.classList.add("robot");
    });
  }
}
