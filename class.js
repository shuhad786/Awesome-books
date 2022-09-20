const form = document.getElementById('form');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const displayList = document.getElementById('bookinfo');
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
    localStorage.setItem('BookLibrary', JSON.stringify(this.bookArray));
  }
  displayBookList() {
    if(localStorage.getItem('BookLibrary') !== null) {
      this.bookArray = JSON.parse(localStorage.getItem('BookLibrary'));
    }
    bookInfo.innerText = '';
    this.bookArray.forEach((item) => {
      const titleHtml = document.createElement('p');
      const authorHtml = document.createElement('p');
      const remove = document.createElement('button');
      titleHtml.innerText = item.title;
      authorHtml.innerText = item.author;
      remove.innerText = 'Remove!';
      bookInfo.append(titleHtml, authorHtml, remove);
    });
  }
}
let myBookList = new BookList();
myBookList.displayBookList();
form.addEventListener('submit', (event) => {
  event.preventDefault();
  myBookList.addBook(inputTitle.value, inputAuthor.value);
  myBookList.displayBookList();
});
