const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: {

    },

    title:{
        type: String,
        required: true
    },

    status: {
        type: String,
        default: 'public'
    }

})