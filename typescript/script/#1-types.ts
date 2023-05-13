// number
let n1: number = 12
let n2: number = 13.124

//string
let str = 'Hello World'
let str1 = `"${str}"`

// bool
let isTrue: boolean = true
let isFalse: boolean = false

// Array
let arr: number[] = [12, 43, 65, 23]
arr.push(13, 54)
arr.reverse();

console.log(arr)

// Кортеж - это массив с фиксированной длиной и типом для индекса
let tuple: [string,number,number[]] = ['Alex', 13, [43, 54, 53]];

tuple[0] = 'Kate'
tuple[2].push(13, 5)

console.log(tuple)

// any - динамический тип
let variable: any = 13
variable = 'Hello'
variable = [13]

console.log(variable)