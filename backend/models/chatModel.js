
const mongoose = require("mongoose");


const chatSchema = new mongoose.Schema({
  chatName: { type: String, trim: true },
  isGroupChat: { type: Boolean, required: true, default: false },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  lastestMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
  },
  groupAdmin:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
  },
},{timestamps:true});

// This code appears to define a new Mongoose schema for a chat. The chatSchema variable represents a new Mongoose schema that defines a chat document with three fields:

// chatName: a string field that is trimmed
// isGroupChat: a boolean field that is required and has a default value of false
// users: an array of objectIds that reference User documents
// This schema is used to define a Mongoose model, which can be used to create and query chat documents in a MongoDB database.

module.exports = mongoose.model('Chat',chatSchema);