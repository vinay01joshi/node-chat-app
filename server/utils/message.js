var generateMessage = (from ,text)=>{
    return {
        from,
        text,
        createdAt : new Date().getTime()
    };    
};

var generateLocationMessage = (from ,latittude,longitude)=>{
    return {
        from,
        url : `https://www.google.com/maps?q=${latittude},${longitude}`,
        createdAt :new Date().getTime()
    };
};


module.exports = {generateMessage,generateLocationMessage};