import { getClientDb } from "./db/get-client-db";

async function main() {
  const client = getClientDb();

  await client.connect();

  const db = client.db("ctMongoDb");
  const newListings = [
    { id: 1, name: "AN Hotel" },
    { id: 2, name: "AN Other Hotel" },
  ];
  //   const result = await db
  //     .collection("listingsAndReviews")
  //     .insertMany(newListings);

  const result = await db.collection("listingsAndReviews").find().toArray();

  console.log(result);
  client.close();
}

main().catch((err) => console.log("Uncaught Error:", err));

// console.log(client);
