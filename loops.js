function forLoop(array){
 var newarr = [];
 for (let i = 0; i < 25; i++){
 greeting = "`I am ${i} strange loop${i === 0 ? \'\' : \'s\'}.`";
 newarr[i] = greeting;
  }
 return newarr;
}

function whileLoop(n){
  while (n > 0) {
    
  console.log(n);
  --n;
  }
  return "done";
}

function doWhileLoop(array){
  do{ 
    // for (let i = 1; i < array.length; ++i){
      array.pop();
  //  }
  }
  while (array.length != 0);
    
  return false;
}