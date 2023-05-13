'use strict'

let today = new Date()
console.log(today)

let start = new Date(0)
console.log(start)

let next = new Date(24 * 3600 * 1000)
console.log(next)

let someday = new Date(1991, 11, 20, 23, 55)
console.log(someday)

console.log(someday.getFullYear())
console.log(someday.getMonth())
console.log(someday.getDate())
console.log(someday.getHours(), someday.getMinutes(), someday.getSeconds())
console.log(someday.getDay())
console.log(someday.getDay() || 7) // Normal
console.log(someday.getTime())
console.log(someday.getTimezoneOffset())

someday.setDate(31)
someday.setFullYear(2020)
console.log(someday)

let d = new Date(2013, 0, 37)
console.log(d)

d.setSeconds(d.getSeconds() + 70)
console.log(d)

d.setMinutes(d.getMinutes() - 20)
console.log(d)

console.log(+d)

let f1 = new Date(2020, 0, 1)
let f2 = new Date(2020, 1, 5)

console.log(f2 - f1)

let st = Date.now()

for(let i = 0; i < 100000; i++) {
    let x = i ** i ** i ** i
}

let end = Date.now()
console.log(`time: ${end - st}`)

let ms = Date.parse('2012-01-26T13:51:50.417-07:00')
console.log(ms)