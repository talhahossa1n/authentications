require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  bcrypt.hash(req.body.password, saltRounds).then((err, hash) => {
    const newUser = new User({
      email: req.body.username,
      password: hash,
    });
    newUser
      .save()
      .then(() => {
        res.render("secrets");
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ email: username })
    .then((foundUser) => {
      if (foundUser) {
        bcrypt.compare(password, foundUser.password).then((result) => {
          if (result) {
            res.render("secrets");
          } else {
            res.send("Wrong password");
          }
        });
      } else {
        res.send("User not found");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
