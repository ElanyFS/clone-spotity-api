import { MongoClient } from "mongodb";
import dotenv from 'dotenv'

dotenv.config();

const uri = process.env.DATABASE_URL;

const client = new MongoClient(uri);

export const db = client.db("spotifydb");