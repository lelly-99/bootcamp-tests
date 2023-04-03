describe('countAllPaarl' , function(){
    it('should return 3 for registration numbers with CJ from the string "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"' , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'))
    });

    it('should return  1 for registration number with CJ from the string "CJ 345 123, CK 345, CK 123"' , function(){
        assert.equal(1, countAllPaarl('CJ 345 123, CK 345, CK 123'));
    });

    it('should return 2 for registration numbers with CJ from the string "CJ 345 123, CJ 2345, CL 123-546, CK 345"' , function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345'))
    });

});