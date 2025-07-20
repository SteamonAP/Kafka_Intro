import { kafka } from "./client.js";

const consumer = kafka.consumer({ groupId: "group-A" });
export const connectConsumer = async () => {
  await consumer.connect();
  console.log(" Kafka Consumer connected");
};

export { consumer };
