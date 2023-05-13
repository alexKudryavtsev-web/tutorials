class User {
    name: string
    isMan: boolean

    constructor(name: string, isMan: boolean) {
        this.name = name
        this.isMan = isMan
    }

    getInfo(): void {
        console.log(`name ${this.name};\nisMan ${this.isMan};`)   
    }
}

class WorkerUser extends User {
    company: string

    constructor(name: string, isMan: boolean, company:string) {
        super(name, isMan)
        this.company = company   
    }

    getInfo() {
        super.getInfo()
        console.log(`company: ${this.company};`)
    }
}

let alex = new WorkerUser('alex', true, 'Google')
alex.getInfo()