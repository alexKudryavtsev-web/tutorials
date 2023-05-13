interface Animal {
    eat(food): void,
    massa: number,
    color: string[]
}

interface Mammalia extends Animal {
    feedMilk(): void
}