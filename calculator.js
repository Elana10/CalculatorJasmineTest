window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});
 
function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  } 
}


// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 1000
  document.getElementById("loan-years").value = 1
  document.getElementById("loan-rate").value = 5
  let obj = getCurrentUIValues();
  update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let objInput = getCurrentUIValues();
  let strPayment = calculateMonthlyPayment(objInput);
  updateMonthly(strPayment);

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let P = values['amount'];
  let i = values['rate'] / 12/100;
  let n = values['years'] * 12;

  let monthlyPaymentCalc = ( P * i ) / ( 1 - Math.pow((1+i),(-n)));

  let monthlyPayment = Math.round((monthlyPaymentCalc+ Number.EPSILON)* 100) /100;
  let stringPayment = monthlyPayment.toString();

  return stringPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let outputPayment = document.getElementById('monthly-payment');
  outputPayment.innerText = monthly;
  return monthly;
}

