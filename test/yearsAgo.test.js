describe('yearsAgo' , function(){
    it('should return 47 for "1976"' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });

    it('should return  24 for "1999"' , function(){
        assert.equal((new Date().getFullYear() - 1999), yearsAgo(1999))
    });

    it('should return  18 for "2005"' , function(){
        assert.equal((new Date().getFullYear() - 2005), yearsAgo(2005))
    });

    it('should return 34 for "1989"' , function(){
        assert.equal((new Date().getFullYear() - 1989), yearsAgo(1989))
    });

});