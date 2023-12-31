const {mongoose, Schema} = require('mongoose');
// const bcrypt = require('bcrypt');
const connectionString = "mongodb://localhost:27017/Userio";
//mongodb+srv://Johanna:306879@usuario.uejhtxs.mongodb.net/
mongoose.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", () => {
    console.log("goose Successfully connected");
})

const UserSchema = new mongoose.Schema(
    {
        username: String,
        password: String,
        passwordConfirm: String,
        email: String,
        emailConfirm: String
    },
    { collection: "Users" }
);

const UserModel = mongoose.model('User', UserSchema);

exports.dal = {
    createUser: async function (username, password, passwordConfirm, email, emailConfirm) {
        try {
            const newUser = new UserModel({
                username,
                password,
                passwordConfirm,
                email,
                emailConfirm
            });

            const savedUser = await newUser.save();
            return savedUser;
        } catch (error) {
            throw error;
        }
    }
};