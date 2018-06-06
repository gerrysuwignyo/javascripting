var password = process.argv[2];


function obfuscate(password) {
  var obfuscated = "";
  for (var i=0; i < password.length; i++){
    if (password[i] === 'a') {
      obfuscated += "4";
    }else if (password[i] === 'e'){
      obfuscated += "3";
    }else if (password[i] === "o"){
      obfuscated += "0";
    }else if (password[i] === "l"){
      obfuscated += "1";
    }else {
      obfuscated += password[i];
    }
  }
  return obfuscated;
}

console.log(obfuscate(password));
