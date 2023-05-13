'use strict'

console.dir(Number)
console.dir(24)

let s = 'Hello'

// Как реализовано
console.log(new String(s).toUpperCase())
console.log(s.toUpperCase())

// Способы записи
let a = 1000000
let e = 1e6 // 1000000
let me = 1e-6 // 0.000001 

let hex = 0xff // 225, 16-ичная
let bin = 0b11111111
let oct = 0o377

console.log(bin)
console.log(hex)
console.log(oct)

// Преобразование в строку
let n = 4032354
console.log(n.toString())
console.log(n.toString(2)) // Минимальное основание
console.log(n.toString(16))
console.log(n.toString(36)) // Максимальное основание

// Вызовы метода
console.log(39..toString(36))
console.log((39).toString(36))

// Округление
console.log(Math.floor(23.053))
console.log(Math.ceil(23.053))
console.log(Math.round(23.053))
console.log(Math.trunc(23.053))

let v = 1.2435635
console.log(v.toFixed(4))
console.log(v.toFixed(1))
console.log(v.toFixed(0))

// Точность исчисления
console.log(0.1 + 0.2 === 0.3)
console.log(0.1 + 0.2, (0.1 + 0.2).toFixed(2))
console.log(+(0.1 + 0.2).toFixed(2) === 0.3)

console.log(0.4 + 0.9 === 1.3)

// Парсинг числа
console.log(parseInt('14px'))
console.log(parseInt('1em'))

console.log(parseFloat('1.3em'))
console.log(parseFloat('0.9fr'))

// Псевдослучайное число
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
