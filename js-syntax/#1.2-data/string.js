'use strict'
let s = '\t1\n2\n3'

console.log(s)
console.log('first line\nsecond line')
console.log('fun\n\tcode')
console.log('text: \'http:\\\\google.com\'')
console.log('\u{20331} \u00A9 \u{1F60D}')

let str = 'Natural\nA beating heart of stone'

console.log(str[1])
console.log(str.charAt(1))

for (let s of str) {
    console.log(s)
}

console.log(str.indexOf('ea'))
console.log(str.includes('stone'))
console.log(str.startsWith('Natural'))
console.log(str.endsWith('stone'))

console.log(str.slice(2, 6))
console.log(str.slice(8))
console.log(str.slice(-8, -6))

console.log(str.substring(2, 6))
console.log(str.substring(6, 2))

console.log(str.substring(0, 7))

console.log('ё'.codePointAt(0))
console.log(String.fromCodePoint(90))

console.log('Österreich'.localeCompare('Zealand'))

console.log('𝒳'.length)
console.log('😂'.length) 
console.log('𩷶'.length)

console.log('K\u0307')
console.log('U\u0307\u0323'.length)
console.log('U\u0307\u0323'.normalize() === 'U\u0323\u0307'.normalize())
console.log('U\u0307\u0323'.normalize().length)

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1)
}

console.log(ucFirst('lithuim'))

function checkSpam(str) {
    let s = str.toLowerCase()
    return s.includes('xxx') || s.includes('viagra')
}

function truncate(str, maxLen) {
    if(str.length <= maxLen) return str

    return str.substr(0, maxLen-1) + '.'
}


console.log(truncate('cat and dog', 4))

function extractCurrencyValue(str) {
    return +str.slice(1)
}

console.log(extractCurrencyValue('$142'))