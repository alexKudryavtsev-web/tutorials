//            Классы-прототипы.
// Примерами классов-прототипов являеются String(), Array() и т.д.
// Конструктор класс содержит уникальное содержимое
function Person(name, id) {
    this.name = name;
    this.id = id;

    Person.counter += 1;
}

// Статическое свойство 
Person.counter = 0;

// Прототип класса содержит общие свойство,
// притом автоматически будет добавлен контекст
Person.prototype.toString = function(){
    alert(`${this.name}: ${this.id}`);
}

// создание объекта класса Person
alex = new Person('Alex', '134224');
alex.toString();
franke = new Person('Franke', '32444242');

alert(Person.counter);

/*
Классы-прототипы очень громоздкие и на смену ним есть классы,
которые в конечном случае преобразуеются в прототипы. 
Сейчас прототипы используют лишь: 
    - в низкоуровневых программах
    - поддержка Internet Exploer
*/
class ClassPerson {

    constructor (name, family, id) {
        this.name = name;
        this.family = family;
        this.id = id; // Защенный, т.е. только читать
        ClassPerson.counter += 1;
    }

    // сеттеры и гетерры
    set fullname(val) {
        let a = val.split(' ');
        this.name = a[0];
        this.family = a[1];
    }

    get fullname() {
        return `${this.name} ${this.family}`;
    }

    // свойства, преобразующие в прототип
    toString() {
        alert(`${this.name}: ${this.id}`);
    }

    // Статический метод 
    static howUsers() {
        alert(ClassPerson.counter)
    }

    static counter = 0; 
}

person = new ClassPerson('Alex', 'Kurdi', 18);
person.fullname = 'Kate JOr'
console.log(person.fullname) 


/* 
    Наследование классов
*/

class Animal {
    constructor(name) {
        this.name = name;
        this.sound = '';
    }

    voice () {
        console.log(this.sound);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
        this.sound = 'Мяу';
    }

    mur() {
        console.log('Мур');
    }
}

bnt = new Cat('Butoon');
bnt.mur();
bnt.voice();