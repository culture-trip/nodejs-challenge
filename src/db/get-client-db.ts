import { MongoClient } from "mongodb";

const URL = "mongodb://ctUser:ctPass@localhost:27017";

// @<your-cluster-url>

export function getClientDb() {
  return new MongoClient(URL);
}
