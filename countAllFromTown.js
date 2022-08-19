function countAllFromTown(regNumber,startReg){
    var regNo = regNumber.split(',');
      var fromTown = [];
      for (i=0;i<regNo.length;i++){
      var regNo2 = regNo[i].trim();
        if(regNo2.startsWith(startReg)){
        fromTown.push(regNo2);
        }
      }
    console.log(fromTown.length)
      console.log(fromTown)
      return fromTown.length
    }