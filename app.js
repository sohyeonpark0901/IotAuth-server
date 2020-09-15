const express = require("express");
const app = express();
const myRouter = require("./routes");
var ip = require("ip");
let http = require("http");
let https = require("https");
const fs = require("fs");
const middleware = require("./middleware");
middleware(app);
app.use("/vertify", myRouter);
//테스트를 위해서
app.get("/", (req, res) => {
  res.send("Hello World!");
});

var options = {
  key: fs.readFileSync("./key.pem", "utf8"),
  cert: fs.readFileSync("./server.crt", "utf8"),
};

http.createServer(app).listen(22, function () {
  console.log("http://" + ip.address() + ":" + 22 + "| start time : " + new Date());
});
// https.createServer(options, app).listen(9000, function (req, res) {
//   console.log("https://" + ip.address() + ":" + 9000 + "| start time : " + new Date());
// });

(function () {
  var childProcess = require("child_process");
  var oldSpawn = childProcess.spawn;
  function mySpawn() {
    console.log("spawn called");
    console.log(arguments);
    var result = oldSpawn.apply(this, arguments);
    return result;
  }
  childProcess.spawn = mySpawn;
})();

// app.listen(9000, function () {
//   console.log("server start");
// });
