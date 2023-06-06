
let testObj1 = {
  amount: +10000,
  years: +5,
  rate: +5,
} 
let testObj2 = {
  amount: +400,
  years: +3,
  rate: +2,
} 
let testObj3 = {
  amount: +80000,
  years: +3,
  rate: +6,
} 


it('should calculate the monthly rate correctly',  () => {
  expect(calculateMonthlyPayment(testObj1)).toEqual('188.71');
  expect(calculateMonthlyPayment(testObj2)).toEqual('11.46');
  expect(calculateMonthlyPayment(testObj3)).toEqual('2433.75');

});


it("should return a result with 2 decimal places", function() {
  let x = calculateMonthlyPayment(testObj1);
  let y = x.split('.');
  let z = y[1];
  expect(z.length).toEqual(2);
});

