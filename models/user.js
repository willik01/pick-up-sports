const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gamesSchema = new Schema({
    userGame: {
        type: String, 
        enum: ['Tennis', 'Pickleball', 'Badminton'], 
        default: 'Tennis',
    },
    skillLevel: {
        type: String, 
        enum: ['1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '4.5', '5.0']
    }, 
    yearsExperience: Number, 
    competitiveness: {
        type: Number, min: 1, max: 10}, 
    gameLocation: {  //lat, long? Ultimately need to have an array of specific courts or game locations
        type: String, 
        default: 'Seattle'
    }
}, {
    timestamp: true
});


const languageSchema = new Schema({
    language: {
        type: String, 
        default: 'en-US'
    }, //list of supported languages 
}, {
    timestamp: true
})

// two digit country codes: https://www.nationsonline.org/oneworld/country_code_list.htm
const countrySchema = new Schema({ 
    country: {
        type: String, 
        default: 'US'
    }, //list of supported countries
}, {
    timestamp: true
})

//User schema with embedded games/locaiton/language/coutnry
const userSchema = new Schema({
    name: String,
    googleId: {
        type: String,
        required: true  //REQUIRED?
    },
    email: String,
    avatar: String, 
    gender: String, 
    location: {type: String, default: 'timbuktoo'}, //general location to map with other players
    games: [gamesSchema],
    language: [languageSchema],
    country: [countrySchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema)