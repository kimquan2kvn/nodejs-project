const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({

    user: {
        type
    }

});

module.exports = mongoose.model('comments', CommentSchema);