const gameBoard = (() => {
  const initBoard = (y, x) => {
    boardM.length = 0;
    for (let i = 0; i < y; i++) {
      var row = [];
      for (let i = 0; i < x; i++) {
        row.push(0);
      }
      boardM.push(row);
    }
  };

  const getBoard = () => boardM;

  const printBoard = () => {
    console.log(boardM);
  };

  const markCell = (y, x) => {
    //cell is already marked
    if (boardM[y][x]) return false;

    boardM[y][x] = gameController.getActivePlayer().sign;
    return true;
  };
  var boardM = [];
  initBoard(3, 3);

  return { printBoard, markCell, getBoard, initBoard };
})();

const playerClass = (name, sign, ai = false) => {
  return { name, sign, ai };
};

const displayController = (() => {
  const board = document.getElementById("board");
  const chatbox = document.getElementById("chatbox");
  const resetButton = document.getElementById("restart");

  const changeChatboxText = (text) => {
    chatbox.textContent = "";
    chatbox.textContent = text;
  };

  const drawBoard = () => {
    function addCell(y, x, color) {
      var newButton = document.createElement("button");

      newButton.classList.add("cell");
      newButton.dataset.y = y;
      newButton.dataset.x = x;
      newButton.style.backgroundColor = color;

      board.appendChild(newButton);
    }

    board.textContent = "";

    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        if (gameBoard.getBoard()[x][y] === 1) {
          var color = "blue";
        } else if (gameBoard.getBoard()[x][y] === 2) {
          var color = "red";
        } else {
          var color = undefined;
        }
        addCell(x, y, color);
      }
    }
  };
  function clickHandlerBoard(e) {
    const selectedCellX = e.target.dataset.x;
    const selectedCellY = e.target.dataset.y;

    if (!selectedCellX) return;
    if (!selectedCellY) return;

    gameController.playRound(selectedCellY, selectedCellX);
  }

  function clickHandlerResetButton() {
    gameBoard.initBoard(3, 3);
    displayController.drawBoard();
  }
  board.addEventListener("click", clickHandlerBoard);
  resetButton.addEventListener("click", clickHandlerResetButton);

  drawBoard();
  return { drawBoard, changeChatboxText };
})();

const gameController = (() => {
  const players = [
    playerClass("Player 1", 1),
    playerClass("TicTacGPToe", 2, (ai = true)),
  ];
  var activePlayer = players[0];

  const getActivePlayer = () => activePlayer;

  const passTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const isWin = () => {
    var board = gameBoard.getBoard();

    for (let i = 0; i < 3; i++) {
      // Check rows
      if (
        (board[i][0] === board[i][1] &&
          board[i][1] === board[i][2] &&
          board[i][2] === 1) ||
        (board[i][0] === board[i][1] &&
          board[i][1] === board[i][2] &&
          board[i][2] === 2)
      ) {
        return true;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        (board[0][i] === board[1][i] &&
          board[1][i] === board[2][i] &&
          board[2][i] === 1) ||
        (board[0][i] === board[1][i] &&
          board[1][i] === board[2][i] &&
          board[2][i] === 2)
      ) {
        return true;
      }
    }

    // Check diagonals
    if (
      (board[0][0] === board[1][1] &&
        board[1][1] === board[2][2] &&
        board[2][2] === 1) ||
      (board[0][0] === board[1][1] &&
        board[1][1] === board[2][2] &&
        board[2][2] === 2)
    ) {
      return true;
    }
    if (
      (board[0][2] === board[1][1] &&
        board[1][1] === board[2][0] &&
        board[2][0] === 1) ||
      (board[0][2] === board[1][1] &&
        board[1][1] === board[2][0] &&
        board[2][0] === 2)
    ) {
      return true;
    }

    return false;
  };

  const playRound = (y, x) => {
    //player marked an already marked cell
    if (!gameBoard.markCell(y, x)) {
      console.log(
        `${
          getActivePlayer().name
        } tried to mark an already marked cell, try again`
      );
      displayController.changeChatboxText(
        `${
          getActivePlayer().name
        } tried to mark an already marked cell, try again```
      );
      return;
    }

    console.log(`${getActivePlayer().name} marked the cell at ${x}, ${y}`);
    displayController.changeChatboxText(
      `${getActivePlayer().name} marked the cell at ${x}, ${y}`
    );
    displayController.drawBoard();
    if (isWin()) {
      console.log(`${getActivePlayer().name} won!!!`);
      displayController.changeChatboxText(`${getActivePlayer().name} won!!!`);

      gameBoard.printBoard();
      return;
    }
    passTurn();

    if (getActivePlayer().ai) {
      const test = AIController.randomMove();
      gameController.playRound(test[0], test[1]);
    }
  };

  return { getActivePlayer, playRound };
})();

const AIController = (() => {
  const randomMove = () => {
    //return an array with (y,x) of a random cell with value 0
    boardNow = gameBoard.getBoard();
    possibleMovesArray = [];
    for (let i = 0; i < boardNow.length; i++) {
      for (let j = 0; j < boardNow[0].length; j++) {
        if (boardNow[i][j] === 0) {
          possibleMovesArray.push([i, j]);
        }
      }
    }
    return possibleMovesArray[
      Math.floor(Math.random() * possibleMovesArray.length)
    ];
  };
  return { randomMove };
})();
