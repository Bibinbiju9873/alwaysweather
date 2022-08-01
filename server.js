const path = require('path');
const port = 8000;

const express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'))

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'/index.html'))
})

app.listen(process.env.PORT || port, () =>{
    console.log('Listening to port no 8000');
})