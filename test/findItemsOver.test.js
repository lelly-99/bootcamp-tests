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
    {name : 'pumpkin', qty : 28},
    {name : 'celery', qty : 35},
    {name : 'kale', qty : 27},
];

var foods = [
    {name : 'cakes', qty : 5},
    {name : 'pies', qty : 18},
    {name : 'muffins', qty : 15},
];

var foodsResults = []

describe('findItemsOver' , function(){
    it('should return fruits with quantity that is above 20 "pears, bananas"' , function(){
        assert.deepEqual(fruitsResults, findItemsOver(fruits, 20));
    });

    it('should return veggies with quantity that is above 20 "spinach, pumpkin, celery, kale"' , function(){
        assert.deepEqual(veggiesResults, findItemsOver(veggies, 20));
    });

    it('should return an empty array since there are no items with quantity above 20' , function(){
        assert.deepEqual(foodsResults, findItemsOver(foods, 20));
    });

});