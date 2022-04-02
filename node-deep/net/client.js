const net = require("net");

const HOST = "127.0.0.1";
const PORT = 3000;

const client = new net.Socket();

client.connect(PORT, HOST, () => {
  client.write("I'm Client");
});

client.on("data", function (data) {
  console.log("data", data.toString());
  client.destroy();
});

client.on("close", () => {
  console.log("Connection closed");
});
