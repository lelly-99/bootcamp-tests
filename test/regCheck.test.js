describe('regCheck' , function(){
    it('should return true for registration number ending with "GP"' , function(){
        assert.equal(regCheck('RG 45 HN GP', 'GP'), true);
    });

    it('should return  false for the registration number "ND 123-456", not ending with either GP, L, MP or EC' , function(){
        assert.equal(regCheck('ND 123-456', 'GP'), false);
    });

    it('should return true for registration number ending with "L"' , function(){
        assert.equal(regCheck('FGT 491 L', 'L'), true);
    });

    it('should return  true for registration number ending with "EC"' , function(){
        assert.equal(regCheck('LKG 679 EC', 'EC'), true);
    });

    it('should return true for registration number ending with "MP"' , function(){
        assert.equal(regCheck('GHT 456 MP', 'MP'), true);
    });

    it('should return  false for the registration number "CY 678-453", not ending with either GP,EC, L, or MP' , function(){
        assert.equal(regCheck('CY 678-453', 'MP'), false);
    });

    it('should return  false for the registration number "CA 1234-123", not ending with either GP,EC, L, or MP' , function(){
        assert.equal(regCheck('CA 1234-123', 'EC'), false);
    });
});