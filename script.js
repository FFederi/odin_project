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

  const markCell = (y, x) => {
    //cell is already marked
    if (board[y][x]) return false;

    board[y][x] = gameController.getActivePlayer().sign;
    return true;
  };

  return { printBoard, markCell, getBoard };
})();

const playerClass = (name, sign) => {
  return { name, sign };
};

const displayController = (() => {
  const board = document.getElementById("board");
  const chatbox = document.getElementById("chatbox");

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
  board.addEventListener("click", clickHandlerBoard);

  drawBoard();
  return { drawBoard, changeChatboxText };
})();

const gameController = (() => {
  const players = [playerClass("Player 1", 1), playerClass("Player 2", 2)];
  var activePlayer = players[0];

  const getActivePlayer = () => activePlayer;

  // const printNewRound = () => {
  //   console.log(`it's ${getActivePlayer().name}'s turn!`);
  // };

  const passTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const isWin = () => {
    var board = gameBoard.getBoard();

    for (let i = 0; i < 3; i++) {
      // Check row
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
        } tried to mark an already marked cell, try again`
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

    // printNewRound();
  };

  return { getActivePlayer, playRound };
})();
