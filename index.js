const Fastify = require('fastify');
const server = Fastify();

server.register(require('@fastify/http-proxy'), {
  upstream: 'https://1v1.lol/',
  prefix: '/1v1', 
  http2: false,
});

server.register(require('@fastify/http-proxy'), {
  upstream: 'https://https://shellshock.io/',
  prefix: '/shellshock', 
  http2: false,
});

server.register(require('@fastify/http-proxy'), {
  upstream: 'https://skribbl.io/
  prefix: '/skribbl', 
  http2: false,
});

// Serve the facts.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


server.listen({host: "0.0.0.0", port: 3000 });

