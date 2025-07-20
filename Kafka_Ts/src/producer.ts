import { kafka } from "./client.js";
import { Partitioners } from "kafkajs";

const producer =  kafka.producer({
    createPartitioner: Partitioners.LegacyPartitioner
});

export const connectproducer = async ()=> {
    

    await producer.connect()

    console.log("The producer is connected");

}

export { producer };
