const expect = require('expect');
const {generateMessage} =require('./message');

describe('generateMessage', ()=>{

    it('should generate the corrent message object',()=>{
        var from = 'Tanu';
        var text = "Some Message";
        var message = generateMessage(from,text);

        expect(message.createdAt).toBeA('number'); 
        expect(message).toInclude({from,text});
    });
});