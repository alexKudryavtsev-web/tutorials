'use strict'

let s = new Set([1, 3, 67, 4, 4])
console.log(s)

s.add(12)
s.add('faint')
s.add('park')
console.log(s)

console.log(s.size)

s.delete(12)
console.log(s)

console.log(s.has(12))
console.log(s.has('park'))

s.clear()
console.log(s)

for (let a of s) {
    console.log(a)
}

s.forEach((val, valAgain, set) => {
    console.log(val)
})

function unique(arr) {
    return Array.from(new Set(arr))
}

console.log(unique([1, 1, 1, 3, 5465, 7, 676, 7543]))