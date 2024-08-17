const url = 'https://raw.githubusercontent.com/Chimoneg27/Time-Tracker/main/JSON/data.json';
let cardContainer = document.getElementById('cards');

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
          <li class='today'>Today - ${arr[i].timeframes.daily.previous}hrs</li>
          <li class='week'>${arr[i].timeframes.weekly.current}hrs</li>
          <li class='week'>${arr[i].timeframes.weekly.previous}hrs</li>
          <li class='monthly'>${arr[i].timeframes.current}</li>
          <li class='monthly'>${arr[i].timeframes.previous}</li>
        </ul>
      </div>
    </div>
  `
  }
}