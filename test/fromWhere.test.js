describe('fromWhere' , function(){
    it('should return Bellville if the registration number starts with "CY"' , function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville');
    });

    it('should return Paarl if the registration number starts with "CJ"' , function(){
        assert.equal(fromWhere('CJ 567489'), 'Paarl');
    });

    it('should return Cape Town if the registration number starts with "CA"' , function(){
        assert.equal(fromWhere('CA 567489'), 'Cape Town'); 
    });

    it('should return Stellenbosch if the registration number starts with "CL"' , function(){
        assert.equal(fromWhere('CL 567489'), 'Stellenbosch');
    });

    it('should return Wellington if the registration number starts with "CN"' , function(){
        assert.equal(fromWhere('CN 567489'), 'Wellington');
    });

    it('should return Ceres if the registration number starts with "CT"' , function(){
        assert.equal(fromWhere('CT 567489'), 'Ceres');
    });

    it('should return "Some other place!" if the registration number starts with "ZN"' , function(){
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });

});