const router = require("express").Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { error } = require("console");
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
    const pyProg = spawn("python", ["gmm.py"]);

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
