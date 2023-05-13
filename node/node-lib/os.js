const os = require('os')

console.log('Операционная система', os.platform())

console.log('Архитектура процессора', os.arch())

console.log('О процессорах', os.cpus())

console.log('Кол-во свободной памяти', os.freemem(), 'байт')

console.log('Кол-во всей памяти', os.totalmem(), 'байт')

console.log('Домашняя директория', os.homedir())

console.log('Включено', os.uptime(), 'сек')