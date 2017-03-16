const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', ()=>{

    it('should allow string with non-space character',()=>{
        var name = '  Vinay  '
        var status = isRealString(name);
        expect(status).toBeA('boolean').toBe(true); 
    });

    it('should reject non-string values',()=>{
        var name = 123
        var status = isRealString(name);
        expect(status).toBeA('boolean').toBe(false); 
    });

    it('should reject string with only spaces',()=>{
        var name = '    '
        var status = isRealString(name);
        expect(status).toBeA('boolean').toBe(false); 
    });


});