const url = 'https://raw.githubusercontent.com/Chimoneg27/Time-Tracker/main/JSON/data.json';
let cardContainer = document.getElementById('cards');
const daily = document.getElementById('Daily');
const weekly = document.getElementById('Weekly');
const monthly = document.getElementById('Months')

fetchData();
async function fetchData() {
    try {
      const response = await fetch(url);

      if(!response.ok) {
        throw new Error('Could not fetch resource')
      }

      const data = await response.json();

      activities(data, cardContainer);
    }
    catch(error) {
      console.log(error);
    }
}

const activities = (arr, box) => {
  for(let i = 0; i < arr.length; i++) {
    box.innerHTML += `
    <div class="activity">
      <div class="cardTop"></div>
        <ul class="task">
          <li>${arr[i].title}</li>
          <li><img src="images/icon-ellipsis.svg" alt="icon-ellipsis"></li>
        </ul>

        <ul class="duration">
          <li class='today'>${arr[i].timeframes.daily.current}hrs</li>
          <li class='today previous'>Yesterday - ${arr[i].timeframes.daily.previous}hrs</li>
          <li class='week' style='color: white; font-size: 2.25rem;'>${arr[i].timeframes.weekly.current}hrs</li>
          <li class='week' style='color: var(--Desaturated-blue);'>Last Week - ${arr[i].timeframes.weekly.previous}hrs</li>
          <li class='monthly' style='color: white; font-size: 2.25rem;'>${arr[i].timeframes.monthly.current}hrs</li>
          <li class='monthly' style='color: var(--Desaturated-blue);'>Last Month - ${arr[i].timeframes.monthly.previous}hrs</li>
        </ul>
      </div>
    </div>
  `
  }
}

daily.addEventListener('click', () => {
  let today = document.querySelectorAll('.today');
  let week = document.querySelectorAll('.week');
  let monthly = document.querySelectorAll('.monthly');

  for(let i = 0; i < today.length; i++) {
    today[i].style.display = 'block';
  }

  for(let i = 0; i < week.length; i++) {
    week[i].style.display = 'none';
  }

  for(let i = 0; i < monthly.length; i++) {
    monthly[i].style.display = 'none';
  }
});

weekly.addEventListener('click', () => {
  let today = document.querySelectorAll('.today');
  let week = document.querySelectorAll('.week');
  let monthly = document.querySelectorAll('.monthly');

  for(let i = 0; i < today.length; i++) {
    today[i].style.display = 'none';
  }

  for(let i = 0; i < week.length; i++) {
    week[i].style.display = 'block';
  }

  for(let i = 0; i < monthly.length; i++) {
    monthly[i].style.display = 'none';
  }
});

monthly.addEventListener('click', () => {
  let today = document.querySelectorAll('.today');
  let week = document.querySelectorAll('.week');
  let monthly = document.querySelectorAll('.monthly');

  for(let i = 0; i < today.length; i++) {
    today[i].style.display = 'none';
  }

  for(let i = 0; i < week.length; i++) {
    week[i].style.display = 'none';
  }

  for(let i = 0; i < monthly.length; i++) {
    monthly[i].style.display = 'block';
  }
});