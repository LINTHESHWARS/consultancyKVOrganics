const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const users = mongoose.model("users",UserSchema);
module.exports = users;