'use strict'

let queue = ['alex', 'ivan', 'sergei', 'ed']
console.log(queue)

queue.push('oleg')
console.log(queue)

queue.shift()
console.log(queue)

queue.unshift('alex')
console.log(queue)

let card = ['QB', '4B', 'J']

card.push('AB')
console.log(card)

let myCard = card.pop()

console.log(myCard)
console.log(card)

let arr = [1, 5, 76]

arr[10] = 10
console.log(arr)

arr.name = '10'
console.dir(arr)

let l = [1, 2, 3, 0, 5, 7578, 8, 78, 7, 65, 323]

console.log(l.length)
console.log(l)

console.log((l.length=5))
console.log(l)

console.log((l.length=0))
console.log(l)

console.log([])
console.log([] + [])
console.log([] + [1,4,6])

console.log([1,2,4].toString() === '1,2,4')

let f = [1,2,4,5,678,9]

f.forEach((val, index, arr) => {
    console.log(val, index, arr)
})

f.splice(1, 1, 'it', 'not')
console.log(f)

f.splice(3, 3, 'yes')
console.log(f)

f.splice(0, 0, 'new', 'value', 'append')
console.log(f)

f.splice(-1)
console.log(f)

console.log(f.slice(0, 4))
console.log(f.slice())

console.log(f.concat([12,46,7], 3, 'bag'))
console.log(f.concat(3, 'bag', [12, 'faxs',7], [1,5]))

let m = ['about', 'be', 'new', 'great']

console.log(m.map((val, index, arr) => {
    return val.length
}))

m.sort((a,b) => a.length - b.length)
console.log(m)

m.reverse()
console.log(m)

console.log(m.join(', '))

let o = {
    n: 2
}
console.log(Array.isArray(o))

o = [1,43,6,764]
console.log(Array.isArray(o))

let student = {
    min: 18,
    max: 60,
    canJoin(enrollee) {
        return enrollee.age <= this.max && enrollee.age >= this.min
    }
}

let list = [
    {age: 9},
    {age: 40},
    {age: 60}
]

list = list.filter(student.canJoin, student)
console.log(list)

let l = [75, 404, 230, 169, 353]

console.log(l.find((val, index, arr) => {
    return val.toString().split('').reverse().join('') === val.toString()
}))

console.log(l.filter((val, index, arr) => {
    return val.toString().split('').reverse().join('') === val.toString()
}))