'use strict'

let arr = ['Main', 'Fun', 'Area']

let [f1, f2, f3] = arr
console.log(f1, f2, f3)

let [b1, , b3] = arr
console.log(b1, b3)

let [k1, ...last] = arr
console.log(k1, last)

let [, , , l=null] = arr
console.log(l)

let obj = {
    title: 'Okey',
    width: 400,
    height: 300
}

let {title, width, height} = obj
console.log(title, width, height)

let {title: t, width: w, height: h} = obj
console.log(t, w, h)

let {title: article, subtitle: sub = 'not found', ...sizes} = obj
console.log(article, sub, sizes)

let strongObj = {
    title: 'Strong',
    items: ['el1', 'el2'],
    sizes: {
        width: 340,
        height: 120
    }
}
let {
    title: someTitle,
    items: [el1, el2],
    sizes: {
        width: strongWidth,
        height: strongHeight
    }
} = strongObj
console.log(someTitle, el1, el2, strongWidth, strongHeight)

function helpFunc({ count = 10, type = String, mp = (val) => val.toString }) {
    console.log(count, type, mp)
}

helpFunc({count: 14})