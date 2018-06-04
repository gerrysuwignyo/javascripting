var myArgs = process.argv.slice(2);
var password = myArgs[0];


function obfuscate(password) {
  console.log(password);
  var obfuscated = "";
  for (var i=0; i < password.length; i++){
    if (password[i] === 'a') {
      obfuscated = obfuscated + "4";
    }else if (password[i] === 'e'){
      obfuscated = obfuscated + "3";
    }else if (password[i] === "o"){
      obfuscated = obfuscated + "0";
    }else if (password[i] === "l"){
      obfuscated = obfuscated + "1";
    }else {
      obfuscated = obfuscated + password[i];
    }
  }
  return obfuscated;
}

console.log(obfuscate("aaabrqjios"));
