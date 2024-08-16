const url = 'https://raw.githubusercontent.com/Chimoneg27/Time-Tracker/main/JSON/data.json';
let days = [];

fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error('Could not fetch resource')
        }
        return response.json()
    })
    .then(data => console.log(data))
    .catch(error => console.error(error)) //this catches an error since it is promise based