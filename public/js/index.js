   var socket = io();

   socket.on('connect', function () {
       console.log('connected to the server.');

       socket.emit('createMessage',{
           from : 'vinay',
           text : 'Yep , that works for me!'
       });
   });

   socket.on('disconnect', function () {
       console.log('Disconnected from server.');
   })

   socket.on('newMessage',function(message){
       console.log('New Message',message);
   })