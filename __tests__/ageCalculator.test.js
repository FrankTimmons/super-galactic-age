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
});