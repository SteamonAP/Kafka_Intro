import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolver.js";
import { connectproducer } from "./producer.js";
import { connectConsumer } from "./consumer.js";
import { consumeMessages, messageProducer } from "./helper.js";

const app: Application = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get("/", (req: Request, res: Response) => {
//   return res.send("Url working");
// });

// app.post("/messageSent", async (req: Request, res: Response) => {
//   const body = req.body;
//   await messageProducer("test-ts", body);
//   return res.json({ message: "The Data has been send" });
// });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: []
});
await server.start();

app.use(
  "/graphql",
  expressMiddleware(server, {
    context: async ({ req }) => ({}),
  })
);
connectproducer().catch((err) => {
  console.log("Kafka Connection error", err);
});
connectConsumer().catch((err) => {
  console.log("Consumer Connection error", err);
});

consumeMessages("test-ts").catch((err) => {
  console.log("Kafka Connection error", err);
});

app.listen(PORT, () => {
  console.log(`GraphQL server running at http://localhost:${PORT}/graphql`);
});
