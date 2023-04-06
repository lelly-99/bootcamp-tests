function mostProfitableDepartment(salesData){
    var departmentCounter = {};
    var dep = 0;
    var depName = '';
    for(var i=0;i<salesData.length;i++){
      var saleData = salesData[i];
      if(departmentCounter[saleData.department] === undefined){
        departmentCounter[saleData.department] = 0;
      }
      departmentCounter[saleData.department] += saleData.sales;
    }
    for(var department in departmentCounter){
      if(departmentCounter[department]>dep){
        dep = departmentCounter[department];
        depName = department;
      }
    }
   return depName;
  }