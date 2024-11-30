const { Server } = require("socket.io");

let io;

const configureSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*", // Update this to match your frontend's origin for security
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Add your custom event listeners here
    socket.on("disconnect", () => {
      console.log("A user disconnected:", socket.id);
    });
  });

  return io;
};

// Export both the configuration function and the io instance
module.exports = { configureSocket, io: () => io };