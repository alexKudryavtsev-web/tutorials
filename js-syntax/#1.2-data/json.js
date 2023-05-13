'use strict'

let student = {
    age: 21,
    name: 'John',
    courses: ['engineer software', 'data and algorithm', 'english'],
    progress: {
        'engineer software': true,
        'data and algorithm': true,
        'english': false
    },
    takeExam() {
        console.log('take ...')
    }
}

let str = JSON.stringify(student)
console.log(str)

str = JSON.stringify(student, ['courses', 'progress', 'english'])
console.log(str)

str = JSON.stringify(student, (key, val) => {
    return (typeof(val) === 'number') ? undefined : val
})
console.log(str)

str = JSON.stringify(student, null, 5)
console.log(str)

let room = {
    number: 23,
    toJSON() {
        return this.number.toString()
    }
}

console.log(JSON.stringify(room))

let json = `{
    "name": "Alex",
    "isAdmin": false,
    "worker": {
        "isWorker": true,
        "salary": 120000
    },
    "birthday": "1995-04-18"
}`

let obj = JSON.parse(json)
console.log(obj)

obj = JSON.parse(json, (key, value) => {
    if(key === 'birthday') {
        return new Date(Date.parse(value))
    }
    return value
})
console.log(obj)