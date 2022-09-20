const form = document.getElementById('form');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');

class BookTemplate {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
class BookList {
  constructor (){
    this.bookArray = [];
  }
  addBook(title, author) {
    let bookAdded = new BookTemplate(title, author);
    this.bookArray.push(bookAdded);
  }
}
let myBookList = new BookList();
form.addEventListener('submit', (event) => {
  event.preventDefault();
  myBookList.addBook(inputTitle.value, inputAuthor.value);

  
});
