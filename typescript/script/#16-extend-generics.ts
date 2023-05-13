interface IUser {
 
    getInfo();
}
class User implements IUser {
 
    _id: number;
    _name: string;
    constructor(id:number, name:string) {
 
        this._id = id;
        this._name = name;
    }
    getInfo() {
 
        console.log("id: " + this._id + "; name: " + this._name);
    }
}
 
class Employee extends User {
 
    _company: string;
    constructor(id: number, name: string, company: string) {
 
        super(id, name);
        this._company = company;
    }
 
    getInfo() {
 
        console.log("id: " + this._id + "; name: " + this._name+"; company:"+this._company);
    }
}