describe('yearsAgo' , function(){
    it('should return 47 for the years that have passed since the year "1976"' , function(){
        assert.equal(yearsAgo(1976), 47)
    });

    it('should return  24 for the years that have passed since the year "1999"' , function(){
        assert.equal(yearsAgo(1999), 24)
    });

    it('should return  18 for the years that have passed since the year "2005"' , function(){
        assert.equal(yearsAgo(2005), 18)
    });

    it('should return 34 for the years that have passed since the year "1989"' , function(){
        assert.equal(yearsAgo(1989), 34)
    });

});