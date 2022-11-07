const mongoose = require('mongoose');

import mongoose from 'mongoose';
const { Schema } = mongoose;

const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "This is description"
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: date.now
    },
});

module.exports = mongoose.model('notes', NotesSchema);