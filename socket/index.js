const io = require("socket.io")(8900, {
  cors: {
    // react application url
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

io.on("connection", (socket) => {
    // when connect
  console.log("a user connected.");
  // io.to(si).emit("welcome","this is socket server!")

  // after every connection take userId & socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

//   send and get message

   // when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected.");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
