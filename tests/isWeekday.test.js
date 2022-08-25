describe('isWeekday Function' , function(){
    it('should return false Saturday it is not a weekday' , function(){
        assert.equal(isWeekday('Saturday'), false)
    });
    it('should return false Sunday it is not a weekday' , function(){
        assert.equal(isWeekday('Sunday'), false)
    });
    it('should return true Monday it is weekday' , function(){
        assert.equal(isWeekday('Monday'), true)
    });
    it('should return true Tuesday it is weekday' , function(){
        assert.equal(isWeekday('Tuesday'), true)
    });
    it('should return true Wednesday it is weekday' , function(){
        assert.equal(isWeekday('Wednesday'), true)
    });
    it('should return true Thursday it is weekday' , function(){
        assert.equal(isWeekday('Thursday'), true)
    });
    it('should return true Friday it is weekday' , function(){
        assert.equal(isWeekday('Friday'), true)
    });

});
