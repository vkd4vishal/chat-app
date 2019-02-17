

var socket = io();
socket.on('connect', function () {
    console.log('Connected to the server');
});
socket.on('welcome',function(message){
    console.log(message.from);
    console.log(message.text);
});
socket.on('userjoined',function(message){
    console.log(message.text);
});
socket.on('disconnect', function () {
    console.log('Disconnected from the server');
});
socket.on('newMessage', function (message) {
    console.log('From',message.from);
    console.log('New message:',message.text);
    console.log(message.createdAt);
});
