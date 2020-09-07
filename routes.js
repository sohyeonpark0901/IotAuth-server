const router = require("express").Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { error } = require("console");
var pathOfIndex = path.relative("C:/Users/PK/Desktop/졸업작품/server/", "C:/Users/PK/Desktop/졸업작품/server/get_avg.py");
// const { spawn } = require("child_process");
// const pyProg = spawn("python", ["C:/Users/PK/AppData/Local/Programs/Python/Python37-32/get_avg.py"]);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.post("/uploadfile", upload.array("userfile", 2), function (req, res) {
  res.json({ ans: "success" });
});

router.get("/machine", function (req, res) {
  try {
    const { spawn } = require("child_process");
    const pyProg = spawn("python", [pathOfIndex]);

    pyProg.stdout.on("data", function (data) {
      console.log(data);
      console.log(data.toString());
      res.write(data);
      res.end();
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
