describe('isWeekday' , function(){
    it('should return true for a day not starting with S "Monday"' , function(){
        assert.equal(isWeekday("Monday"), true);
    });

    it('should return  true for a day not starting with S "Tuesday"' , function(){
        assert.equal(isWeekday("Tuesday"), true);
    });

    it('should return  true for a day not starting with S "Wednesday"' , function(){
        assert.equal(isWeekday("Wednesday"), true);
    });

    it('should return true for a day not starting with S "Thursday"' , function(){
        assert.equal(isWeekday("Thursday"), true);
    });

    it('should return  true for a day not starting with S "Friday"' , function(){
        assert.equal(isWeekday("Friday"), true);
    });

    it('should return  false for a day starting with S "Saturday"' , function(){
        assert.equal(isWeekday("Saturday"), false);
    });

    it('should return  false for a day starting with S "Sunday"' , function(){
        assert.equal(isWeekday("Sunday"), false);
    });
});