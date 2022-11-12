// ASYNC FUNCTION

// NORMAL FUNCTION CALL
// function greet() {
//     return 'Hello';
// }
// console.log(greet());

// ASYNC FUNCTION
// THIS FUNCTION WILL RETURN PROMISE (RESOLVED)
// async function greetAsync() {
//     return 'Hello from Async!';
// }
// greetAsync().then((val) => {
//     console.log(val);
// });


// THIS FUNCTION WILL RETURN PROMISE (REJECTED)
// async function greetAsyncReject() {
//     throw new Error('Error in greetAsyncReject')
// }
// greetAsyncReject().catch((err) => {
//     console.log(err);
// });

// AWAIT WITH ASYNC
// WE CAN ONLY USE AWAIT KEYWORD INSIDE OF FUNCTIONS DECLARED WITH ASYNC
// AWAIT WILL PAUSE THE EXECUTION OF THE FUNCTION, WAITING FOR A PROMISE TO BE RESOLVED


// AXIOS RETURN PROMISE SO WE NEED TO USE .then()
// BUT IF WE DON'T WANT TO USE .then() THEN WE NEED TO USE async & await
// THIS WILL MAKE JS AS SYNCHRONOUS CODE
// async function getData() {
//     try {
//         // FIRST THIS WILL BE RESOLVED
//         const res = await axios.get('https://swapi.dev/api/planets');
//         // THEN ONLY THIS CODE WILL RUN
//         const movieUrl = res.data['results'][0]['films'][0];
//         console.log(`Movie URL ${movieUrl}`);
//
//         // THIS WILL BE RESOLVED
//         const filmRes = await axios.get(movieUrl);
//         // THEN ONLY THIS CODE WILL RUN
//         console.log(`Movie Title ${filmRes.data.title}`);
//     } catch (e) {
//         console.log(`In Try Catch: ${e}`)
//     }
//
// }
// getData();


// RUNNING IN SEQUENTIAL ONE AFTER OTHER
// ONCE poke1 DONE THEN ONLY poke2 WILL RUN THEN ONLY poke3 WILL RUN
// async function get3Pokemon() {
//     const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     console.log(poke1);
//     console.log(poke2);
//     console.log(poke3);
// };
// get3Pokemon();



// RUNNING IN PARALLEL
// async function get3PokemonParallel() {
//     // REQUEST ARE SEND, ALL 3 REQUEST ARE SEND AT SAME TIME IN PARALLEL
//     const prom1 =  axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const prom2 =  axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     const prom3 =  axios.get('https://pokeapi.co/api/v2/pokemon/3');
//
//     // WE GOT PROMISE BACK
//     const poke1 = await prom1;
//     const poke2 = await prom2;
//     const poke3 = await prom3;
//
//     console.log(poke1);
//     console.log(poke2);
//     console.log(poke3);
// };
// get3PokemonParallel();

// RUNNING IN PARALLEL: CLEAN CODE
async function get3PokemonParallelClean() {
    // REQUEST ARE SEND, ALL 3 REQUEST ARE SEND AT SAME TIME IN PARALLEL
    const prom1 =  axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 =  axios.get('https://pokeapi.co/api/v2/pokemon/3');
    const prom3 =  axios.get('https://pokeapi.co/api/v2/pokemon/3');

    // WE GOT PROMISE BACK
    const result = await Promise.all([prom1,prom2,prom3]);

    console.log(result);
};
get3PokemonParallelClean();
