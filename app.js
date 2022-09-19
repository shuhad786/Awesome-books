
const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
let cookie ;
let cookieArray;
const bookInfo = document.getElementById('bookInfo');
let bookArray = [];

if(localStorage.getItem('bookStored') !==null){
   cookie = localStorage.getItem('bookStored') ;
  cookieArray = JSON.parse(cookie);

  if (cookieArray) {
    bookArray=cookieArray;
  }
}



form.addEventListener('submit', function(event){
  event.preventDefault();
  let test = new Object();
  test.title = title.value;
  test.author = author.value;
  let stringObj = JSON.stringify(test);
  bookArray.push(stringObj);
  let stringArray = JSON.stringify(bookArray);
  localStorage.setItem('bookStored', stringArray);
  bookInfo.innerText = "";
  displayBooks();
  // location.reload();

});

function displayBooks (){
  for (var i = 0; i < bookArray.length; i++) {
    const titleHtml = document.createElement('p');
    const authorHtml = document.createElement('p');
    const remove = document.createElement('button');
    const recoveredObject=JSON.parse(bookArray[i]);
    titleHtml.innerText = recoveredObject.title;
    authorHtml.innerText = recoveredObject.author;
    remove.innerText = 'Remove!';
    bookInfo.append(titleHtml, authorHtml, remove);

  }
}
displayBooks();
