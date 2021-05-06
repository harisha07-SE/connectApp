const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        retuired: true
    },
    email: {
        type: String,
        retuired: true,
        unique: true
    },
    password: {
        type: String,
        retuired: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);