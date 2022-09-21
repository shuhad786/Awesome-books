const today = new Date();
const dd = today.getDate();
const mm = today.getMonth();
const yyyy = today.getFullYear();
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const date = document.getElementById('dateTime');

const timeAMPM = today.toLocaleTimeString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true
});

date.innerText = `${months[mm]} ${dd}th ${yyyy}, ${timeAMPM}`;
