const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const websiteName = "CreeperNation Website"
const port = 7000;

// CORS Headers
const corsOptions = {
  origin: ["https://www.creepernation.net", "https://creepernation.net", "https://docs.creepernation.net"],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "public")));

app.get('/*', (req, res) => {
  const filePath = path.join(__dirname, 'public', req.url + ".html");
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`${websiteName} started on port ${port}!`);
});
