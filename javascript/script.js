/* eslint-disable semi */

const clockParagraph = document.querySelector('p.clock')
const dateParagraph = document.querySelector('p.date')
const todayParagraph = document.querySelector('p.today')
const background = document.querySelector('div.background');

let dateObject;

setClockHtml();
setDateHtml();
setTodayHtml();

const clock = setInterval(setClockHtml, 1000);
const date = setInterval(setDateHtml, 1000)
const today = setInterval(setTodayHtml, 1000);

function setClockHtml () {
  dateObject = new Date();
  const currentHour = dateObject.getHours();

  if (currentHour >= 12 && currentHour <= 17) {
    document.body.style.backgroundColor = '#3498DB';
    background.style.backgroundImage = "url('./images/afternoon.jpg')";
  } else if ((currentHour >= 18 && currentHour <= 23) || (currentHour >= 0 && currentHour <= 5)) {
    document.body.style.backgroundColor = '#34495E';
    background.style.backgroundImage = "url('./images/night.jpg')";
  } else {
    document.body.style.backgroundColor = '#F1C40F';
    background.style.backgroundImage = "url('./images/morning.jpg')";
  };

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
