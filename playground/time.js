var moment = require('moment');

// var date = moment();
// console.log(date.format('h:mm a'));
var timeStamp = moment().valueOf();
var date = moment(timeStamp);
console.log(date.format('h:mm a'));