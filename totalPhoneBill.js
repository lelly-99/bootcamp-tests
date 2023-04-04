function totalPhoneBill(cost){
    var costs = cost.split(', ');
    var totalCost = 0;
    for(var i=0; i<costs.length;i++){
      if(costs[i].includes("c")){
        totalCost += 2.75;
      }
      else if(costs[i].includes("s")){
        totalCost += 0.65;
      }
    }
    return "R" + totalCost.toFixed(2);
  }