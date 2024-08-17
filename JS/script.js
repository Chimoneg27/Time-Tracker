const url = 'https://raw.githubusercontent.com/Chimoneg27/Time-Tracker/main/JSON/data.json';
let cardContainer = document.getElementById('cards')

fetchData();
async function fetchData() {
    try {
      const response = await fetch(url);

      if(!response.ok) {
        throw new Error('Could not fetch resource')
      }

      const data = await response.json();
      const times = data.map(item => item.timeframes)
      console.log(times)
      // for(let i = 0; i < data.length; i++) {
      //   cardContainer.innerHTML += `
      //   <div class="activity">
      //     <div class="cardTop"></div>
      //       <ul class="task">
      //         <li>${data[i].title}</li>
      //         <li><img src="images/icon-ellipsis.svg" alt="icon-ellipsis"></li>
      //       </ul>

      //       <ul class="duration">
      //         <li>32hrs</li>
      //         <li>Last-week - 36hrs</li>
      //       </ul>
      //     </div>
      //   </div>
      // `
      // }

      activities(data, cardContainer)
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
        </ul>
      </div>
    </div>
  `
  }
}