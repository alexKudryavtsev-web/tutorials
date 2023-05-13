'use strict'

let obj = {
    label1: 1
}

let objProxy = new Proxy(obj, {})

objProxy.label2 = 2

console.log(objProxy)
console.log(obj)

let numberArr = [1,32,43,42543,535345]

numberArr = new Proxy(numberArr, {
    get(target, property) {
        return property in target ? target[property] : -1
    },
    set(target, property, value) {
        if(typeof value === 'number') {
            target[property] = value
            return true
        }
        return false
    }
})

console.log(numberArr[323])

// numberArr.push('String')
console.log(numberArr)

let user = {
    name: 'John',
    age: 33,
    _id: 1324234423432,
    _bank: 'Visa'
}

user = new Proxy(user, {
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'))
    },
    deleteProperty(target, property) {
        if(!property.startsWith('_')) {
            delete target[property]
            return true
        }
        throw new SyntaxError(`${property} is private`)
    }
})

for(let key in user) {
    console.log(`${key} : ${user[key]}`)
}

delete user.age
// delete user._id

obj = {
    _name: 'Alex',
    get name() {
        return this._name
    }
}

console.log(Reflect.get(obj, 'name'))

obj = new Proxy(obj, {
    get(target, property, receiver) {
        // return target[property]
        return Reflect.get(target, property, receiver)
    }
})

let obj2 = {
    __proto__: obj,
    _name: 'Gordon'
}

console.log(obj2.name)

let range = {
    start: 1,
    end: 10
}

range = new Proxy(range, {
    has(target, property) {
        return property >= target.start && property <= target.end
    }
})

console.log(3 in range)

let client = {
    name: 'Alice'
}

client = new Proxy(client, {
    get(target, property, receiver) {
        if(!Reflect.has(target, property)) {
            throw new Error(`${property} not`)
        }
        return Reflect.get(target, property, receiver)
    }
})

// client.local

let array = [1, 3, 5, 6]

array = new Proxy(array, {
    get(target, property, receiver) {
        if(property < 0) {
            return Reflect.get(target, target.length - Math.abs(property), receiver)
        }
        return Reflect.get(...arguments)
    }
})

console.log(array[3])
console.log(array[-3])
