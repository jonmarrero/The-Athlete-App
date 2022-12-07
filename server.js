require('dotenv').config() // load env variables 
const express = require('express') // bring in express to make our app 
const morgan = require('morgan') // nice logger for our request 
const methodOverride = require('method-override') // allows us to override post request from our ejs/forms 
const PORT = process.env.PORT 
const app = express()
const athleteRouter = require('./controllers/athlete')

////////////////////////////////
// Middlewares 
///////////////////////////////

app.use(morgan('tiny'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

// app.get('/), homeroutes)
// app.get('/store', storeRoutes)
// app.get('/user', userRoutes)
app.use('/athletes', athleteRouter)

// tells me the PORT is responding to what I want it to do 
app.listen(PORT, ()=> console.log(`The athletes are competing on: ${PORT}`))