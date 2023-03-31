describe('countRegNumber' , function(){
    it('should return 1 for "RG 45 HN GP"' , function(){
        assert.equal(countRegNumber("RG 45 HN GP"), 1);
    });

    it('should return  false for "ND 123-456, CA 182736"' , function(){
        assert.equal(countRegNumber("ND 123-456, CA 182736"), 2);
    });

    it('should return  false for "ND 123-456, CA 182736, RG 45 HN GP"' , function(){
        assert.equal(countRegNumber("ND 123-456, CA 182736, RG 45 HN GP"), 3);
    });
});