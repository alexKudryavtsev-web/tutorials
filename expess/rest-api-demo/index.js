const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const jsonParser = express.json()

app.use(
    express.static(path.join(__dirname, 'public'))
)

app.get('/api/users', (req, res) => {
    fs.readFile('users.json', (err, file) => {
        if (err) {
            req.sendStatus(500)
        } else {
            res.send(JSON.parse(file))
        }
    })
})

app.get('/api/users/:id', (req, res) => {
    let id = req.params.id

    fs.readFile('users.json', (err, file) => {
        if (err) {
            req.sendStatus(500)
        } else {
            let users = JSON.parse(file)

            for (let i = 0; i < users.length; i++) {
                if (users[i].id == id) {
                    return res.send(users[i])
                }
            }
            res.sendStatus(404)
        }
    })
})

app.post('/api/users', jsonParser, (req, res) => {
    if (!req.body) return res.sendStatus(400)

    fs.readFile('users.json', (err, file) => {
        let data = JSON.parse(file)
        let user = {
            name: req.body.name,
            age: req.body.age,
            id: Math.max.apply(Math, data.map(o => o.id)) + 1
        }

        data.push(user)
        data = JSON.stringify(data)

        fs.writeFile('users.json', data, err => {})
        res.send(user)
    })
})

app.delete("/api/users/:id", function(req, res) {

    var id = req.params.id;
    fs.readFile("users.json", (err, file) => {
        let users = JSON.parse(file);
        let index = -1;

        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                index = i
                break
            }
        }

        if (index > -1) {
            let user = users.splice(index, 1)[0]
            let data = JSON.stringify(users)

            fs.writeFile("users.json", data, err => {})
            res.send(user)
        } else {
            res.sendStatus(404)
        }
    });
});

app.put('/api/users', jsonParser, (req, res) => {
    if (!req.body) return res.sendStatus(400)

    let id = req.body.id;
    let name = req.body.name;
    let age = req.body.age;

    fs.readFile('users.json', (err, file) => {
        let users = JSON.parse(file)
        let user = null

        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                user = users[i]
                break
            }
        }

        if (user) {
            user.age = age
            user.name = name

            let data = JSON.stringify(users)
            fs.writeFile('users.json', data, err => {})
            res.send(user)
        } else {
            res.status(404).send(user)
        }
    })
})

app.listen(3000)