import mongoose, { Types } from "mongoose";

const messageSchema = new mongoose.Schema({

senderId:{type:mongoose.Schema.Types.ObjectId, ref:"user",required: true},
receiverId:{type:mongoose.Schema.Types.ObjectId, ref:"user",required: true},
text: {type:String,},
image: {type:String,},
seen:{type:Boolean, default: false}
}, {timestamps:

true});

const message = mongoose.model ("Message", messageSchema);

export default message;