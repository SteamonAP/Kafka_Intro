const { Kafka } = require("kafkajs");


exports.kafka = new Kafka({
  clientId: "kafka-node",
  brokers: ["localhost:9092"],
});
