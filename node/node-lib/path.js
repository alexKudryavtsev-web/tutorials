const path = require('path')

console.log('Имя файла:       ', path.basename(__filename))
console.log('Расширение файла:', path.extname(__filename))
console.log('Имя папки:       ', path.dirname(__dirname))

console.log(path.parse(__filename))

console.log(path.join(__dirname, 'serve', 'index.html'))
