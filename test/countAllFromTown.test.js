describe('countAllFromTown' , function(){
    it('should return 3 for registration starting with "CL"' , function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.equal(fromStellies, 3)
        
    });

    it('should return  1 for registration starting with "CF"' , function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        assert.equal(fromKuilsriver, 1) 
    });

    it('should return  2 for registration starting with "CJ"' , function(){
        var fromPaarl = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341, CJ 789','CJ');
        assert.equal(fromPaarl, 2) 
    });

    it('should return  1 for registration starting with "CY"' , function(){
        var fromBellville = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CY');
        assert.equal(fromBellville, 1) 
    });


});