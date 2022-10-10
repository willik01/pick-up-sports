const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
// mongoose.connect('mongodb://127.0.0.1/flights');

const db = mongoose.connection

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})