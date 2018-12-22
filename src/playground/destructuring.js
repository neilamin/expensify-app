// Object Destructuring 



// const person = {
//     name: 'Neil',
//     age: 25,
//     location: {
//         city: 'Atlanta',
//         temp: 69
//     }
// }

// const { name = 'Anonymous', age } = person

// const { temp: temperature, city } = person.location

// console.log(`${name} is ${age}`)

// console.log(`It's ${temperature} in ${city}`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { title, author } = book
// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

const address = ['270 17th st nw', 'Atlanta', 'GA', '30363']
const [street, city, state = 'Colorado', zip] = address
console.log(`You are in ${city}, ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [itemName, , mediumPrice] = item
console.log(`A medium ${itemName} costs ${mediumPrice}`)