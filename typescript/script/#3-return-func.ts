function sum(a: number, b: number): number {
    return a + b
}

function log(message): void {
    console.log(message)
}

function infinite(): never {
    while(true) { 
    }
}

function throwerr(): never {
    throw new Error()
}