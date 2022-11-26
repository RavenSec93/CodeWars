function XO(str) {
    const letters = str.split('');
    if ((letters.filter(x => x == 'x').length ) == (letters.filter(x => x == 'o').length )) {
      return true;
    } else return false;
  }