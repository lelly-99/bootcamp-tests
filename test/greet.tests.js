describe('Greet' , function(){
    it('should return "Hello, Lelly"' , function(){
        assert.equal(greet('Lelly'), 'Hello, Lelly');
    });

    it('should return "Hello, Lesedi"' , function(){
        assert.equal(greet('Lesedi'), 'Hello, Lesedi');
    });

    it('should return "Hello, Lethabo"' , function(){
        assert.equal(greet('Lethabo'), 'Hello, Lethabo');
    });
});