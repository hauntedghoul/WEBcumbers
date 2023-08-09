console.log("JS Loaded!!!");

const express = require('express');
const session = require('express-session');

const pug = require('pug');
const bcrypt = require('bcrypt');

const app = express();

const port = 1000;

app.get("/login", (req, res) => {

    res.render("login");
})

//app.post("/login")

app.get("/login", (res, res) => {

})

app.get("/signup", (req, res) => {
    res.render("register");
})


app.get("/profile", (req,res) => {
    const usuario = req.session.usuario;
    res.render("profile", {usuario})
})


app.listen(port, () => {
    console.log("Charlie is listening to your " + port);
});