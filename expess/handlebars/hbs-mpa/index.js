const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express()

app.set('view engine', 'hbs')
    // Подключаем папку с частичными представлениями
hbs.registerPartials(path.join(__dirname, '/views', '/partials'))

app.get('/contact', (req, res) => {         
    res.render('contact.hbs', {
        title: 'Контакты',
        visible: false,
        links: ['qwertyShura@gmail.com', '+7-915-748-59-71']
    })
})

app.get("/", (req, res) => {         
    res.render('home.hbs', {
        title: 'Home'
    })
})

app.listen(3000)