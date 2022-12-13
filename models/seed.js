require('dotenv').config()
const mongoose = require('./connection')
const athlete = require('./athlete')


mongoose.connection.on('open', () => {

     // define data we want to put in the database 
    const startingAthletes = [
        {
            name: "Cam Akers",
            fortyYardDash: 4.47, 
            benchPress: 20, 
            verticalJump: 35.5, 
            shuttleRun: 4.42,
            hallOfFame: false
        },
        {
            name: "Lamar Jackson",
            fortyYardDash: 4.58, 
            benchPress: 10, 
            verticalJump: 36.5, 
            shuttleRun: 0,
            hallOfFame: false
        },
        {
            name: "Christian McCaffrey",
            fortyYardDash: 4.48, 
            benchPress: 10, 
            verticalJump: 37.5, 
            shuttleRun: 4.22,
            hallOfFame: false
        },
        {
            name: "Champ Bailey",
            fortyYardDash: 4.28, 
            benchPress: 0, 
            verticalJump: 37, 
            shuttleRun: 3.79,
            hallOfFame: true
        },
    ]

    //delete all athletes 
    athlete.deleteMany({}, (err, data) => {

        // create new athletes once old athletes are deleted
        athlete.create(startingAthletes, (err, createdAthletes) => {
            // log the athletes  to the terminal to make sure it works 
            console.log(createdAthletes)
        })
    })
})