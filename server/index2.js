const express = require("express");

const app = express();
const port = 3003;

app.get("/message-save", (req, res) => {
  res.send("Hello Message-saved");
});

app.get("/message-list", (req, res) => {
  res.send(JSON.stringify([{ id: 1, text: "Hello", sender: 1000, receiver: 1 }]));
});

app.listen(port, () => {
  //   console.log(`Example app ${port}`);
});
