require('dotenv').config()

const express = require('express');
const cors = require('cors');

const app= express();
const PORT = process.env.PORT || 9000;
const mongoose = require('mongoose')

const books = require('../backend/routes/bookroutes')
const users = require('./routes/userRoutes')

app.use(express.json())
app.use(cors())

//middleware
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//book routes
app.use('/api/books', books);

//users routes
app.use('/user', users)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Connected to db')
    app.listen(PORT, ()=>{console.log(`Server listening PORT ${PORT}`)})
})
.catch((error)=>{console.log(error)})










