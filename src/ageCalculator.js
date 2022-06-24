export class User {

  constructor(age){
    this.age = age;
  }

  mercuryAgeCalc(){
    this.mercuryAge = this.age / .24;
  }
  
  venusAgeCalc(){
    this.venusAge = this.age / .62;
  }
}