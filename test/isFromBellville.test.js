describe('isFromBellville' , function(){
    it('should return true for "CY 123"' , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });

    it('should return  false for "CA 123"' , function(){
        assert.equal(isFromBellville('CA 123'), false);
    });

    it('should return true for "CY 456"' , function(){
        assert.equal(isFromBellville('CY 456'), true);
    });

    it('should return  false for "CA 123"' , function(){
        assert.equal(isFromBellville('Ck 123'), false);
    });
});