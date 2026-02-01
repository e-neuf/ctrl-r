const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require('fs').promises;
const { convertFile } = require("./services/convertFile.js");
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());

const fileConversionRoute = require('./routes/fileConversionRoutes');

//app.use("/fileConversion", fileConversionRoute);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// app.post('/', (req, res) => {
//   res.send("Got a POST request")
// })

app.post("/upload", upload.single("file"), async (req, res) => {
  console.log("File:", req.file);
  console.log("Body:", req.body);

  const filePath = req.file.path;
  const content = await fs.readFile(filePath, "utf-8");
  console.log(content);

  const url = convertFile(req.file);

  await fs.unlink(req.file.path);
  
  res.json({
    message: "File uploaded successfully",
    url: url,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});