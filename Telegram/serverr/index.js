const fs = require("fs");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const port = 3002;

const messages = [];
fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) console.log(err);

  messages.push(...JSON.parse(data));
});

app.post("/message-save", (req, res) => {
  const { text, sender, receiver } = req.body;
  console.log(text, sender);

  messages.push({
    id: messages.length + 1,
    text: text,
    sender: parseInt(sender),
    receiver: parseInt(receiver),
    text: req.body.text,
  });

  fs.writeFile("text.txt", JSON.stringify(messages), (err) => {
    if (err) {
      throw err;
    }
    console.log("Файл создан Messages ");
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

/* ----Contacts---- */

const contacts = [];
fs.readFile("textContact.txt", "utf8", (err, data) => {
  if (err) console.log(err);
  contacts.push(...JSON.parse(data));
});

app.get("/contacts-save", (req, res) => {
  contacts.push({
    id: contacts.length + 1,
    name: req.query.name,
  });

  fs.writeFile("textContact.txt", JSON.stringify(contacts), (err) => {
    if (err) {
      throw err;
    }
    console.log("Файл создан Contacts");
  });
  res.send("Contact saved");
});

app.get("/contacts-list", (req, res) => {
  fs.readFile("textContact.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app ${port}`);
});

// const contacts = [];

/* ---Messages---- */
// app.get("/message-save", (req, res) => {
//   messages.push({
//     id: messages.length + 1,
//     text: req.query.text,
//     sender: 1000,
//     receiver: parseInt(req.query.receiver),
//   });
