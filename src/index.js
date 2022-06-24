import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { User } from './js/ageCalculator.js';

$('form#age-calc-form').submit(function(event){
  event.preventDefault();
  let age = parseInt($('#age').val());
  let earthLifeExpectancy = parseInt($('#life-expect').val());
  let planet = $("input:radio[name=planet]:checked").val();
  let newUser = new User(age);
  planetChecker(newUser, planet, earthLifeExpectancy);
  if (Number(age)){
    if (Number(earthLifeExpectancy)){
      deadOrNot(newUser);
    }
    $('#output').show();
    $('#planet').text(planet);
    $('#planet-life').text(planet);
    $('#planet-dead').text(planet);
    $('#dead-for').text(parseInt(newUser.pastDeath));
    $('#remaining-years').text(parseInt(newUser.lifeExpectancy));
    $('#planet-age').text(parseInt(newUser.planetAge));
  }
  
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

const deadOrNot = (user) => {
  if (user.pastDeath == "No"){
    $('#remaining-life').show();
    $('#dead').hide();
  } else {
    $('#dead').show();
    $('#remaining-life').hide();
  }
};