const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

 
// Port Number
const PORT = process.env.PORT ||4000;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));