
var firstData = [
    {department : 'outdoor', sales : 8000},
    {department : 'carpentry', sales : 5500},
    {department : 'hardware', sales : 7500},
    {department : 'steelwork', sales : 7500},
];

var secondData = [
    {department : 'outdoor', sales : 1500},
    {department : 'carpentry', sales : 8500},
    {department : 'hardware', sales : 6500},
    {department : 'steelwork', sales : 7500},
];

var thirdData = [
    {department : 'outdoor', sales : 1500},
    {department : 'carpentry', sales : 5500},
    {department : 'hardware', sales : 5000},
    {department : 'steelwork', sales : 7500},
];

var forthData = [
    {department : 'hardware', sales : 4500},
    {department : 'outdoor', sales : 1500},
    {department : 'carpentry', sales : 5500},
    {department : 'hardware', sales : 9000},
    {department : 'steelwork', sales : 7500},
];

describe('mostProfitableDepartment' , function(){
    it('should return "outdoor" as the most profitable department' , function(){
        assert.equal('outdoor', mostProfitableDepartment(firstData));
    });

    it('should return "carpentry" as the most profitable department' , function(){
        assert.equal('carpentry', mostProfitableDepartment(secondData));
    });

    it('should return "steelwork" as the most profitable department' , function(){
        assert.equal('steelwork', mostProfitableDepartment(thirdData));
    });

    it('should return "hardware" as the most profitable department' , function(){
        assert.equal('hardware', mostProfitableDepartment(forthData));
    });

});