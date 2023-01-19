const net = require("net");
// establishes a connection with the game server
const { connect } = require("./client.js");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }
  };

  process.stdin.on('data', handleUserInput);

  return stdin;
};

setupInput()

console.log("Connecting ...");
connect();