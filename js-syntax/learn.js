// 'use strict'

// const PI = 3.14
// const E = 2.718

// let admin = 'John'
// let name = admin
// console.log(admin, name)

// let nameOurPlanet = 'Earth'
// let nameCurrentUser
// console.log(`${nameOurPlanet}`)

// let i = 0
// console.log(i++) // 0
// console.log(++i) // 2

// let a = 10
// let b = (a *= 10, a ** 2)
// console.log(a, b)

// function equalString(a, b) {
//     if (a.length != b.length) {
//         return false
//     }
//     for (let i = 0; i < a.lenght; i++) {
//         if (a.charCodeAt(i) !== b.charCodeAt(i)) {
//             return false
//         }
//     }
//     return true
// }

// let age = 12
// let isAdults = (age > 18) ? true : false
// console.log(isAdults)

// let input = 'YoptaScript'

// if (input === 'ECMASCRIPT') {
//     console.log(true)
// } else {
//     console.log(false)
// }

// let login = ''
// let message = (login === 'user')
//     ? 'Hello'
//     : (login === 'admin')
//         ? 'Милостливо пожаловать'
//         : (login === '')
//             ? 'Не введено'
//             : 'пошел нахуй'
// console.log(message)

// console.log(undefined || null)
// console.log(0 || 2 || 1)
// console.log(undefined && null)
// console.log(0 && 2 && 1)

// let nm = 90

// if (nm >= 14 && nm <= 90) {
//     console.log('yes')
// } else {
//     console.log('no')
// }

// nm = 100

// if (nm < 14 || nm > 90) {
//     console.log('yes')
// } else {
//     console.log('no')
// }

// // DONT WORT AT NODE 13v
// // let fio = null
// // console.log(fio ?? 'empty')
// // let date = '01.01.1970'
// // console.log(date ?? 'empty')

// function fillCoords(size = 100, limit = 100) {
//     let res = []
//     outer: for (let x = 0; x < limit; x++) {
//         for (let y = 0; y < limit; y++) {
//             res.push({ x, y })
//             if (res.length === size) {
//                 break outer
//             }
//         }
//     }
//     return res
// }

// console.log(fillCoords(20, 5))

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// let p = 0
// while (p < 3) {
//     console.log(p)
//     p++
// }

// while (true) {
//     let input = Math.ceil(Math.random() * 10)
//     if (input !== 1) {
//         console.log('error', input)
//     } else {
//         console.log('success')
//         break
//     }
// }

// function isPrimary(n) {
//     if (n < 2) {
//         return false
//     }
//     for (let i = 2; i < Math.trunc(Math.sqrt(n)) + 1; i++) {
//         if (n % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// let c = 0
// for (let i = 0; i < 10; i++) {
//     if (isPrimary(i)) {
//         c++
//         console.log(c)
//     }
// }

// let n = 5
// switch (n) {
//     case 3:
//         console.log('it is 3')
//         break
//     case 4:
//         console.log('it is 4')
//         break
//     case 5:
//         console.log('it is 4')
//         break
//     default:
//         console.log('error')
//         break
// }
// // Error!
// switch (n) {
//     case 3:
//         console.log('it is 3')
//     case 4:
//         console.log('it is 4')
//     case 5:
//         console.log('it is 4')
//     default:
//         console.log('error')
// }

// function min(a, b) {
//     return a < b ? a : b
// }

// console.log(min(1, 65))
// console.log(min(10, 2))
// console.log(min(0, 46))
// console.log(min(12, 12))

function pow1(x, n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(x)
    }
    let str = arr.join('*')
    return eval(str)
}

function pow(x, n) {
    let res = x
    for (let i = 1; i < n; i++) {
        res *= x
    }
    return res
}

console.log(pow(2, 2))
console.log(pow(2, 3))
console.log(pow(2, 4))
console.log(pow(2, 5))
console.log(pow(2, 6))
