require('dotenv').config()
const mongoose = require('./connection')
const athlete = require('./athlete')


mongoose.connection.on('open', () => {

     // define data we want to put in the database 
    const startingAthletes = [
        {
            name: string,
            fortyYardDash: number, 
            benchPress: number, 
            verticalJump: number, 
            shuttleRun: number,
            hallOfFame: Boolean
        },
        {
            name: string,
            fortyYardDash: number, 
            benchPress: number, 
            verticalJump: number, 
            shuttleRun: number,
            hallOfFame: Boolean
        },
        {
            name: string,
            fortyYardDash: number, 
            benchPress: number, 
            verticalJump: number, 
            shuttleRun: number,
            hallOfFame: Boolean
        },
        {
            name: string,
            fortyYardDash: number, 
            benchPress: number, 
            verticalJump: number, 
            shuttleRun: number,
            hallOfFame: Boolean
        },
        {
            name: string,
            fortyYardDash: number, 
            benchPress: number, 
            verticalJump: number, 
            shuttleRun: number,
            hallOfFame: Boolean
        },
        {
            name: string,
            fortyYardDash: number, 
            benchPress: number, 
            verticalJump: number, 
            shuttleRun: number,
            hallOfFame: Boolean
        },
        {
            name: string,
            fortyYardDash: number, 
            benchPress: number, 
            verticalJump: number, 
            shuttleRun: number,
            hallOfFame: Boolean
        }
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