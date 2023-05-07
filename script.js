const gameBoard = (() => {
  const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const getBoard = () => board;

  const printBoard = () => {
    console.log(board);
  };

  const markCell = (x, y) => {
    //cell is already marked
    if (board[x][y]) return;

    board[x][y] = 1;
  };

  return { printBoard, markCell, getBoard };
})();

const playerFactory = (name) => {
  return { name };
};

const gameController = (() => {
  const players = [playerFactory("uno"), playerFactory("due")];
  let activePlayer = players[0];

  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    gameBoard.printBoard();
    console.log(`it's ${getActivePlayer().name}'s turn!`);
  };

  const passTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const playRound = (x, y) => {
    gameBoard.markCell(x, y);
    console.log(`${getActivePlayer().name} marked the cell at ${x}, ${y}`);
    passTurn();
    printNewRound();
  };

  printNewRound();

  return { getActivePlayer, printNewRound, playRound };
})();

// const displayController = (() => {
//   const drawBoard = (board) => {};

//   const init = () => {
//     function addElement(content) {
//       var newDiv = document.createElement("div");

//       var newContent = document.createTextNode(`${content}`);

//       newDiv.appendChild(newContent);

//       newDiv.classList.add("cell");

//       const board = document.getElementById("board");
//       board.appendChild(newDiv);
//     }

//     for (t of gameBoard.board) {
//       for (e of t) {
//         addElement(e);
//       }
//     }
//   };

//   return { init };
// })();
