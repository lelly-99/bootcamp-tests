function countAllFromTown(regNum,locIndicator){
    var regNums = regNum.split(',')
    var countfromTown = []
    for(var i=0;i<regNums.length;i++){
      var regNumber = regNums[i];
      if(regNumber.includes(locIndicator)){
        countfromTown.push(regNumber)
      }
    }
    return countfromTown.length
  }