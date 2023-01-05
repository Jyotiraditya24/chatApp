const express = require('express');
const app = express();
const chats = require('./data/data');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 8000;
const cors = require('cors');

app.use(cors());

dotenv.config();

// APIS
// 1>
app.get('/',(req,resp)=>{
    resp.send("hello");
});

// 2> getting all chat data
app.get('/api/chat',(req,resp)=>{
    resp.send(chats);
})

//3> get chat a single chat data
app.get('/api/chat/:id',(req,resp)=>{
   const singleChat = chats.find((data)=> data._id === req.params.id);
   resp.send(singleChat);
})


// Server is Created
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})