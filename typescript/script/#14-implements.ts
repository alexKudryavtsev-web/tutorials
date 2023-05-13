interface IClosable {
    close(): void
}

interface IAppendable {
    append(value): void
}

class Data implements IClosable, IAppendable {
    data: any[]
    isClose: boolean = false

    getByIndex(index): any {
        return this.data[index]
    }

    close(): void {
        this.isClose = true
    }

    append(value): void {
        this.data.push(value)
    }
}