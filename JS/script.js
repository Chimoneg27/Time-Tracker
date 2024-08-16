const url = 'https://raw.githubusercontent.com/Chimoneg27/Time-Tracker/main/JSON/data.json';
let days = [];

fetchData();
async function fetchData() {
    try {
      const response = await fetch(url);

      if(!response.ok) {
        throw new Error('Could not fetch resource')
      }

      const data = await response.json();
      console.log(data);
    }
    catch(error) {
      console.log(error);
    }
}