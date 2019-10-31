const http = require("http");
const routes = require("./routes");

console.log(routes.smth);

const server = http.createServer(routes.handler);

server.listen(7000);
