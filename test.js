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
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      read ? "read" : "not yet read"
    }`;
  };
}

function openForm() {
  document.getElementById("myForm").style.display = "flex";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function addBookToLibrary(book) {
  function addDeleteButton(bookDiv) {
    const butt = document.createElement("button");
    butt.onclick = deleteBook();
    butt.appendChild(document.createTextNode("Delete"));
    bookDiv.appendChild(butt);
  }
  const containerDiv = document.getElementsByClassName("container")[0];
  const bookDiv = document.createElement("div");
  const newContent = document.createTextNode(book.info());
  bookDiv.setAttribute("data", book.libraryIndex);
  bookDiv.appendChild(newContent);
  addDeleteButton(bookDiv);
  containerDiv.appendChild(bookDiv);
}

function addBookFromForm() {
  event.preventDefault();
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var pagesn = document.getElementById("pagesn").value;
  var read = document.getElementById("read").value;
  var index = length(myLibrary);
  const formBook = new Book(title, author, pagesn, read ? true : false, index);
  myLibrary.push(formBook);
  addBookToLibrary(formBook);
}

function deleteBook() {}

function showBooksOnPage() {
  for (el of myLibrary) {
    addBookToLibrary(el);
  }
}

showBooksOnPage();
