const io = require("socket.io")(8900,{
    cors: {
        // react application url
        origin:"http://localhost:3000", 
    },
});

io.on("connection", (socket) => {
    console.log("a user connected.")
    // io.to(si).emit("welcome","this is socket server!")
})