import { User } from '../src/ageCalculator.js'

describe('User', () => {
  let newUser;

  beforeEach(() =>{
    newUser = new User(22);
  });

  test('Should make a new user object with an age property', () => {
    expect(newUser.age).toEqual(22);
  });

  test('Should test the users age on mercury', () => {
    expect(newUser.mercuryAge).toEqual(newUser.age * (1/.24))
  });
});