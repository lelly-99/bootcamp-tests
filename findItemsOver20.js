function findItemsOver20(items){
    var itemsOver20 = []
    for(var i=0;i<items.length;i++){
      if(items[i].qty > 20){
        itemsOver20.push(items[i]);
      }
    }
    return itemsOver20;
  }