var isRealString =(str) =>{
    return typeof str == 'string' && str.trim().length > 0 && !(/^\d+$/.test(str)) ;
};

module.exports = {isRealString};