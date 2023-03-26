const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const websiteName = "CreeperNation"
const port = 7000;

// CORS Headers
const corsOptions = {
  origin: ["https://www.creepernation.net", "https://creepernation.net", "https://docs.creepernation.net"],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "public")));

app.get('/*', (req, res, next) => {
  const filePath = path.join(__dirname, 'public', req.url.substring(1) + ".html");
  res.sendFile(filePath, (error) => {
    if (error) {
        // console.error(error);
        return next();
    }
  });
});

// 404
app.use((req, res, next) => {
  if (res.status(404)) {
    const missingFilePath = path.join(__dirname, 'public', '404.html');
    res.sendFile(missingFilePath);
  }
});

app.listen(port, () => {
  console.log(`${websiteName} started on port ${port}!`);
});
