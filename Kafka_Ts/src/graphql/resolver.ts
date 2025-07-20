import { messageProducer } from "../helper.js";

export const resolvers = {

  Mutation: {
    sendMessage: async (_: any, { topic, name, dob }: any) => {
      const data = { name, dob };
      await messageProducer(topic, data);
      return "Message was send to Kafka";
    },
  },
};
