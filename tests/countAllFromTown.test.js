describe('countAllFromTown Function' , function(){
    var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
    var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
    it('should cout how many from a town and list them' , function(){
        assert.equal(fromStellies, 3);   
        assert.equal(fromKuilsriver, 1);  
    });
});