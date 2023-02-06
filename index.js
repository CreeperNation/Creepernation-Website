const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const port = 7000;

// CORS Headers
const corsOptions = {
  origin: ["https://www.creepernation.net", "https://creepernation.net", "https://docs.creepernation.net"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "public")));

app.get("/:page", (req, res) => {
  console.log(`${req.method} request from IP: ${req.ip}`);
  const page = req.params.page;
  res.sendFile(path.join(__dirname, "public", `${page}.html`));
});

app.listen(port, () => {
  console.log(`Official Lunar Eclipse API started on port ${port}!`);
});
