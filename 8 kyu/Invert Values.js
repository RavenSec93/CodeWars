function invert(array) {
    let array2 = []
    for (let index = 0; index < array.length; ++index) {
      let element = -(array[index]);
      array2.push(element)
  }
    return array2
  }