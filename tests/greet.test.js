describe('greet Function' , function(){
    it('should return Hello and name' , function(){
        assert.equal(greet('Tshilidzi'), 'Hello, Tshilidzi');
        assert.equal(greet('Mamatho'), 'Hello, Mamatho');
    });

});