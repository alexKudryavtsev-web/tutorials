class Name {
    private _name: string
    private _lastname: string

    public get name(): string {
        return this._name + ' ' + this._lastname
    }

    public set name(val: string) {
        let arr = val.split(' ')
        this._name = arr[0]
        this._lastname = arr[1]
    }
}