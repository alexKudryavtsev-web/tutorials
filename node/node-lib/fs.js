const fs = require('fs')
const path = require('path')
/*
fs.mkdir(path.join(__dirname, 'test'), err => {
    if(err) {
        throw err
    }
    console.log('Папка создана')
})
*/
/*
const filePath = path.join(__dirname, 'test', 'text.txt')
fs.writeFile(filePath, 'Hello, Node JS\n', err => {
    if(err) {
        throw err
    }
    console.log('Файл создан')

    fs.appendFile(filePath, 'Hello, servers', err => {
        if(err) {
            throw err
        }
        console.log('Файл обновлен')
    })
})

fs.appendFile(filePath, 'Hello, servers', err => {
    if(err) throw err
    console.log('Файл обновлен')
})
*/

const filePath = path.join(__dirname, 'test', 'text.txt')

fs.readFile(filePath, 'utf-8', (err, content) => {
    if(err) throw err
    console.log(content)
})