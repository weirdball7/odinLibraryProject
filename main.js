const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const form = document.querySelector("#add-book-form");

let removeBookBtn;
let newBook;

let libraryDiv;
let book;

const myLibrary = [];

// Constructor function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



// Adds book to library
function addBookToLibrary() {
    const title = document.getElementById("book-label").value;
    const author = document.getElementById("book-author").value;
    const pages = Number(document.getElementById("number-of-pages").value);
    const read = document.getElementById("read").value;

    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBook(newBook);
}



showButton.addEventListener("click", () => {
    dialog.showModal();
});


form.addEventListener("submit", (event) => {
    addBookToLibrary();
    event.preventDefault(); // Prevent default form submission behavior
    dialog.close();
});


Book.prototype.readBook = function() {
    console.log("Book being read:", this.title);
    if (this.read.toLowerCase() === "yes") {
        console.log("Book already read");
    } else {
        this.read = "Yes";
        console.log("Book marked as read");
        displayLibrary();
    }
};



function displayBook(newBook) {
    libraryDiv = document.getElementById("library");
    book = document.createElement("div");
    book.className = "book";

    let titleDiv = document.createElement("div");
    titleDiv.textContent = "Title: " + newBook.title;

    let authorDiv = document.createElement("div");
    authorDiv.textContent = "Author: " + newBook.author;

    let pageDiv = document.createElement("div");
    pageDiv.textContent = "Page Number: " + newBook.pages;

    let readDiv = document.createElement("div");
    readDiv.textContent = "Read: " + newBook.read;

    removeBookBtn = document.createElement("button");
    removeBookBtn.textContent = "Remove";

    readBookBtn = document.createElement('button');
    readBookBtn.textContent = "Read";

    removeBookBtn.addEventListener('click', () => {
        removeBook(newBook);
    });

    readBookBtn.addEventListener('click', function() {
        newBook.readBook();
    });
    
    book.appendChild(titleDiv);
    book.appendChild(authorDiv);
    book.appendChild(pageDiv);
    book.appendChild(readDiv);
    book.appendChild(removeBookBtn);
    book.appendChild(readBookBtn)

    libraryDiv.appendChild(book);
}


function displayLibrary() {
    libraryDiv.innerHTML = ""; // Clear the library display
    myLibrary.forEach(displayBook);
}


function removeBook(book) {
    const index = myLibrary.indexOf(book);
    if (index !== -1) {
        myLibrary.splice(index, 1);
        displayLibrary();
    }
}



