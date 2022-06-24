export class User {

  constructor(age){
    this.age = age;
  }

  mercuryAgeCalc(lifeExpect){
    this.planetAge = this.age / .24;
    this.lifeExpectancy = (lifeExpect) - this.planetAge;
    this.pastDeath = this.pastDeathCalc(lifeExpect);
  }

  venusAgeCalc(lifeExpect){
    this.planetAge = this.age / .62;
    this.lifeExpectancy = (lifeExpect) - this.planetAge;
    this.pastDeath = this.pastDeathCalc(lifeExpect);
  }

  marsAgeCalc(lifeExpect){
    this.planetAge = this.age / 1.88;
    this.lifeExpectancy = (lifeExpect) - this.planetAge;
    this.pastDeath = this.pastDeathCalc(lifeExpect);
  }

  jupiterAgeCalc(lifeExpect){
    this.planetAge = this.age / 11.86;
    this.lifeExpectancy = (lifeExpect) - this.planetAge;
    this.pastDeath = this.pastDeathCalc(lifeExpect);
  }

  pastDeathCalc(lifeExpect){
    if (this.planetAge > lifeExpect){
      return this.lifeExpectancy * -1;
    }else{
      return "No";
    }
  }
}