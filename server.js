const express = require('express')
const cors = require('cors')

const PORT = 8004
const app = express()

app.get('/home',(req,res)=>{
    res.send("you are at home page.")
})


app.listen(PORT,(req,res)=>{
    console.log(`Server running at port ${PORT}`)
})