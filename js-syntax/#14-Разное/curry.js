'use strict'

function curry(fn) {
    return function (a) {
        return function (b) {
            return fn(a, b)
        }
    }
}

function sum(a, b) {
    return a + b
}

let carryFun = curry(sum)

let res = carryFun(12)(100)
console.log(res)

function makeCurry(func) {
    return function curried(...args) {
        if (args.length >= func.length)
            return func.apply(this, args)

        return function (...args2) {
            return curried.apply(this, args.concat(args2))
        }
    }
}

function minus(a, b, c) {
    return a - b - c
}

console.log(makeCurry(minus)(12)(24)(9))
console.log(makeCurry(minus)(12)(24, 9))
console.log(makeCurry(minus)(12, 24, 9))