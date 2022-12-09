///////////////////////////////
// athlete models 
//////////////////////////////

// require mongoose connection to the connection.js file 
const mongoose = require('./connection')


const { Schema, model } = mongoose // destructuring, grabbing model and Schema off mongoose variable 


const athletesSchema = new Schema({
    name: String,
    fortyYardDash: Number, 
    benchPress: Number, 
    verticalJump: Number, 
    shuttleRun: Number,
    hallOfFame: Boolean   
})

const athlete = model('Athlete', athletesSchema)

module.exports = athlete