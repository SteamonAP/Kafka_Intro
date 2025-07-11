
const { kafka } = require("./client.js");

async function init() {
  const admin = kafka.admin();
  console.log("Admin Connecting...");
  await admin.connect();
  console.log("Admin Connected!!");

  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic created!!");

  console.log("Disconnecting Admin..");
  await admin.disconnect();
}

init();
