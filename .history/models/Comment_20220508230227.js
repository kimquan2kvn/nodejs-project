const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }

});

module.exports = mongoose.model('comments', CommentSchema);