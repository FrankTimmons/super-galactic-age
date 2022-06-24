import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { User } from './js/ageCalculator.js'

$('form#age-calc-form').submit(function(event){
  event.preventDefault();
  let age = parseInt($('#age').val());
  let planet = $("input:radio[name=planet]:checked").val();
  let newUser = new User(age);
  planetChecker(newUser, planet);
});

const planetChecker = (user, planet) => {
  if (planet == "Mercury"){
    user.mercuryAgeCalc();
  }else if (planet == "Venus"){
    user.venusAgeCalc();
  }else if (planet == "Mars"){
    user.marsAgeCalc();
  }else {
    user.jupiterAgeCalc();
  }
}