describe('totalPhoneBill' , function(){
    it('should return R7.45 for the string "call, sms, call, sms, sms"' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

    it('should return  R6.80 for the string "call, sms, call, sms"' , function(){
        assert.equal('R6.80', totalPhoneBill('call, sms, call, sms'));
    });

    it('should return  R4.70 for the string "sms, call, sms, sms"' , function(){
        assert.equal('R4.70', totalPhoneBill('sms, call, sms, sms'));
    });

    it('should return R3.40 for the string "call, sms"' , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });

    it('should return R5.50 for the string "call, call"' , function(){
        assert.equal('R5.50', totalPhoneBill('call, call'));
    });

    it('should return R1.30 for the string "sms, sms"' , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });

});