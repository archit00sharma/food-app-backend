const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true,
    },

    password: {
        type: String,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now
    },


}, {
    timestamps: {
        createdAt: 'created_at', // Use `created_at` to store the created date
        updatedAt: 'updated_at' // and `updated_at` to store the last updated date
    }
});


const user = mongoose.model('User', userSchema);

module.exports = { user }
