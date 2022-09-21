const listPage = document.getElementById('listPage');
const contactPage = document.getElementById('contactPage');
const addPage = document.getElementById('addPage');
const listLink = document.getElementById('listLink');
const addLink = document.getElementById('addLink');
const contactLink = document.getElementById('contactLink');

contactLink.addEventListener('click', () => {
  addPage.classList = 'displayNone';
  listPage.classList = 'displayNone';
  contactPage.classList = 'displayBlock';
});

listLink.addEventListener('click', () => {
  addPage.classList = 'displayNone';
  listPage.classList = 'displayBlock';
  contactPage.classList = 'displayNone';
});

addLink.addEventListener('click', () => {
  addPage.classList = 'displayBlock';
  listPage.classList = 'displayNone';
  contactPage.classList = 'displayNone';
});
