const boxes = document.querySelectorAll(".box");
const board = document.getElementById("container");

const message = document.querySelector(".message");

const restartBtn = document.querySelector(".restart-button");

const modeToggle = document.querySelector(".mode-toggle");

const players = ["X", "O"];

let currentPlayer = players[0];
let isSinglePlayer = false;

// let newValue = isSinglePlayer !== isSinglePlayer ;
// console.log(newValue);
message.textContent = `X's turn`;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

//function for click on the toggle btn

modeToggle.addEventListener("click", () => {
  //new value of isSinglePlayer is now true;

  isSinglePlayer = !isSinglePlayer;
  //console.log("click", (isSinglePlayer = !isSinglePlayer));

  isSinglePlayer
    ? (modeToggle.textContent = "Switch to Dual Player")
    : (modeToggle.textContent = "Switch to Single Player");

  restartGame();
});

//player Move fuction
const playerMove = () => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", () => {
      if (boxes[i].textContent !== "" || checkWinner(currentPlayer)) {
        return;
      }
      boxes[i].textContent = currentPlayer;

      if (checkWinner(currentPlayer)) {
        message.textContent = `Game is over winner is ${currentPlayer}`;
        return;
      }

      if (tieGame()) {
        message.textContent = `Game is tied winner is `;
        return true;
      }

      currentPlayer = currentPlayer === players[0] ? players[1] : players[0];

      currentPlayer === players[0]
        ? (message.textContent = `X's turn`)
        : (message.textContent = `O's turn`);
    });

    if (isSinglePlayer && currentPlayer === players[1]) {
      console.log("single mode on");
      compMove();
    }
  }
};
playerMove();

let compMove = () => {
  const [x, y, z] = winPatterns[i];

  boxes.forEach((box) =>{
    console.log(box);
  })

  let emptyIndex
  

};
compMove();

let checkWinner = (currentPlayer) => {
  for (let i = 0; i < winPatterns.length; i++) {
    const [a, c, b] = winPatterns[i];
    if (
      boxes[a].textContent === currentPlayer &&
      boxes[b].textContent === currentPlayer &&
      boxes[c].textContent === currentPlayer
    ) {
      // Highlight the winning boxes
      boxes[a].style.backgroundColor = "#a7f3d0";
      boxes[b].style.backgroundColor = "#a7f3d0";
      boxes[c].style.backgroundColor = "#a7f3d0";
      return true;
    }
  }
  return false;
};

let tieGame = () => {
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].textContent === "") {
      return false;
    }
  }
};

let restartGame = () => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = "";
    boxes[i].style.backgroundColor = "";
  }
  currentPlayer = players[0];
  message.textContent = `X's turn`;
};

restartBtn.addEventListener("click", () => {
  console.log("btn clicked");
  restartGame();
});
