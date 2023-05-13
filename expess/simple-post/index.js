const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get("/reg", (req, res) => {
    res.sendFile(path.join(__dirname, "reg.html"));
})

app.post('/reg', urlencodedParser, (req, res) => {
    res.send(`${req.body.name} : ${req.body.age}`)
})

app.listen(3000)