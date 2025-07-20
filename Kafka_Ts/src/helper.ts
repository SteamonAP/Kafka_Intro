import { consumer } from "./consumer.js";
import { producer } from "./producer.js";

export const messageProducer = async (topic: string, data: any) => {

    const month = new Date(data.dob).getMonth();
    const partition = month >= 0 && month <= 6 ? 0:1;
    
  await producer.send({
    topic,
    messages: [
      {
        partition,
        key: "Dob-range",
        value: JSON.stringify(data),
      },
    ],
  });
  console.log("The message has been send");
};

export const consumeMessages = async (topic: string) => {
  await consumer.subscribe({
    topic: topic,
    fromBeginning: true,
  });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      if (!message.value) return;
      const parsedMessage = JSON.parse(message.value.toString());
      console.log(
        `[ Topic :${topic} | partition: ${partition} | Message: ${JSON.stringify(parsedMessage)} | offset: ${message.offset}]`
      );
    },
  });
  console.log("Consumer is running!!");
};
