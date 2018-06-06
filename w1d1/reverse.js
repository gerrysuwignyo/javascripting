var myArgs = process.argv.slice(2);

console.log(myArgs);

function reverse(words){
  var reversed = '';
  for (var i = (words.length - 1); i >= 0; i--){
    reversed += words[i];
  }
  return reversed;
}

console.log(reverse('abcde'))


for (var i = 0; i < myArgs.length; i++){
  console.log(reverse(myArgs[i]));
}
