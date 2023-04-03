describe('Greet' , function(){
    it('should be able to greet Lelly' , function(){
        assert.equal(greet('Lelly'), 'Hello, Lelly');
    });

    it('should be able to greet Lesedi' , function(){
        assert.equal(greet('Lesedi'), 'Hello, Lesedi');
    });

    it('should be able to greet Lethabo' , function(){
        assert.equal(greet('Lethabo'), 'Hello, Lethabo');
    });
});