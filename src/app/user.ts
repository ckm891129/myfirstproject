export class User {
    name:string;
    age:number;
    password: string;
    weight:number;
    height:number;

    // to create list of array
    constructor(name:string, age:number, password:string, weight:number,
    height:number){
        this.name = name;
        this.age = age;
        this.password = password;
        this.weight = weight;
        this.height =height;
    }

    isOld():boolean {
    if (this.age >= 100)
      return true;
    else
      return false;
    }

    getBMI():number {
        // let stuff:number = 12;
        return this.weight/(this.height/100 * this.height/100);
    }

    isHealty():boolean{
        if(this.getBMI() >= 18.5 && this.getBMI() <=24.9)
            return true;
        else
            return false;
    }
}

