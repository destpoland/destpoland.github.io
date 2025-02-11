const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.send("WebSocket server is running!");
});

// Handle WebSocket connections
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Broadcast the number of connected users
  io.emit("user-count", io.engine.clientsCount);

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    io.emit("user-count", io.engine.clientsCount);
  });
});

// Start server on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
