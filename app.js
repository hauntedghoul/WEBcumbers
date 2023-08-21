console.log("let him be slutty");

const express = require('express');
const fs = require('fs');
const bcrypt = require('bcrypt');
const app = express();

let port = 2000;

app.set('view engine', 'pug');
app.set('views', './views');
const { dal } = require('./dal/dal');

app.use(express.static('public'));

app.use(express.json());
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

// Handle the user registration form submission
app.post('/register', async (req, res) => {
    const { username, password, passwordConfirm, email, emailConfirm } = req.body;

    try {
        // Additional validation and checks can be added here before calling createUser

        const savedUser = await dal.createUser(username, password, passwordConfirm, email, emailConfirm);
        
        // Handle success scenario, e.g., redirect to a success page
        res.redirect('/profile'); // Assuming you want to redirect to the profile page
    } catch (error) {
        // Handle error scenario, e.g., redirect to an error page
        res.redirect('/register'); // Redirect back to registration page on error
    }
});

app.get("/profile", (req, res) => {
    res.render("profile");
});

app.listen(port, () => {
    console.log("express listening on port", port);
});