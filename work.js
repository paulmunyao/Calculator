// // //addition
let add = function add(number1, number2) {
  return number1 + number2;
};
jQuery("form#add").submit(function (event) {
  event.preventDefault();
  let number1 = parseInt(jQuery("#add1").val());
  let number2 = parseInt(jQuery("#add2").val());
  let result = add(number1, number2);
  jQuery("#output").text(result);
});

//subtraction
let subtract = function subtract(number1, number2) {
  return number1 - number2;
};
jQuery("form#subtract").submit(function (event) {
  event.preventDefault();
  let number1 = parseInt(jQuery("#subtract1").val());
  let number2 = parseInt(jQuery("#subtract2").val());
  let result = subtract(number1, number2);
  jQuery("#out").text(result);
});

// multiplication
let multiplication = function multiplication(number1, number2) {
  return number1 * number2;
};
jQuery("form#multiplication").submit(function (event) {
  event.preventDefault();
  let number1 = parseInt(jQuery("#multiplication1").val());
  let number2 = parseInt(jQuery("#multiplication2").val());
  let result = multiplication(number1, number2);
  jQuery("#outp").text(result);
});

// Division
let division = function division(number1, number2) {
  return number1 / number2;
};
jQuery("form#division").submit(function (event) {
  event.preventDefault();
  let number1 = parseInt(jQuery("#division1").val());
  let number2 = parseInt(jQuery("#division2").val());
  let result = division(number1, number2);
  jQuery("#outpt").text(result);
});

//   //multiplication for multiplication it's not a must you put an intiger
//   var multiply = function multiply(number1,number2) {
//       return number1 * number2;
//   };
//   var number1 = prompt("Enter a number:");
//   var number2 = prompt("Enter another a number");
//   alert(multiply(number1, number2));

//   //division
//   var divide = function division(number1, number2) {
//       return number1 / number2;
//   };
//   var number1 = prompt("Enter a number");
//   var number2 =prompt("Enter another number");
//   alert(divide(number1, number2));

// jQuery("#add1").val();
// jQuery("#add2").val();
