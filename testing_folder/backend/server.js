// import express from 'express'  // this is a way to write moduler JS
require('dotenv').config();
const express = require("express") // this is calling the JS syncronously
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send("Server is ready")
})


app.get('/jokes', (req, res)=>{
    const jokes = [
        {
            id : 1,
            title : "Joke 1",
            content : "This is joke 1"
        },
        {
            id : 2,
            title : "Joke 2",
            content : "This is joke 2"
        }
    ]

    res.send(jokes)
})


app.get('/cars', (req, res)=>{
    const cars = [
        {
            id:1,
            content:"BMW"
        },
        {
            id:2,
            content:"Lambo"
        },
        {
            id:3,
            content : "porsche"
        }
    ]

    res.send(cars)
})


app.listen(port, (req, res)=>{
    console.log(`The server is Runinng in port ${port}`)
})