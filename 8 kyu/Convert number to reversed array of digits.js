function digitize(n) {
    var myInt = n;
    var temp = ''+myInt
    var intArr = [...temp].reduce((acc, z)=> acc.concat(+z), [] );
    return intArr.reverse()
  } 