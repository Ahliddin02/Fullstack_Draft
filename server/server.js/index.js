// const express = require("express");

// const app = express();
// const port = 3001;

// app.get("/", (req, res) => {
//   res.send("Hello Node JS");
// });

// app.get("/users", (req, res) => {
//   console.log(req.query.name);
//   res.send("Hello users");
// });

// app.listen(port, () => {
//   console.log(`Example app ${port}`);
// });

/* -------------------------------*/

// const express = require("express");

// const app = express();
// const port = 3001;

// app.get("/message-save", (req, res) => {
//   res.send("Hello Message-saved");
// });

// app.get("/message-list", (req, res) => {
//   res.send(JSON.stringify([{ id: 1, text: "Hello", sender: 1000, receiver: 1 }]));
// });

// app.listen(port, () => {
//   console.log(`Example app ${port}`);
// });

/* ----------------------------*/
const fs = require("fs");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3002;
const messages = [{ id: 1, text: "Hello", sender: 1000, receiver: 1 }];

app.get("/message-save", (req, res) => {
  messages.push({
    id: messages.length + 1,
    text: req.query.text,
    sender: 1000,
    receiver: req.query.receiver,
    // sender: parseInt(req.query.sender),
    // receiver: parseInt(req.query.receiver),
  });

  fs.writeFile("text.txt", JSON.stringify(messages), (err) => {
    if (err) {
      throw err;
    }
    console.log("Файл создан");
  });
  res.send("Message saved");
});

app.get("/message-list", (req, res) => {
  fs.readFile("text.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(data);
  });
});

const contacts = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Maksim" },
  { id: 3, name: "Oleg" },
  { id: 4, name: "Max" },
  { id: 5, name: "Egor" },
];

app.get("/contact", (req, res) => {
  contacts.push({
    id: contacts.length + 1,
    name: req.query.name,
  });
  res.send("Contact saved");
});

app.get("/contacts-list", (req, res) => {
  res.send(contacts);
});

app.listen(port, () => {
  console.log(`Example app ${port}`);
});
