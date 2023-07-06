const validate = (g1, g2, g3, g4) => {
  if (typeof g1 !== 'number' || typeof g2 !== 'number' || typeof g3 !== 'number' || typeof g4 !== 'number')
    throw new Error('Invalid data type. All grades must be NUMBERS!');
}

const checkApproved = (average) => {
  if (average >= 7)
    return console.log(`Student is approved`);
  else
    return console.log(`Student has failed!`);
}

const calcAverage = (g1, g2, g3, g4) => {
  try {
    validate(g1, g2, g3, g4);
    let avg = (g1 + g2 + g3 + g4) / 4;
    checkApproved(avg);
    return (`The average grade is ${avg}`);

  } catch (error) {
    return error.message
  } finally {
    console.log('Thanks for using Tabajara Systems Calculator for Average of Medium Media');
  }
}

console.log(calcAverage(7,7,5,9));