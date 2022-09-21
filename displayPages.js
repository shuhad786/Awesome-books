const listPage = document.getElementById('listPage');
const contactPage = document.getElementById('contactPage');
const addPage = document.getElementById('addPage');
const listLink = document.getElementById('listLink');
const addLink = document.getElementById('addLink');
const contactLink = document.getElementById('contactLink');

contactLink.addEventListener('click', () => {
  addPage.style.display = 'none';
  listPage.style.display = 'none';
  contactPage.style.display = 'block';
});

listLink.addEventListener('click', () => {
  addPage.style.display = 'none';
  contactPage.style.display = 'none';
  listPage.style.display = 'block';
});

addLink.addEventListener('click', () => {
  contactPage.style.display = 'none';
  listPage.style.display = 'none';
  addPage.style.display = 'block';
});

