const { default: mongoose } = require('mongoose');
const mognoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const messageSchema = new mongoose.Schema({
    content : {
        type: String,
        trim : true,
        required : true
    },

    sender : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'userModel',
        required :true
    },
    receiver : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'userModel',
        required :true
    },

    sentAt : {
        type:Date,
    },

    receiveAt: {
        type:Date,
        default : 'UTC'
    },

    seenAt : {
        type:Date,
        default : 'UTC'
    }


})