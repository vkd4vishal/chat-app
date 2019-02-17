

var socket = io();
socket.on('connect', function () {
    console.log('Connected to the server');
    socket.emit('createMessage', {
        from: 'sangharsh',
        text: 'i am fine bro'
         });
});
socket.on('disconnect', function () {
    console.log('Disconnected from the server');
});
socket.on('newMessage', function (message) {
    console.log('From',message.from);
    console.log('New message:',message.text);
    console.log(message.createdAt);
});
