
describe('isFromBellville Function', function () {
    it('should return true if is from Bellville or return false if not from Bellville', function () {
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
    });

});