describe('greet Function' , function(){
    it('should greet return Hello, Tshilidzi' , function(){
        assert.equal(greet('Tshilidzi'), 'Hello, Tshilidzi');
    });
    it('should greet return Hello, Mamatho' , function(){
        assert.equal(greet('Mamatho'), 'Hello, Mamatho');
    });

});
