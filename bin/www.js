const debug = require('debug');
const http = require('http');
const app = require('../src/app');

debug.enable('calorie-tracker-backend:*');

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(err, port) {
  if (err.syscal !== 'listen') {
    throw err;
  }

  const bind = typeof port === 'string' ? `Pipe${port}` : `port${port}`;
  switch (err.code) {
    case 'EACCES':
      console.error(`${bind}requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind}is already in use`);
      process.exit(1);
      break;
    default:
      throw err;
  }
}

/**
 * create HTTP server
 */
const server = http.createServer(app);

/*
 * Event listener for HTTP server "listening" event
 */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe${addr}` : `port${addr.port}`;
  debug(`Listening on : ${bind}`);

  console.log(`🚀 Server is listening on port ${addr.port} 🚀 \n`);
}

const port = normalizePort(process.env.PORT || '3456');
app.set('port', port);

/*
 listen on provided port, on all network interfaces
*/
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
