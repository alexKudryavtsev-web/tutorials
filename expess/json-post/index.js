const express = require('express')
const path = require('path')

const app = express()
const jsonParser = express.json()

app.post("/user", jsonParser, (req, res) => {
    console.log(req.body)
    if (!req.body) return res.sendStatus(400)

    res.json(req.body)
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000)