function countAllPaarl(regNum){
    var registrationNum = regNum.split(', ')
    var regNumForPaarl = [];
    for (var i=0; i<registrationNum.length;i++){
      if (registrationNum[i].includes('CJ')){
        regNumForPaarl.push(registrationNum[i]);
      }
  }
   return regNumForPaarl.length;
  }