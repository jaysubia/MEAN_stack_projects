module.exports = function Route(app, server){
	// this gets the socket.io module
	var io = require('socket.io').listen(server) 
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
	})
	io.sockets.on('connection', function (socket) {

		console.log('made socket connection', socket.id);

		socket.on('chat', function(data){

			io.sockets.emit('chat', data);

		});

		socket.on('typing', function(data){
			socket.broadcast.emit('typing', data);
		});

		
	
});
};