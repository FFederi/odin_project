let myLibrary = [
  new Book("The Hobbit", "J.R.R. Tolkien", 295, false, 0),
  new Book("Water is everywhere", "John Smith", 156, true, 1),
  new Book("Calderone", "Pietro Mecca", 96, false, 2),
];

function Book(title, author, pages, read, libraryIndex) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = Boolean(read);
  this.libraryIndex = libraryIndex;
  this.toggleRead = function () {
    if (this.read) {
      Object.assign(this, { read: false });
    } else {
      Object.assign(this, { read: true });
    }
  };
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "read" : "not yet read"
    }`;
  };
}

function openForm() {
  document.getElementById("myForm").style.display = "flex";
  makeValid();
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function addBookFromForm() {
  event.preventDefault();
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var pagesn = document.getElementById("pagesn").value;
  var read = document.getElementById("read").value;
  var index = myLibrary.length;
  const formBook = new Book(title, author, pagesn, read ? true : false, index);
  addBookToLibrary(formBook);
  showBookOnPage(formBook);
}

function showBookOnPage(book) {
  function addDeleteButton(bookDiv) {
    const butt = document.createElement("button");
    butt.appendChild(document.createTextNode("Delete"));
    butt.addEventListener("click", function () {
      parentDiv = this.closest("div");
      myLibrary.splice(parentDiv.getAttribute("data"), 1);
      for (i in myLibrary) {
        myLibrary[i].libraryIndex = parseInt(i);
      }
      update();
    });
    bookDiv.appendChild(butt);
  }

  function toggleReadButton(bookDiv) {
    const tbutt = document.createElement("button");
    tbutt.appendChild(document.createTextNode("Toggle read"));
    tbutt.addEventListener("click", function () {
      parentDiv = this.closest("div");
      myLibrary[parentDiv.getAttribute("data")].toggleRead();
      update();
    });
    bookDiv.appendChild(tbutt);
  }
  const containerDiv = document.getElementsByClassName("container")[0];
  const bookDiv = document.createElement("div");
  const newContent = document.createTextNode(book.info());
  bookDiv.setAttribute("data", book.libraryIndex);
  bookDiv.appendChild(newContent);
  addDeleteButton(bookDiv);
  toggleReadButton(bookDiv);
  containerDiv.appendChild(bookDiv);
}

function makeValid() {
  const title = document.getElementById("title");
  const pagesn = document.getElementById("pagesn");
  const author = document.getElementById("author");
  const read = document.getElementById("read");

  function addValidityCheckToElement(element, errorMessage) {
    element.addEventListener("input", (event) => {
      if (element.validity.typeMismatch) {
        element.setCustomValidity(errorMessage);
      } else {
        element.setCustomValidity("");
      }
    });
  }

  function addValidity() {
    addValidityCheckToElement(title, "Please set a title");
    addValidityCheckToElement(pagesn, "Please set a page number");
    addValidityCheckToElement(author, "Please set an author");
    addValidityCheckToElement(read, "Please set if read");
  }

  addValidity();
}

function update() {
  const containerDiv = document
    .getElementsByClassName("container")[0]
    .replaceChildren();
  for (el of myLibrary) {
    showBookOnPage(el);
  }
}

update();
