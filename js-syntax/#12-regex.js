/* 
    Регулярные выражения - это одна из сильных сторон в JS
    Состоит она из паттерны, по которому будут искать и флаг, указывающий на режим поиска
    reg = /patten/flag;

    Или создать через new RegExp(). Оно используется лишь, когда нужно вставить паттерн что-либо
    reg = new RegExp('pattern', 'flag');

    Флаги:
        - i, поиск осуществляет без регистра
        - g, ищет все совпадения
        - ...
*/

/*               Классы регулярных выражений               */
reg = /java/g;
text = 'javascript не путать с java';

// Получает плоский массив совпадений
console.log(text.match(reg));

// Возвращает итератор с подробной информацией
for (let key of text.matchAll(reg)) {
    console.log(key);
}

// Вернет первый индекс совпадения
console.log(text.search(reg));

// Проверит, содержится ли reg в text
console.log(reg.test(text));

/* 
    exec универсальный метод поиска.
    Если указан фла g, то с каждой новой итерацией он будет возвращать новое значение
    Есть свойство lastIndex, который указывает индекс с конца, которого надо искать
*/
reg.lastIndex = 15;
while (res = reg.exec(text)) {
    console.log(res);
}


// Разделение по паттерну
sep = / /;
console.log(text.split(sep));

//replace позволяет заменить все подстроки соотвествующие паттерна на другую строку
text = text.replace(/java/g, 'ява');
console.log(text);


/*               КЛАССЫ СИМВОЛЫ               */
text = '+7(915)-748-59-71'
reg = /\d/g;

console.log(text.match(reg).join(''));

/*
    \d - все цифры
    \D - все кроме цифер

    \s - все пробельные символы
    \S - все не пробельные символы

    \w - все символы
    \W - все кроме символов

    \b - означает границу между символами
    \B - означает не границу между символами
*/
console.log('Java this Enterpraise'.match(/\bJava\b/));
console.log('Javascript this Browser'.match(/\bJava\b/));

// . является метасимволом, обозначающий любой символ
reg = /CSS.3/
console.log(reg.test('CSS-3'));
console.log(reg.test('CSS:3'));
console.log(reg.test('CSS 3'));

// . не обрабтывает \n, для того чтоб это устранить используется флаг s
reg = /A.B/s;
console.log('A\nB'.match(reg));

// Косая черта позволяет экранировать метасимволы
reg = /\.com/;
console.log('google.com'.match(reg));

// Наборы
reg = /[,!? \.]/g
console.log('Кноп, зачем ты уронила цвет!?'.match(reg));

// Диапазоны
reg = /[0-9A-F]/g;
console.log('349A - это...'.match(reg).join(''));

// Метасимволы
// {n} - сколько должно повториться
reg = /7\d{7,10}/;
console.log(reg.test('77485971'))

// +, тоже самое что и {1,}
reg = /\d+/g;
console.log('+7(915)-748-59-71'.match(reg));

// ?, тоже самое что и {0,1}
reg = /colou?r/;
console.log(reg.test('color'));
console.log(reg.test('colour'));

// *, тоже самое что и {0,}
reg = /\d*\.?\d*/;

console.log(reg.test('.32'));
console.log(reg.test('2'));
console.log(reg.test('2.32'));

colorReg = /#[0-9A-F]{6}/ig
console.log('#f1f2f4 #f102x'.match(colorReg))

// Скобки позволяеют применить квантор сразу к строке
reg = /[-.\w]+@([\w-]+\.)+[\w]{2,20}/g

email = 'qwertyShura@mail.com';
console.log(email.match(reg));

//  Скобки можно именовать
reg = /(?<year>[0-9]{4}).(?<month>[0-9]{2}).(?<date>[0-9]{2})/

let {
    year,
    month,
    date
} = '2019:08:17'.match(reg).groups;
console.log(`${year} ${month} ${date}`);

// Скобки можно вкладывать в друг друга, но результат будет плоским
reg = /<(([a-z]+)\s*([^>]*))>/i;
group = '<div class="my">'.match(reg);
console.log(group);

numberReg = /-?([0-9]+)[\.]?([0-9]*)/g;
numbers = '-42.5 43.7 -43'.match(numberReg)
console.log(numbers);

expReg = /(?<left>-?\d+(\.\d+)?)\s*(?<oper>[-+/*])\s*(?<right>-?\d+(\.\d+)?)?/
let {
    left,
    oper,
    right
} = '-32.43 * 12'.match(expReg).groups;
console.log(`${left}, ${oper}, ${right}`);

colorReg = /#([0-9a-f]{3}){1,2}/ig;
c = '#666 #ffffff #013f'.match(colorReg);
console.log(c);

// Символ начала строки ^ и конец $
macReg = /^([0-9a-f]{2}:){5}[0-9a-f]{2}$/i
b = macReg.test('01:40:45:30:50:AF');
console.log(b);

// Флаг m позволяет нам работать с каждой отдельной линией, как со строкой
str = `1 винни
2 ежик
3 эш`;

console.log(str.match(/^.*/gm));

// Граница слова \d
time = /\b\d\d:\d\d\b/ig;
console.log('12:010, 04:04, 12:20'.match(time));

// Альтернация |
time = /\b([01]\d|2[0-3]):([0-5]\d)\b/ig;

console.log('12:010, 23:03, 26:01 04:04, 12:20'.match(time));