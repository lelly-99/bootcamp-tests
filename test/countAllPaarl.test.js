describe('countAllPaarl' , function(){
    it('should return 3 for "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"' , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'))
    });

    it('should return  1 for "CJ 345 123, CK 345, CK 123"' , function(){
        assert.equal(1, countAllPaarl('CJ 345 123, CK 345, CK 123'));
    });

    it('should return  0 for "CL 123-546, CK 345"' , function(){
        assert.equal(0, countAllPaarl('CL 123-546, CK 345')) 
    });

    it('should return 2 for "CJ 345 123, CJ 2345, CL 123-546, CK 345"' , function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345'))
    });

});