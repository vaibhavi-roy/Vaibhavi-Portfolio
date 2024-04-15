const mongoose = require('mongoose'); //using Nodejs

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = { User: mongoose.model('users', userSchema) }


