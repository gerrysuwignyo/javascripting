var dices = process.argv[2];

function rollDice(dice){
  var rolledDice = [];
  var result = 0;
  for (var i=0; i < dice; i++){
    result = Math.floor(Math.random() * 6 + 1);
    rolledDice.push(result);
  }
  return ("Rolled "+ dice +" dice: "+ rolledDice.join(', ') + '.');
}


console.log(rollDice(dices));