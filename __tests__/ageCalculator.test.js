import { User } from '../src/ageCalculator.js'

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
    expect(newUser.mercuryAge).toEqual(newUser.age / .24);
  });

  test('Should test the users age on Venus', () => {
    newUser.venusAgeCalc();
    expect(newUser.venusAge).toEqual(newUser.age / .62); 
  });

  test('Should test the users age on Mars', () => {
    newUser.marsAgeCalc();
    expect(newUser.marsAge).toEqual(newUser.age / 1.88);
  });

  test('Should test the users age on Jupiter', () => {
    newUser.jupiterAgeCalc();
    expect(newUser.jupiterAge).toEqual(newUser.age / 11.86);
  });

  test('Should test the users remaining life expectancy on Mercury', () => {
    newUser.mercuryAgeCalc(78.6);
    expect(newUser.mercuryLifeExpectancy).toEqual((78.6) - newUser.mercuryAge);
  });

  test('Should test the users remaining life expectancy on Venus', () => {
    newUser.venusAgeCalc(78.6);
    expect(newUser.venusLifeExpectancy).toEqual((78.6) - newUser.venusAge); 
  });

  test('Should test the users remaining life expectancy on Mars', () => {
    newUser.marsAgeCalc(78.6);
    expect(newUser.marsLifeExpectancy).toEqual((78.6) - newUser.marsAge); 
  });

  test('Should test the users remaining life expectancy on Jupiter', () => {
    newUser.jupiterAgeCalc(78.6);
    expect(newUser.jupiterLifeExpectancy).toEqual((78.6) - newUser.jupiterAge); 
  });
});