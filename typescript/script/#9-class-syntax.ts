class Pet {
    name: string
    old: number

    constructor(name: string, old: number) {
        this.name = name
        this.old = old
        Pet.count++
    }

    getInfo(): string {
        return this.name + ': ' + this.old
    }

    private static count = 0
    static getCount(): number {
        return Pet.count;
    }
}


let p1 = new Pet('Шарик', 3)
let p2 = new Pet('Кнопка', 10)
let p3 = new Pet('Наташа', 30)

let str = p1.getInfo()
console.log(str)

console.log(Pet.getCount())