const mongoose = require('mongoose')

const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    password: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
})

const User = mongoose.model('user', userSchema);

module.exports = User;