describe('transportFee' , function(){
    it('should return R20 if the shift is "morning"' , function(){
        assert.equal(transportFee('morning'), 'R20');  
    });

    it('should return  R10 if the shift is "afternoon"' , function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('should return  Free if the shift is "nightshift"' , function(){
        assert.equal(transportFee('nightshift'), 'free');
    });

});