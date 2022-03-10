const calculateChange = function(total, cash) {
  // Add higher denominations at the start of both arrays
  const denominations = ['twentyDollar', 'tenDollar', 'fiveDollar', 'twoDollar', 'oneDollar', 'quarter', 'dime', 'nickel', 'penny'];
  const centValues = [2000, 1000, 500, 200, 100, 25, 10, 5 , 1];
  
  let due = cash - total;
  let change = {};
  
  for (let i = 0; i < denominations.length; i++) {
    let key = denominations[i];
    let value = Math.floor(due / centValues[i]);
    
    if (value > 0) {
      change = Object.assign(change, {[key]: value});
      due -= value * centValues[i];
    }
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));