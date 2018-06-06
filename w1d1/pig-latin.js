var myArgs = process.argv.slice(2);


function pigLatin(words){
  var output = words.slice(1) + words[0] + "ay";
  return output;
  }


for (var i = 0; i < myArgs.length; i++){
  console.log(pigLatin(myArgs[i]));
}


