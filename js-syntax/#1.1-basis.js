// Однострочный комментарий
/*
    Многострочный комментарий
*/

// Название переменной должно начинаться с буквы, _ и $, а далее все, что угодно.
let a = 5;

// Переменные регистро-независимые
let textHello = 'lower Camels',
    TextHello = 'Pascal',
    text_hello = 'python';

// Типы данных:
let string = 'String',
    number = 12.32, // Number обрабатывает любые числа
    bool = true,
    empty = null; // null обозначает пустую переменную, которую инициализировали

let unknow;
console.log(unknow); // undefined означает, что переменную не инициализировали

// Объекты, как ассоциативные массивы
let coord = {
    x: [10, 32],
    y: [40, 20]
}

// Оператор typeof позволяет определить тип переменной
console.log(typeof string);
console.log(typeof number);
console.log(typeof bool);
console.log(typeof empty);
console.log(typeof coord);

// Существуют встроенные коллекции:
let array = [1, 1, 1, 2, 4, 8];

// Перебор array:

// Встроенным методом forEach
array.forEach(value => {
    console.log(value);
});

// Стандартным циклом foreach
for (let i of array) {
    console.log(i);
}

// Перебрать через fori
for (let i = 0; i < array.length; i++) {
    const element  = array[i] 
}

// Другие циклы

// while
while (true) {
    break;
}

// do - while
do {
    break;
} while (true);
