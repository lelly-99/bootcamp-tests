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

var veggies = [
    {name : 'cabagge', qty : 15},
    {name : 'spinach', qty : 35},
    {name : 'pumpkin', qty : 28},
    {name : 'broccoli', qty : 3},
    {name : 'peas', qty : 19},
    {name : 'celery', qty : 35},
    {name : 'kale', qty : 27},
    {name : 'lettuce', qty : 3},
];

var veggiesResults = [
    {name : 'spinach', qty : 35},
    {name : 'celery', qty : 35},
];

var foods = [
    {name : 'cakes', qty : 5},
    {name : 'pies', qty : 18},
    {name : 'muffins', qty : 15},
];

var foodsResults = []

describe('findItemsOver' , function(){
    it('should return fruits with quantity that is above threshold of 15' , function(){
        assert.deepEqual(fruitsResults, findItemsOver(fruits, 15));
    });

    it('should return veggies with quantity that is above threshold of 30' , function(){
        assert.deepEqual(veggiesResults, findItemsOver(veggies, 30));
    });

    it('should return an empty array since there are no items with quantity above the threshold of 21' , function(){
        assert.deepEqual(foodsResults, findItemsOver(foods, 21));
    });

});