const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
function middlewareLoad(app) {
  app.use(express.static(path.join("public")));
  app.use("/vertify/uploadfile", express.static(path.join("uploads")));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true })); //json 객체안에 또 객체가 있는경우 파싱해주기 위해
  app.use(bodyParser.urlencoded({ extended: true })); //application/x=www-form-urlencoded 파싱
  app.use(bodyParser.json()); //application/json 파싱
  app.use(morgan("dev"));
}

module.exports = middlewareLoad;
