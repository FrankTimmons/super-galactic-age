import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { User } from './js/ageCalculator.js';

$('form#age-calc-form').submit(function(event){
  event.preventDefault();
  let age = parseInt($('#age').val());
  let earthLifeExpectancy = parseInt($('#life-expect').val());
  let planet = $("input:radio[name=planet]:checked").val();
  let newUser = new User(age);
  planetChecker(newUser, planet, earthLifeExpectancy);
  $('#output').show();
  $('#planet').text(planet);
  $('#planet-age').text(newUser.planetAge);
});

const planetChecker = (user, planet, lifeExpectancy) => {
  if (planet == "Mercury"){
    user.mercuryAgeCalc(lifeExpectancy);
  }else if (planet == "Venus"){
    user.venusAgeCalc(lifeExpectancy);
  }else if (planet == "Mars"){
    user.marsAgeCalc(lifeExpectancy);
  }else {
    user.jupiterAgeCalc(lifeExpectancy);
  }
};