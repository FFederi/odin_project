const gameBoard = (() => {
  const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  return { board };
})();

const displayController = (() => {
  return {};
})();

const playerFactory = (name) => {
  return { name };
};

function init() {
  function addElement(content) {
    var newDiv = document.createElement("div");

    var newContent = document.createTextNode(`${content}`);

    newDiv.appendChild(newContent);

    newDiv.classList.add("cell");

    const board = document.getElementById("board");
    board.appendChild(newDiv);
  }

  for (t of gameBoard.board) {
    for (e of t) {
      addElement(e);
    }
  }
}

init();

const p1 = playerFactory("uno");
const p2 = playerFactory("due");
