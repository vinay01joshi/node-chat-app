const moment = require('moment');

// Jan 1st 1970 00:00:00 am

// var date = new Date();

// var months = ['Jan','Feb','']

// console.log(date.getMonth());

// var date = moment();
// date.add(1,'years');
// console.log(date.format('MMM Do, YYYY'));

var sometimeStamp = moment().valueOf();
console.log(sometimeStamp);

var createdAt = 1234 ;
var date = moment(createdAt);
console.log(date.format('h:mm a'));