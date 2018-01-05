function forLoop(array){
 var newarr = [];
 
 for (let i = 0; i < 25; i++){
 
 newarr.push("`I am ${i} strange loop${i === 0 ? \'\' : \'s\'}.`");
 
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
function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{ 
    // for (let i = 1; i < array.length; ++i){
      array.pop();
  //  }
  }
  while (maybeTrue() && array.length - 1 > 0);
    
  return array;
}