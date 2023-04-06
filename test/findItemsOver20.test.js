
var fruits = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var fruitsResults = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

var accessories = [
    {name : 'belts', qty : 45},
    {name : 'necklaces', qty : 38},
    {name : 'shoes', qty : 35},
    {name : 'watches', qty : 27},
    {name : 'purses', qty : 45},
    {name : 'gloves', qty : 38},
    {name : 'hats', qty : 35},
    {name : 'earrings', qty : 27},
];

var accessoriesResults = [
    {name : 'belts', qty : 45},
    {name : 'necklaces', qty : 38},
    {name : 'shoes', qty : 35},
    {name : 'watches', qty : 27},
    {name : 'purses', qty : 45},
    {name : 'gloves', qty : 38},
    {name : 'hats', qty : 35},
    {name : 'earrings', qty : 27},
];

var foods = [
    {name : 'cakes', qty : 5},
    {name : 'pies', qty : 18},
    {name : 'muffins', qty : 15},
];

var foodsResults = []

describe('findItemsOver20' , function(){
    it('should return fruits with quantity that is above 20 "pears, bananas"' , function(){
        assert.deepEqual(fruitsResults, findItemsOver20(fruits));
    });

    it('should return accessories with quantity that is above 20 "belts, necklaces, shoes, watches, purses, gloves, hats, earrings"' , function(){
        assert.deepEqual(accessoriesResults, findItemsOver20(accessories));
    });

    it('should return an empty array since there are no food items with quantity above 20' , function(){
        assert.deepEqual(foodsResults, findItemsOver20(foods));
    });

});