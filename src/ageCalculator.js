export class User {

  constructor(age){
    this.age = age;
  }

  mercuryAgeCalc(lifeExpect){
    this.mercuryAge = this.age / .24;
    this.mercuryLifeExpectancy = (lifeExpect) - this.mercuryAge;
  }

  venusAgeCalc(lifeExpect){
    this.venusAge = this.age / .62;
    this.venusLifeExpectancy = (lifeExpect) - this.venusAge;
  }

  marsAgeCalc(lifeExpect){
    this.marsAge = this.age / 1.88;
    this.marsLifeExpectancy = (lifeExpect) - this.marsAge;
  }

  jupiterAgeCalc(lifeExpect){
    this.jupiterAge = this.age / 11.86;
    this.jupiterLifeExpectancy = (lifeExpect) - this.jupiterAge;
  }
}