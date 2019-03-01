var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
    it('should generate correct message object',()=>{
        var from = 'vishal';
        var text = 'hi baby';
        var message = generateMessage(from,text);
        expect(message).toMatchObject({from,text});
        expect(typeof message.createdAt).toBe('number');
    });
});
describe('generateLocationMessage',()=>{
    it('should generate correct location object',()=>{
        var from = 'vishal';
        var latitude =1;
        var longitude =2;
        var url = `https://www.google.com/maps/?q=${latitude},${longitude}`;
        var location = generateLocationMessage(from,latitude,longitude);
        expect(location).toMatchObject({from,url});
        expect(typeof location.createdAt).toBe('number');
    });
});