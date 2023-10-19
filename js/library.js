class Book {
    constructor(title, author, available=true) {
        this.title = title;
        this.author = author;
        this.available = available;
    }
}

const library = {
    books: [],
    addBook(title, author) {
     const book = new Book(title, author);
     this.books.push(book);
     console.log(`${book.title} by ${book.author} added to Library`)
     console.log(`Total Number of Books in Library: ${this.books.length}`)
    },
    checkOutBook(title) {
        try {
            let found = false;
            for(let book of this.books) {
                if (book.title === title && book.available) {
                    found = true;
                    book.available = false;
                    console.log(`checked out: ${book.title}`);
                    break;
                }
            }
            if (!found) throw new Error(`${title} not found`)
        }
        catch(e) {
            console.error(e.message);
        }
    },
    getAvailableBooks() {
        let bookList = []
        for (let book of this.books) {
            if (book.available) {
                bookList.push(book.title);
            }
        }
        console.log(`${bookList.length} available.  Titles: ${bookList.join(", ")}`)
    }
}

let newBooks = `[{"title":"The rubber ducky", "author": "Duck McDucks"}, 
{"title":"The malformed request", "author": "Dr. Http"},
{"title":"The Itch", "author": "Allergies McFoodie"},
{"title":"Cloudy with a chance of rain", "author": "The Weather in England"}
]`;

function receiveBooks(bookData) {
    console.log("Adding books to your shelves");
    const booksToAdd = JSON.parse(bookData);
    for (let book of booksToAdd) {
        library.addBook(book.title, book.author);
    }
}

// Tests
console.log(`There are currently ${library.books.length} books in the library's database.`);
library.addBook("Eloquent JavaScript", "Marijn Haverbeke");
receiveBooks(newBooks);
library.checkOutBook("Eloquent JavaScript");
library.checkOutBook("Grokking the Coding Interview");
library.getAvailableBooks();


