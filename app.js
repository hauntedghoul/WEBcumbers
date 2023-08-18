console.log("JS Loaded!!!");

const express = require('express');
const bcrypt = require('bcrypt');
const { dal } = require('./dal/dal');

const app = express();

let port = 2000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", async (req, res) =>{
    const {username, password, confirmPassword, email, confrimEmail} = req.body;
    
    await dal.createUser(username, password, confirmPassword, email, confrimEmail);
    res.redirect("/login");
})

app.get("/profile", (req, res) => {
    res.render("profile");
});

app.listen(port, () => {
    console.log("express listening on port", port);
});
