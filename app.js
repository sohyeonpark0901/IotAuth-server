const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const myRouter = require("./routes");
var ip = require("ip");
let http = require("http");
let https = require("https");
const fs = require("fs");
const middleware = require("./middleware");
app.use("/vertify", myRouter);
middleware(app);
var options = {
  key: fs.readFileSync("./key.pem", "utf8"),
  cert: fs.readFileSync("./server.crt", "utf8"),
};

// http.createServer(app).listen(8080, function () {
//   console.log("http://" + ip.address() + ":" + 8080 + "| start time : " + new Date());
// });
// https.createServer(options, app).listen(port, function (req, res) {
//   console.log("https://" + ip.address() + ":" + port + "| start time : " + new Date());
//   //res.send("Hello World!");
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
app.get("/", (req, res) => {
  res.send({ hello: "world" });
});
app.listen(port, function () {
  console.log("server start");
});
