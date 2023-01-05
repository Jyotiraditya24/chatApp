 const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "John",
        email: "john@example.com",
      },
      {
        name: "Jean",
        email: "jean@example.com",
      },
    ],
    _id: "58686382658368ige2_",
    chatName: "John Chat",
  },

  {
    isGroupChat: false,
    users: [
      {
        name: "Aston",
        email: "Aston@example.com",
      },
      {
        name: "Bmw",
        email: "bmw@example.com",
      },
    ],
    _id: "12444382658368ige2_",
    chatName: "Cars",
  },

  {
    isGroupChat: true,
    users: [
      {
        name: "John",
        email: "john@example.com",
      },
      {
        name: "Jean",
        email: "jean@example.com",
      },
      ,
      {
        name: 'Guest User',
        email: "guest@example.com",
      }
    ],
    _id: "12686382658368ige2_",
    chatName: "Group Chat",
  },
];


module.exports = chats