import express from "express";
import { db } from "../config/conect.js";

const router = express.Router();

router.get("/artists", async (req, res) => {
  const response = await db.collection("artists").find({}).toArray();
  res.send(response);
});

router.get("/songs", async (req, res) => {
  const response = await db.collection("songs").find({}).toArray();
  res.send(response);
});

export default router;
