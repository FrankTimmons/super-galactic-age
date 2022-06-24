export class User {
  constructor(age){
    this.age = age;
  }
  mercuryAgeCalc(){
    this.mercuryAge = this.age / .24;
  }
}