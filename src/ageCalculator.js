export class User {

  constructor(age){
    this.age = age;
  }

  mercuryAgeCalc(lifeExpect){
    this.mercuryAge = this.age / .24;
    this.mercuryLifeExpectancy = (lifeExpect) - this.mercuryAge;
  }

  venusAgeCalc(){
    this.venusAge = this.age / .62;
  }

  marsAgeCalc(){
    this.marsAge = this.age / 1.88;
  }

  jupiterAgeCalc(){
    this.jupiterAge = this.age / 11.86;
  }
}