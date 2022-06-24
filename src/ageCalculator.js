export class User {

  constructor(age){
    this.age = age;
  }

  mercuryAgeCalc(lifeExpect){
    this.mercuryAge = this.age / .24;
    this.lifeExpectancy = (lifeExpect) - this.mercuryAge;
    if (this.mercuryAge > lifeExpect){
      this.mercuryPastDeath = this.pastDeathCalc();
    }
  }

  venusAgeCalc(lifeExpect){
    this.venusAge = this.age / .62;
    this.lifeExpectancy = (lifeExpect) - this.venusAge;
  }

  marsAgeCalc(lifeExpect){
    this.marsAge = this.age / 1.88;
    this.lifeExpectancy = (lifeExpect) - this.marsAge;
  }

  jupiterAgeCalc(lifeExpect){
    this.jupiterAge = this.age / 11.86;
    this.lifeExpectancy = (lifeExpect) - this.jupiterAge;
  }

  pastDeathCalc(){
    return this.lifeExpectancy * -1;
  }
}