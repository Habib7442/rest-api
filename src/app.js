const express = require("express");
const cors = require("cors");
require("../src/db/conn");

const router = require("./routers/actress");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(router);
app.listen(port, () => {
  console.log(`Connection successful and port no. is ${port}`);
});
