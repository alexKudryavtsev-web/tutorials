'use strict'

let format = 'код языка-код способа записи-код страны'

format = 'ru'
format = 'en-GB'
format = 'zh-Hans-CN'

let collator = new Intl.Collator(undefined, {
    sensitivity: 'accent',
    ignorePunctuation: true,
    numeric: true
})

console.log(collator.compare('ёжик', 'яблоко'))
console.log(collator.compare('ёжик,', 'ёжик'))
console.log(collator.compare('Идея', 'идея'))

console.log(collator.compare('13', '4'))
console.log(collator.compare('4', '4'))
console.log(collator.compare('3', '4'))

let f1 = new Intl.DateTimeFormat('ru')
console.log(f1.format(new Date()))

let f2 = new Intl.DateTimeFormat('en-GB')
console.log(f2.format(new Date()))

let f3 = new Intl.DateTimeFormat('ru', {
    month: 'long',
    day: 'numeric',
    weekday: 'short'
})

console.log(f3.format(new Date()))

let numberFormat = new Intl.NumberFormat('ru', {
    currency: 'USD',
    currencyDisplay: 'symbol',
    useGrouping: true,
    style: 'currency',
    maximumSignificantDigits: 3
})

console.log(numberFormat.format(1323424))
console.log(numberFormat.format(1334.24))

let animals = ['тигр', 'ёж', 'енот', 'ехидна', 'АИСТ', 'ЯК']

let c = new Intl.Collator()
animals.sort(c.compare)

console.log(animals)