'use strict'

let range = {
    from: 1,
    to: 10,

    [Symbol.iterator]() {
        this.current = this.from
        return this
    },

    next() {
        if(this.current <= this.to) {
            return {done: false, value: this.current++}
        }
        return {done: true}
    }
}

for(let i of range) {
    console.log(i)
}

range.from = 10
range.to = 20

let iter = range[Symbol.iterator]()

for(let i=0; i<4; i++) {
    let v = iter.next().value
    console.log(v)
}

console.log('Second Group')

while(true) {
    let v = iter.next().value
    if(!v) break
    console.log(v)
}

let pseudo = {
    0: 'gold',
    1: 'black',
    length: 2
}

let arr = Array.from(pseudo)
console.log(Array.isArray(arr))

range.from = 10
range.to = 20
arr = Array.from(range)
console.log(Array.isArray(arr))