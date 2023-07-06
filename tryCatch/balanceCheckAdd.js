let credits = 9;

function checkBalance(creditBalance) {
  if (creditBalance < 10)
    throw new Error('Balance too low. Account suspended!');
}

function addBalance(creditBalance, credits) {
  try {
    checkBalance(creditBalance);
    creditBalance += credits;
    return creditBalance;
    
  } catch (error) {
    return error.message;
  }
}

console.log(addBalance(credits, 30));