# Kafka Intro 🧵

A beginner-friendly Kafka project using **Node.js**, **KafkaJS**, and **Docker Compose**.  
Covers producer, consumer, and topic management — all locally, with no external cloud dependencies.

---

## 🛠️ Tech Stack

- [Apache Kafka](https://kafka.apache.org/) (v7.4.3 via Confluent)
- [Zookeeper](https://zookeeper.apache.org/)
- [KafkaJS](https://kafka.js.org/) — Kafka client for Node.js
- Docker & Docker Compose

---

## 📁 Project Structure

Kafka_Intro/
├── docker-compose.yml # Kafka + Zookeeper setup
├── client.js # KafkaJS client config
├── admin.js # Creates topic
├── producer.js # Sends one message
├── producer-interactive.js # CLI producer for manual input
├── consumer.js # Simple consumer
└── consumer-grouped.js # Dynamic consumer group support

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/SteamonAP/Kafka_Intro.git
cd Kafka_Intro
2. Start Kafka & Zookeeper
bash
Copy
Edit
docker-compose up
Wait until Kafka logs:

bash
Copy
Edit
KafkaServer id=1 started
3. Install Node.js dependencies
bash
Copy
Edit
npm install kafkajs
🧪 Usage
▶️ Create Kafka Topic
bash
Copy
Edit
node admin.js
Creates topic: rider-updates with 2 partitions.

🚴‍♂️ Produce Messages
One-time Message
bash
Copy
Edit
node producer.js
Interactive Mode (CLI)
bash
Copy
Edit
node producer-interactive.js
Type:

php-template
Copy
Edit
<riderName> <location>
Example:

nginx
Copy
Edit
amogh north
john south
Partition routing:

north → partition 0

anything else → partition 1

👂 Consume Messages
Basic Consumer
bash
Copy
Edit
node consumer.js
Dynamic Group Consumer
bash
Copy
Edit
node consumer-grouped.js group-A
node consumer-grouped.js group-B
Consumers in same group split work

Different groups get all messages

🧼 Clean Up
To stop Kafka & Zookeeper:

bash
Copy
Edit
docker-compose down
To remove all data volumes:

bash
Copy
Edit
docker-compose down -v
🧠 Concepts Covered
Kafka topics and partitions

Producers and consumers

Kafka consumer groups

Partition-based routing

KafkaJS integration

📚 Learning Resources
KafkaJS Docs

Apache Kafka Docs

Confluent Kafka Docker Hub

🔖 License
MIT License

yaml
Copy
Edit

---

Let me know if you'd like:
- Code examples embedded in README
- Screenshots of CLI input/output
- A branch with Kafka UI integration

Happy Kafka'ing! 🧃




