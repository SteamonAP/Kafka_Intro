const { kafka } = require("./client.js");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const init = async () => {
  const producer = kafka.producer();
  console.log("Connecting Producer");

  await producer.connect();
  console.log("Producer Connected Successfully!");

  rl.setPrompt("> ");
  rl.prompt();

  rl.on("line", async (line) => {
    const input = line.trim().split(/\s+/);
    if (input.length !== 2) {
      console.log("❌ Format: <riderName> <location>");
      rl.prompt();
      return;
    }
    const [riderName, location] = input;
    try {
      await producer.send({
        topic: "rider-updates",
        messages: [
          {
            partition: location.toLowerCase() === "north" ? 0 : 1,
            key: "location-update",
            value: JSON.stringify({ name: riderName, location }),
          },
        ],
      });
      console.log(`✅ Sent: ${riderName} -> ${location}`);
    } catch (err) {
      console.error("❌ Error sending message:", err);
    }
    rl.prompt();
  });
  process.on("SIGINT", async () => {
    console.log("\nShutting Down...");
    await producer.disconnect();
    rl.close();
  });
};

init();
