describe('transportFee Function' , function(){
    it('should return R20 for morning, R10 for afternoon and free for nightshift' , function(){
        assert.equal(transportFee('morning'), 'R20');
        assert.equal(transportFee('afternoon'), 'R10');
        assert.equal(transportFee('nightshift'), 'free');
    });
});