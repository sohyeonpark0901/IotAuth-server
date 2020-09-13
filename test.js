var zerorpc = require("zerorpc");

var server = new zerorpc.Server({
  hello: function (name, reply) {
    reply(null, "Hello, " + name, false);
  },
});

server.bind("https://172.31.0.230:443");
