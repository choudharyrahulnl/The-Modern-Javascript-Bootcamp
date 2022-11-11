// BROWSER HAS ITS API'S WHICH JS USES FOR ASYNC CALL LIKE MAKE API CALL OR SET TIME OUT ...
// JS ASK BROWSER TO TAKE CARE OF ASYNC CALLS
// ONCE DONE BROWSER PUT THAT CALL BACK FUNCTION ON JS CALL STACK
// BROWSER DOESN'T PUT THE CALL BACK FUNCTION DIRECTLY ON CALL STACK INSTEAD IT USES CALLBACK QUEUE
// BROWSER PUT CALL BACK FUNCTION IN CALL BACK QUEUE AND JS WILL TAKE IT FROM CALLBACK QUEUE TO CALL STACK
// WHENEVER JS IS IDLE

// SET TIMEOUT: ASYNC FUNCTION
// IF WE NEED TO DO SOMETHING AFTER FIST ASYNC FINISH WE NEED TO NEST IT LIKE THIS
const btn = document.querySelector('button');
// setTimeout(() => {
//     btn.style.transform = `translateX(100px)`;
//
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`;
//
//         setTimeout(() => {
//             btn.style.transform = `translateX(300px)`;
//         },1000);
//     },1000);
// },1000);

// PROMISES: IS AN OBJECT REPRESENTATION OF AN EVENTUAL COMPLETION OR FAILURE OF AN ASYNC FUNCTION
// IF PROMISE IS RESOLVED THEN .then() WILL BE CALLED
// IF PROMISE IS REJECTED THEN .catch() WILL BE CALLED
// const makeDogPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const rand = Math.random();
//             if(rand < 0.5) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         },5000);
//     });
// }
// makeDogPromise()
//     .then(() => {console.log('Yee, we get a dog!')})
//     .catch(() => {console.log('Noo, why no dog!')});


// FAKE REQUEST
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const pages = {
               '/users': [
                   {id:1,username:'Rahul'},
                   {id:2,username:'Choudhary'}
               ],
               '/users/1': {
                   id:1,
                   username:'Rahul',
                   country: 'Netherlands'
               },
               '/about': 'This is about page'
           }
           const data = pages[url];
           if(data) {
               resolve({status: 200, data});
           } else {
               reject({status:404});
           }
        },1000);
    });
}

// fakeRequest('/users')
//     .then(({status,data}) => {
//         console.log(`Api Status ${status} data: ${data[0].id} ${data[0].username}`);
//     })
//     .catch(({status}) => {
//         console.log(status);
//     });
//
// fakeRequest('/about')
//     .then(({status,response_time,data}) => {
//         console.log(`Api Status ${status} data: ${data}`);
//     })
//     .catch(({status}) => {
//         console.log(status);
//     });
//
// fakeRequest('/something')
//     .then(({status,response_time,data}) => {
//         console.log(`Api Status ${status} data came from api ${data}`);
//     })
//     .catch(({status}) => {
//         console.log(status);
//     });



// PROMISE CHAIN
// fakeRequest('/users')
//     .then(({status,data}) => {
//         const id = data[0].id;
//         fakeRequest(`/users/${id}`)
//             .then(({status, data}) => {
//                 console.log(`APi status ${status}`)
//                 console.log(data)
//             })
//             .catch(({status}) => {
//                 console.log(status);
//             });
//     })
//     .catch(({status}) => {
//         console.log(status);
//     });



// CLEAN CODE
fakeRequest('/users')
    .then(({status,data}) => {
        console.log(`APi status for /users ${status}`);
        const id = data[0].id;
        return fakeRequest(`/users/${id}`)
    })
    .then(({status, data}) => {
        console.log(`APi status for /users/1 ${status}`);
        console.log(data)
    })
    .catch(({status}) => {
        console.log('APi status ',status);
    });