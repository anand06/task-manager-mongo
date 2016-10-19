var restify = require('restify');

var server = restify.createServer();

var controller = require('./controller');

server.use(restify.queryParser());
server.use(restify.bodyParser());

server.post('/add', controller.create);
server.get('/get', controller.read);
server.put('/update', controller.update);
server.del('/delete', controller.delete);

server.listen(2000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
