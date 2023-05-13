const http = require('http')
const process = require('process')
const path = require('path')
const fs = require('fs')

const PORT = process.env.PORT || 3000

http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filePath)
    let contentType = 'text/html'

    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'
    }

    if (!ext) {
        filePath += '.html'
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Error')
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    })
                    let ret = data.toString().replace('{statusCode}', 404)
                    res.end(ret)
                }
            })
        } else {
            res.writeHead(200, {
                'Content-Type': contentType
            })
            res.end(content)
        }
    })
}).listen(PORT, () => {
    console.log('Подключено', PORT)
})