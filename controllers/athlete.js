// bring in express 
const express = require('express')
// bring in your athletes 
const athlete = require('../models/athlete')

////////////////////////
// create router variable to attach routes 
///////////////////////
const router = express.Router()



///////////////////////
// actual routes below 
//////////////////////


router.get('/seed', (req, res) => {

})


// index route using the .then method 
router.get('/', (req, res) => {

    // get all athletes from mongo and send them back to index.ejs
    athlete.find({})
    .then((athletes) => {
        //res.json(athletes)
        res.render('athletes/index.ejs', {athletes})
    })
    .catch(err => console.log(err)) // this is how we catch an error from the .then
})


// new route
router.get("/new", (req, res) => {
    res.render("athletes/new.ejs")
})


// post route 
router.post('/athletes', (req, res) => {

    // req.body.retired = req.body.retired === 'on' ? true : false

    athlete.create(req.body, (err, createdAthlete) => {
        console.log(createdAthlete)
        res.redirect('/athletes')
    })
})


// edit route 
router.get('/:id/edit', (req, res) => {
    // get the id from params
    const id = req.params.id
    // find the athlete and send it to the edit.ejs file to prepopulate the form 
    athlete.findById(id, (err, foundAthlete) => {
        // res.json(foundAthlete)
        // render the template and send it to athlete
        res.render('athletes/edit.ejs', { athlete: foundAthlete })
    })
})


// update route  
router.put('/:id', (req, res) => {
    // get the id from params 
    const id = req.params.id
    // check if the retired property should be true or false
    req.body.retired = req.body.retired === 'on' ? true : false
    // update the athlete 
    athlete.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedAthlete) => {
        // the console.log shows the updated athlete working in my terminal 
        console.log(updatedAthlete, err)
        // redirect me back to the main page of athletes and it will show me the updated athletes 
        res.redirect('/athletes')
    })
})


// show route 
router.get('/:id', (req, res) => {

    // go and get the athlete from the database
    athlete.findById(req.params.id)
    .then((athlete) => {
        // res.json(athlete)
        res.render('athletes/show.ejs', {athlete})
    })
})


// destroy route (delete route) method 1 
router.delete('/:id', (req, res) => {
    // get the id from params 
    const id = req.params.id
    // delete the athlete
    athlete.findByIdAndDelete(id, (err, deletedAthlete) => {
        // the console.log shows me my route is working in my terminal 
        console.log(err, deletedAthlete)
        // redirect me back to my main page of athletes
        res.redirect('/athletes')
    })
})


// destroy route method 2 
// athlete.findByIdAndDelte(req.params.id)
// .then((deletedAthlete) => {
    // console.log(err, deletedAthlete)
    // res.redirect('/athletes')
// })
// .catch(err => console.log(err))


// destroy route method 3 async await 
// router.delete('/athletes/:id', async (req, res) => {
 // const deletedAthlete = await athlete.findByIdAndDelete(req.params.id)
//if(deletedAthlete)
//  res.redirect('/athletes')   
// })



//////////////////////
// exports this router to use in other files 
///////////////////
module.exports = router