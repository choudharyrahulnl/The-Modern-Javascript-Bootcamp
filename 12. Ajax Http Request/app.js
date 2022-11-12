// // XHR
// const firstRequest = new XMLHttpRequest();
//
// // SUCCESS
// firstRequest.addEventListener('load', function() {
//     console.log('PLANET REQUEST WORKED');
//     let data = JSON.parse(this.responseText);
//     let filmURL = data["results"][0]["films"][0];
//
//     // FILM REQUEST
//     const filmReq = new XMLHttpRequest();
//     filmReq.addEventListener('load', function (){
//         console.log('FILM REQUEST WORKED');
//         const film = this.responseText;
//         console.log(film);
//     });
//     filmReq.addEventListener('error', function (){
//         console.log('Film Request Error');
//     });
//     filmReq.open('GET',filmURL);
//     filmReq.send();
// });
//
// // FAILURE
//  firstRequest.addEventListener('error', () => {
//      console.log('ERROR');
//  });
//
//  // CAL API
//  firstRequest.open('GET', 'https://swapi.dev/api/planets/');
//  firstRequest.send();
//
//  console.log('REQUEST SEND TO SWAPI');

// FETCH API: IT SUPPORTS PROMISES
// FETCH ONLY WORKS WHEN THERE IS A NETWORK ERROR
// FOR 404, 500 FETCH WILL RESOLVE AND CONTROL WILL GO IN then()

// const checkStatusAndParse = (res) => {
//     if (!res.ok) {
//         throw new Error(`Status error code ${res.status}`);
//     }
//     return res.json();
// }
//
// let planets = fetch('https://swapi.dev/api/planets');
// planets
//     .then(checkStatusAndParse)
//     .then((data) => {
//         const movieUrl = data['results'][0]['films'][0];
//         console.log(`Movie URL ${movieUrl}`)
//         return fetch(movieUrl);
//     })
//     .then(checkStatusAndParse)
//     .then((data) => {
//         console.log(`Movie Title ${data.title}`);
//     })
//     .catch((error) => {
//         console.log(`ERROR: ${error}`);
//     });


// AXIOS: WE DON'T NEED TO DO JSON PARSE res.json()
// WE DON'T NEED TO CHECK STATUS CODE AND REJECT MANUALLY FOR 405 OR 500
axios.get('https://swapi.dev/api/planets')
    .then(({data}) => {
        const movieUrl = data['results'][0]['films'][0];
        console.log(`Movie URL ${movieUrl}`)
        return axios.get(movieUrl);
    })
    .then(({data}) => {
        console.log(`Movie Title ${data.title}`);
    })
    .catch((err) => {
        console.log(err);
    })