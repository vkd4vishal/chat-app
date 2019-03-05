var isRealString =(str) =>{
    return typeof str == 'string' && str.trim().length > 0 && !(/^\d+$/.test(str)) ;
};

var isRealMessage = (str)=>{
    return typeof str == 'string' && str.trim().length > 0  ;
};

module.exports = {isRealString,isRealMessage};