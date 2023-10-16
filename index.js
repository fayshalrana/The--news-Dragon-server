    const express = require('express')
    const app = express()
    const cors = require('cors')
    const port = process.env.PORT || 5000;
    const Catagories = require("./data/Catagories.json")
    const news = require("./data/news.json")

    app.use(cors())
    app.get("/", (req, res) =>{
        res.send("Dragoon is Running")

    })
    app.get("/catagories", (req, res) =>{
        res.send(Catagories)
    })

    app.get("/news", (req, res) =>{
        res.send(news)
    })

    app.get("/news/:id", (req, res)=>{
        const id = req.params.id;
        const selectedNews = news.find(n => n._id === id)
        res.send(selectedNews);

    })

    app.get("/categry/:id", (req, res) =>{
        const id = req.params.id;
        if(id == 0){
            res.send(news)
        }else{
            const categoryNews = news.filter(n => n.category_id == id);
        res.send(categoryNews);
        }        
    })




    app.listen(port, ()=>{
        console.log(`app is running on port ${port}`)
    })