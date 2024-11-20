var app = require('./server/config/app');
var debug = require('debug')('infrproject:server');
var http = require('http');

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// Normalize port
function normalizePort(val) {
  var port = parseInt(val, 10);
  return isNaN(port) ? val : (port >= 0 ? port : false);
}

// Error handler
function onError(error) {
  if (error.syscall !== 'listen') throw error;
  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  if (error.code === 'EACCES') {
    console.error(bind + ' requires elevated privileges');
    process.exit(1);
  } else if (error.code === 'EADDRINUSE') {
    console.error(bind + ' is already in use');
    process.exit(1);
  }
  throw error;
}

// Log listening info
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
