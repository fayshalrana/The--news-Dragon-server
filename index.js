    const express = require('express')
    const app = express()
    const cors = require('cors')
    const port = process.env.PORT || 5000;
    const Catagories = require("./data/Catagories.json")

    app.use(cors())
    app.get("/", (req, res) =>{
        res.send("Dragoon is Running")

    })
    app.get("/catagories", (req, res) =>{
        res.send(Catagories)
    })

    app.listen(port, ()=>{
        console.log(`app is running on port ${port}`)
    })