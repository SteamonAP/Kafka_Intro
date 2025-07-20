import { kafka } from "./client.js";

const producer =  kafka.producer();

export const connectproducer = async ()=> {
    

    await producer.connect()

    console.log("The producer is connected");

}

export { producer };
