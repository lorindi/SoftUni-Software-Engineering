const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("user-added", () => {
  console.log("New user is added");
});

eventEmitter.on("user-added", (username, age) => {
  console.log(`New user is added 2 ${username} (${age}) years old`);
});

eventEmitter.on("user-remove", () => {
  console.log("User is remove");
});

eventEmitter.emit("user-added", "Lora");
eventEmitter.emit("user-remove");