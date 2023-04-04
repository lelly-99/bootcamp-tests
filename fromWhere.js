function fromWhere(registrationNumber){
    if(registrationNumber.startsWith("CY")){
       return "Bellville";
    }else if(registrationNumber.startsWith("CJ")){
       return "Paarl";
    }else if(registrationNumber.startsWith("CA")){
       return "Cape Town";
    }else if(registrationNumber.startsWith("CL")){
        return "Stellenbosch"
    }else if(registrationNumber.startsWith("CN")){
        return "Wellington";
    }else if(registrationNumber.startsWith("CT")){
        return "Ceres";
    }else if(registrationNumber.startsWith("ZN")){
       return "Some other place!";
    }
  }