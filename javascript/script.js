/* eslint-disable semi */

const clockParagraph = document.querySelector('p.clock')
const dateParagraph = document.querySelector('p.date')
const todayParagraph = document.querySelector('p.today')

let dateObject;

setClockHtml();
setDateHtml();
setTodayHtml();

const clock = setInterval(setClockHtml, 1000);
const date = setInterval(setDateHtml, 1000)
const today = setInterval(setTodayHtml, 1000);

function setClockHtml () {
  dateObject = new Date();

  clockParagraph.innerHTML = (`${dateObject.getHours().toString().padStart(2, '0')}:${dateObject.getMinutes().toString().padStart(2, '0')}:${dateObject.getSeconds().toString().padStart(2, '0')}`);
}

function setDateHtml () {
  dateObject = new Date();

  dateParagraph.innerHTML = `${dateObject.getDate()}/${dateObject.getMonth()+1}/${dateObject.getFullYear()}`;
}

function setTodayHtml () {
  dateObject = new Date();

  let actualDay;

  switch (dateObject.getDay()) {
    case 0: 
      actualDay = 'Sunday';
      break;
    case 1: 
      actualDay = 'Monday';
      break;
    case 2: 
      actualDay = 'Tuesday';
      break;
    case 3: 
      actualDay = 'Wednesday';
      break;
    case 4: 
      actualDay = 'Thursday';
      break;
    case 5: 
      actualDay = 'Friday';
      break;
    case 6: 
      actualDay = 'Saturday';
      break;
  };

  todayParagraph.innerHTML = `Today is ${actualDay}`;
};
