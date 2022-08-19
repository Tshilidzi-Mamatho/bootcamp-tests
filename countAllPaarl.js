function countAllPaarl(regNumber){
    var regString = regNumber.split(',');
      var paarlRegNo = [];
      for (var i = 0; i<regString.length;i++){
      var allPaarl = regString[i].trim()
      if(allPaarl.startsWith('CJ')){
      paarlRegNo.push(allPaarl)
      }
      }
     console.log(paarlRegNo.length)
      return paarlRegNo.length 
    };