const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
        // Tham chieu toi bang users co quyen truy cập
        // vào các thuộc tính trong bảng user
    },

    body:{
        type: String,
        required: true
    },

    date: {
        t
    }
});

module.exports = mongoose.model('comments', CommentSchema);