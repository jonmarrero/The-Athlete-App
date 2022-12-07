///////////////////////////////
// athlete models 
//////////////////////////////

// require mongoose connection to the connection.js file 
const mongoose = require('./connection')


const { Schema, model } = mongoose // destructuring, grabbing model and Schema off mongoose variable 


const athletesSchema = new Schema({
    name: string,
    fortyYardDash: number, 
    benchPress: number, 
    verticalJump: number, 
    shuttleRun: number,
    hallOfFame: boolean   
})

const athlete = model('Athlete', athletesSchema)

module.exports = athlete