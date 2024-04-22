const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const form = document.querySelector("#add-book-form");

let libraryDiv;
let book;


let bookLabel;
let bookAuthor;
let numPages;
let read;


const myLibrary = [];


// constructor
function createBook(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};


// adds book to library
function addBookToLibrary() {
    const Book = new createBook(bookLabel, bookAuthor, pages, read);
    myLibrary.push(Book);
    // libraryDiv.removeChild(book);
    displayBook();
};

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", (event)=>{
    bookLabel = document.getElementById("book-label").value;
    bookAuthor = document.getElementById("book-author").value;
    numPages = Number(document.getElementById("number-of-pages").value);
    read = document.getElementById("read").value;

    addBookToLibrary();
    event.preventDefault();
    dialog.close();

    // console.log(bookLabel);
    // console.log(bookAuthor);
    // console.log(numPages);
    // console.log(read);
});





function displayBook (){
    libraryDiv = document.getElementById("library");
    let i = 0;
    while (i < myLibrary.length) {
        // console.log(myLibrary[i]);
        book = document.createElement("div");
        book.className = "book";

        let titleDiv = document.createElement("div");
        titleDiv.textContent = "Title: " + myLibrary[i].title;

        let authorDiv = document.createElement("div");
        authorDiv.textContent = "Author: " + myLibrary[i].author;

        let pageDiv = document.createElement("div");
        pageDiv.textContent = "Page Number: " + myLibrary[i].pageNumber;

        let readDiv = document.createElement("div");
        readDiv.textContent = "Read: " + (myLibrary[i].read ? "Yes" : "No");


        book.appendChild(titleDiv);
        book.appendChild(authorDiv);
        book.appendChild(pageDiv);
        book.appendChild(readDiv);

        libraryDiv.appendChild(book);

        i++;
    };

};

// displayBook();