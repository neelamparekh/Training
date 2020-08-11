class Milk { // Parent
    constructor (productname){
        this.productname = productname;
    }
skimmed(){
console.log(`${this.productname}`);
}
unskimmed(){

}
}
class Yogurt extends Milk {
    constructor (name){
        super(name);
    }
    bacteria(){

    }
}
class Creame extends Milk {
    constructor(name){
        super(name);
    }
    sour(){

    }
    churn(){


    }
    beat(){

    }
}
class Butter extends Creame{
    constructor(name){
        super(name);
    }

}
const p1 = new Milk("Yogurt");
p1.skimmed();
  
    