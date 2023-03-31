describe('regCheck' , function(){
    it('should return true for "RG 45 HN GP"' , function(){
        assert.equal(regCheck('RG 45 HN GP', 'GP'), true);
    });

    it('should return  false for "ND 123-456"' , function(){
        assert.equal(regCheck('ND 123-456', 'GP'), false);
    });

    it('should return true for "FGT 491 L"' , function(){
        assert.equal(regCheck('FGT 491 L', 'L'), true);
    });

    it('should return  true for "LKG 679 EC"' , function(){
        assert.equal(regCheck('LKG 679 EC', 'EC'), true);
    });

    it('should return true for "GHT 456 MP"' , function(){
        assert.equal(regCheck('GHT 456 MP', 'MP'), true);
    });

    it('should return  false for "CY 678-453"' , function(){
        assert.equal(regCheck('CY 678-453', 'MP'), false);
    });

    it('should return  false for "CA 1234-123"' , function(){
        assert.equal(regCheck('CA 1234-123', 'EC'), false);
    });
});