const { mongoose, Schema } = require('mongoose');
const bcrypt = require('bcrypt');
const { urlencoded } = require('express');

const connectionString = "mongodb://127.0.0.1:27017/User";

mongoose.connect(connectionString, {useUnifiedTopology: true, useNewParser: true});
const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Mongoose Successfully connected");
});

const Usuario = new Schema(
    {
        username: String,
        password: String,
        confirmPassword:String ,
        email: String,
        confirmEmail: String

    },
    {collection: "info"}
);


const infoCollection = mongoose.model("info", Usuario);


exports.dal = {
    getallData: async function() {
        const data = await infoCollection.find({}).lean();
        
        return data
    },

    get: async function() {
        let result = await infoCollection.find({}).lean();

        console.log(result);
    },

    createUsuario: async function (username, password, confirmPassword, email, confirmEmail) {
        const newUsuario = new infoCollection({
            username: username,
            password: password,
            confirmPassword: confirmPassword,
            email: email,
            confirmEmail: confirmEmail
        });

        const userSaved = await newUsuario.save();
        console.log("New user was added: ", userSaved);
        return userSaved;
    },


    getUsuario: async function (username) {
        try {
            const usuario = await infoCollection.findOne({username: username}).exec();
            return usuario
        }catch (error){
            console.log("error retrieving usuario", error);
            return null;
        }
    },



    
};


