export class User {
    name:string;
    age:number;
    weight:number;
    height:number;

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

