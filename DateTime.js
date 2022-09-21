let today = new Date();
let dd = today.getDate();
let mm = today.getMonth();
let yyyy = today.getFullYear();
const months = [
  'January'
, 'February'
, 'March'
, 'April'
, 'May'
, 'June'
, 'July'
, 'August'
, 'September'
, 'October'
, 'November'
, 'December'
];
const date = document.getElementById('dateTime');

let timeAMPM = today.toLocaleTimeString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true
})

date.innerText = months[mm] + ' ' + dd + 'th ' + yyyy + ', ' + timeAMPM;
