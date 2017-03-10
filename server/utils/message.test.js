const expect = require('expect');
const {generateMessage,generateLocationMessage} =require('./message');

describe('generateMessage', ()=>{

    it('should generate the corrent message object',()=>{
        var from = 'Tanu';
        var text = "Some Message";
        var message = generateMessage(from,text);

        expect(message.createdAt).toBeA('number'); 
        expect(message).toInclude({from,text});
    });
});

describe('generate location message',()=>{
    it('should carete correct location object',()=>{
        var from = 'Deb';
        var latitude = 15;
        var longitude = 19;
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        var message = generateLocationMessage(from,latitude,longitude);
        
        expect(message.createdAt).toBeA('number'); 
        expect(message).toInclude({from,url});
    });
})