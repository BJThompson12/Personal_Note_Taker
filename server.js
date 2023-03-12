const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes/routes.js");

// set listening on the port
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});