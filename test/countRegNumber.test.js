describe('countRegNumber' , function(){
    it('should return 1 for a string with one registration number "RG 45 HN GP"' , function(){
        assert.equal(countRegNumber("RG 45 HN GP"), 1);
    });

    it('should return  2 for a string with two registration numbers "ND 123-456, CA 182736"' , function(){
        assert.equal(countRegNumber("ND 123-456, CA 182736"), 2);
    });

    it('should return 3 for a string with three registration numbers "ND 123-456, CA 182736, RG 45 HN GP"' , function(){
        assert.equal(countRegNumber("ND 123-456, CA 182736, RG 45 HN GP"), 3);
    });
});