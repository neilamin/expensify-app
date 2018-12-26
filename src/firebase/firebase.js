import * as firebase from 'firebase'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MEASSAGING_SENDER_ID
};

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default } 


// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').push({
//     description: 'Maid',
//     note: 'Clean Condo before NYE Pregame',
//     amount: 100,
//     createdAt: 'Next Friday'
// })


// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []

//          snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//          })

//          console.log(expenses)
// })

// database.ref('expenses').push({
//     description: 'Subscription to the Atheltic',
//     note: 'Got Subscription for Job Interview',
//     amount: 35.99,
//     createdAt: 'Friday'
// })

// database.ref('notes/-LUa8mYFkVgR1W5bAQeB').remove()

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
// })

// database.ref().set({
//     name: 'Neil Amin',
//     age: 25,
//     stressLevel: 6,
//     job: {
//         title: 'Software Engineer',
//         company: 'Infosys'
//     },
//     location: {
//         city: 'Atlanta',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((err) => {
//     console.log(err)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })