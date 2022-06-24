import { User } from '../src/js/ageCalculator.js'

describe('User', () => {
  let newUser;

  beforeEach(() =>{
    newUser = new User(22);
  });

  test('Should make a new user object with an age property', () => {
    expect(newUser.age).toEqual(22);
  });

  test('Should test the users age on Mercury', () => {
    newUser.mercuryAgeCalc();
    expect(newUser.planetAge).toEqual(newUser.age / .24);
  });

  test('Should test the users age on Venus', () => {
    newUser.venusAgeCalc();
    expect(newUser.planetAge).toEqual(newUser.age / .62); 
  });

  test('Should test the users age on Mars', () => {
    newUser.marsAgeCalc();
    expect(newUser.planetAge).toEqual(newUser.age / 1.88);
  });

  test('Should test the users age on Jupiter', () => {
    newUser.jupiterAgeCalc();
    expect(newUser.planetAge).toEqual(newUser.age / 11.86);
  });

  test('Should test the users remaining life expectancy on Mercury', () => {
    newUser.mercuryAgeCalc(78.6);
    expect(newUser.lifeExpectancy).toEqual((78.6) - newUser.planetAge);
  });

  test('Should test the users remaining life expectancy on Venus', () => {
    newUser.venusAgeCalc(78.6);
    expect(newUser.lifeExpectancy).toEqual((78.6) - newUser.planetAge); 
  });

  test('Should test the users remaining life expectancy on Mars', () => {
    newUser.marsAgeCalc(78.6);
    expect(newUser.lifeExpectancy).toEqual(78.6 - newUser.planetAge); 
  });

  test('Should test the users remaining life expectancy on Jupiter', () => {
    newUser.jupiterAgeCalc(78.6);
    expect(newUser.lifeExpectancy).toEqual(78.6 - newUser.planetAge); 
  });

  test('Should check if the user has surpassed the life expectancy and return it as a positive number', () => {
    newUser.mercuryAgeCalc(78.6);
    expect(newUser.pastDeath).toEqual((newUser.lifeExpectancy) * -1); 
    newUser.jupiterAgeCalc(78.6);
    expect(newUser.pastDeath).toEqual("No"); 
  });
});