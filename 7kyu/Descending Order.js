function descendingOrder(n){
  let output = []
  sNumber = n.toString();
  
  for (var i = 0, len = sNumber.length; i < len; i += 1) {
      output.push(+sNumber.charAt(i));
  }

  output.sort().reverse();
  let num = +output.join("")
  return num;

  }