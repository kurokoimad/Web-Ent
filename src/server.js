const server = require('./app');
require('./config/db');

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`the server is running in  http://localhost:${PORT}`);
});
