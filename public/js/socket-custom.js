var socket = io();

socket.on('connect', function() {
    console.log('Contectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});