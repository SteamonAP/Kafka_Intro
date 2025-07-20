import { Kafka, logLevel } from "kafkajs";
import fs from "fs";
import path from "path";
import "dotenv/config";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const kafka = new Kafka({
  clientId: "kafka-practice",
  brokers: [process.env.KAFKA_BROKER!],

  ssl: {
    rejectUnauthorized: true,
    ca: [fs.readFileSync(path.join(__dirname, "../certs/ca.pem"), "utf-8")],
    key: fs.readFileSync(path.join(__dirname, "../certs/service.key"), "utf-8"),
    cert: fs.readFileSync(
      path.join(__dirname, "../certs/service.cert"),
      "utf-8"
    ),
  },
});
