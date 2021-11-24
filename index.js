const express = require('express');
const mongoose = require('mongoose');
const alienRouter = require('./routes/aliens.js');

const url = 'mongodb://localhost:27017/AlienDB'


const app = express();
const port = 9000

app.use(express.json());

app.use('/aliens', alienRouter)

mongoose.connect(url, {useNewUrlParser:true});

const con = mongoose.connection

con.on('open', function(){
    console.log(":: Connected to MongoDB server")

})


// async function connectToMongoDB() {
//     await mongoose.connect('mongodb://localhost:27017/AlienDB');
//     console.log(":: Connected to MongoDB server")
//   }
//   connectToMongoDB()


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
  })