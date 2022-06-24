import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { User } from './js/ageCalculator.js'

$('form#age-calc-form').submit(function(event){
  event.preventDefault();
  let age = $('#age').val();
  let planet = $("input:radio[name=planet]:checked").val();
  console.log(age);
  console.log(planet);
})