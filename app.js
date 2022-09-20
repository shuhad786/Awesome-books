const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
let cookie;
let cookieArray;
const bookInfo = document.getElementById('bookInfo');
let bookArray = [];

if (localStorage.getItem('bookStored') !== null) {
  cookie = localStorage.getItem('bookStored');
  cookieArray = JSON.parse(cookie);

  if (cookieArray) {
    bookArray = cookieArray;
  }
}
function displayBooks() {
  bookArray.forEach((item) => {
    const newNode = document.createTextNode('');
    const titleHtml = document.createElement('p');
    const authorHtml = document.createElement('p');
    const remove = document.createElement('button');
    const indexVal = bookArray.indexOf(item);
    const recoveredObject = JSON.parse(item);
    titleHtml.innerText = recoveredObject.title;
    authorHtml.innerText = recoveredObject.author;
    remove.innerText = 'Remove!';
    bookInfo.append(titleHtml, authorHtml, remove);

    remove.addEventListener('click', () => {
      bookArray = JSON.parse(localStorage.getItem('bookStored'));
      bookArray.splice(indexVal, 1);
      localStorage.setItem('bookStored', JSON.stringify(bookArray));
      titleHtml.replaceWith(newNode);
      authorHtml.replaceWith(newNode);
      remove.remove();
    });
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const test = {};
  test.title = title.value;
  test.author = author.value;
  const stringObj = JSON.stringify(test);
  bookArray.push(stringObj);
  const stringArray = JSON.stringify(bookArray);
  localStorage.setItem('bookStored', stringArray);
  bookInfo.innerText = '';
  displayBooks();
});

displayBooks();
