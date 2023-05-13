const express = require("express")
const path = require('path')
const app = express()

const pages = [
    '/',
    '/about'
]

app.use(express.static(path.join(__dirname, 'public')))

app.use((request, response, next) => {
    pages.forEach(el => {
        if (el !== request.url) {
            response.sendFile(path.join(__dirname, 'public', 'error.html'))
        }
    })
})

app.listen(3000)