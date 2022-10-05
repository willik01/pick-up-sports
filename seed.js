require('./config/database')

const Movie = require('./models/movie')
const Performer = require('./models/performer')

const data = require('./data')


// How to delete movies and performers sequentially
// Movie.deleteMany({})
//     .then(function(results) {
//         console.log('Deleted movies: ', results)
//         return Performer.deleteMany({})
//     })
//     .then(function(results) {
//         console.log('Deleted performers: ', results)
//     })
//     .then(function() {
//         process.exit()
//     })
//     .catch(function(err) {
//         console.log(err)
//         process.exit()
//     })

const p1 = Movie.deleteMany({})
const p2 = Performer.deleteMany({})

Promise.all([p1, p2])
    .then(function(results) {
        console.log(results)
        return Performer.create(data.performers)
    })
    .then(function(performers) {
        console.log(performers)
        return Movie.create(data.movies)
    })
    .then(function(movies) {
        console.log(movies)
        return Promise.all([
            Performer.findOne({name: 'Mark Hamill'}),
            Movie.findOne({title: 'Star Wars - A New Hope'})
        ])
    })
    .then(function(results) {
        const mark = results[0]
        const starWars = results[1]
        starWars.cast.push(mark._id)
        return starWars.save()
    })
    .then(function(result) {
        console.log(result)
    })
    .then(process.exit)








// const p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('Hello World!')
//     }, 2000)
// })

// p.then(function(result) {
//     console.log(result)
//     return 'Goodbye!!'
// }).then(function(result) {
//     console.log(result)
//     return 'THIS IS THE FINAL VALUE!!!!'
// }).then(function(result) {
//     console.log(result)
// }).catch(function(err) {
//     console.log(err)
// })

// function asyncAdd(a, b, delay) {
//     return new Promise(function(resolve) {
//       setTimeout(function() {
//         resolve(a + b);
//       }, delay);
//     });
// }
  

// asyncAdd(5, 10, 2000)
// .then(function(sum) {
//     console.log(sum)
//     return asyncAdd(sum, 100, 1000)
// })
// .then(function(sum) {
//     console.log(sum)
//     return asyncAdd(sum, 5000, 2000)
// })
// .then(function(sum) {
//     console.log(sum)
// })