describe('isFromBellville' , function(){
    it('should return true for registration numbers starting with "CY"' , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });

    it('should return  false for registration number starting with "CA"' , function(){
        assert.equal(isFromBellville('CA 123'), false);
    });

    it('should return true for registration number starting with "CY"' , function(){
        assert.equal(isFromBellville('CY 456'), true);
    });

    it('should return  false for registration number starting with "CK"' , function(){
        assert.equal(isFromBellville('Ck 123'), false);
    });
});