const mongoose = require ('mongoose');
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
     phonenumber: Number,
    password:String,
    confirmpassword:String
});

module.exports = mongoose.model("Users", UserSchema);