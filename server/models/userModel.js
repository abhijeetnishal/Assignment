const mongoose = require('mongoose');

//create a schema of user
const userSchema = new mongoose.Schema({
       //specify the schema recored
       id:{
        type: Number,
        require: true,
        unique: true
       },
       first_name:{
        type: String,
        require: true,
        unique: false
       },
       last_name:{
        type: String,
        require: true,
        unique: false
       },
       email:{
        type: String,
        require: true,
        unique: true
       },
       gender:{
        type: String,
        require: true,
        unique: false
       },
       income:{
        type: String,
        require: true,
        unique: false
       },
       city:{
        type: String,
        require: true,
        unique: false
       },
       car:{
        type: String,
        require: true,
        unique: false
       },
       quote:{
        type: String,
        require: true,
        unique: false
       },
       phone_price:{
        type: String,
        require: true,
        unique: false
       }
});

//This will create a user table or collection if there is no table with that name already.
module.exports = mongoose.model.user || mongoose.model("user", userSchema);