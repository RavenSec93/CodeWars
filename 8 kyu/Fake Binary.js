function fakeBin(x){
    let fakebin = ''
    for (let i in x) {
      x[i] < 5 ? fakebin += '0' : fakebin += '1'
      }
    return fakebin
  }