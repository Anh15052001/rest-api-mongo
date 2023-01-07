//This will be entry point for our application
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection
//throw a success or an error
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', ()=>{
    console.log("Database connected");
})
//Now, transfer the contents of Express into a new constant called app.
const app = express();
// listen change on port 3000
app.use(express.json()); // we have a code snippet that allows us to accept the data in JSON format.

const routes = require('./routes/routes');
app.use('/api', routes)
app.listen(3000, ()=>{
    console.log(`Server started at ${3000}`)
})
