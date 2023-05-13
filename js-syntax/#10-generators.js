// Генераторы
function* gen() {
    yield 1;
    console.log('выполнено');
    yield 2;
    console.log('выполнено');
    yield 3;
    console.log('выполнено');
}

// Ручной способ
let myGen = gen();
console.log(myGen.next().value);
console.log(myGen.next().value);
console.log(myGen.next().value);

// Перебор циклом, тк генераторы реализуют итератор
for (let i of gen()) {
    console.log(i)
}

// К примеру перепишем range
function range(from, to) {
    this[Symbol.iterator] = function* () {
        for (let i = from; i <= to; i++) yield i;
    }
}

for (let i of new range(2, 10)) {
    console.log(i);
}

// Кроме того, что он позволяет писать итераторы короче, еще он позволяет организовать общение
function* test() {
    let result = yield '2 + 2 = ?';
    if (result == 4) alert('Yes');
    else alert('No')
}

let testGen = test();
let answ = prompt(testGen.next().value);
testGen.next(answ);