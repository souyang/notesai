import { Pinecone } from "@pinecone-database/pinecone";

const apiKey = process.env.PINECONE_API_KEY;
const index = process.env.PINECONE_INDEX || "ai-notes-app";
const environment = process.env.PINECONE_ENVIRONMENT || "us-west4-gcp";
if (!apiKey) {
  throw Error("PINECONE_API_KEY is not set");
}

const pinecone = new Pinecone({
  environment,
  apiKey,
});

export const notesIndex = pinecone.Index(index);
