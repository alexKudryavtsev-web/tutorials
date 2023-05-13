'use strict'

let map = new Map()

map.set('key', 'value')
map.set(1343, { name: 'john' })
map.set({ id: 1 }, { name: 'alex' })

console.log(map)

console.log(map.size)

console.log(map.get('key'))
console.log(map.get({ id: 1 }))

console.log(map.has(1343))
console.log(map.has([12, 43]))

map.delete(1343)
console.log(map)

map.clear()
console.log(map)

map
    .set('new-key1', 1)
    .set('new-key2', 2)
    .set('new-ket3', 3)
console.log(map)

for(let [key, val] of map) {
    console.log(key, val)
}

for(let val of map.values()) {
    console.log(val)
}

for(let key of map.keys()) {
    console.log(key)
}

let fromList = new Map([
    ['believer', 1],
    ['thunder', 3],
    ['machine', 4]
])
console.log(fromList)

let fromObj = new Map(Object.entries({
    key: 12,
    song: null,
    action() {
        console.log('method')
    }
}))
console.log(fromObj)

let fromEntries = Object.fromEntries([
    ['word', 12],
    ['long', true]
])
console.log(fromEntries)