require('dotenv').config();

const express = require('express')
const app = express()
const mongooose = require('mongoose')
const userRoute = require('./routes/userRoute')

mongooose.connect('mongodb://127.0.0.1/baateinChatApp')
.then(()=>{
    console.log('DB connected');
})
.catch((err)=>{
    console.log('error connecting DB');
    console.log(err.message);
    
})

app.use(express.json());

app.use('/api' , userRoute)


app.listen(3000,()=>{
    console.log('server is running');
    
})
