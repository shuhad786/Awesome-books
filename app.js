let test = new Object();
const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
let bookArray = [];



form.addEventListener('submit', function(event){
  event.preventDefault();
  let test = new Object();
  test.title = title.value;
  test.author = author.value;
  bookArray.push(test);

});
