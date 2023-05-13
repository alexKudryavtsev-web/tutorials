class MyGen<T>{
    ob: T;

    constructor(ob: T) {
        this.ob=ob;
    }

    getOb(): T{
        return this.ob;
    }

    showType(): void {
        console.log(typeof this.ob);
    }
}

let gen = new MyGen<number>(12)
console.log(gen.getOb())
gen.showType()
