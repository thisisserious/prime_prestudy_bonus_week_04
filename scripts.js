function splinter(a,b) {
  var z = a*b;
  var testArray = [a, b, z];
for(i = 0; i < testArray.length; i++) {
  if (i <= 3) {
  return testArray;
  }
  else {
    return ("nope");
  }
}
}

console.log (splinter(1,2));
