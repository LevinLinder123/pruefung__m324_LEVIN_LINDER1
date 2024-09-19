console.log(chalk.blue('it works'));
var myUnsignedVariable = 5;

function checkEquality(a, b) {
  if (a === b) {
    console.log('Values are equal');
  } else {
    console.log('Values are not equal');
  }
}

myUnsignedVariable++;
checkEquality(5, myUnsignedVariable);
