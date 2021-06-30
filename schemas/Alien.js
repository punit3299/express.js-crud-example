const mongoose = require('mongoose')

const alien = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Alien',alien,'AlienCollection');