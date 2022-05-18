const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
        // Tham chieu toi bang users co quyen truy cập
        // vào các thuộc tính trong bảng user
    },

    body:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('comments', CommentSchema);