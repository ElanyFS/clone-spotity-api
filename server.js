import express from "express";
import dotenv from "dotenv";
import router from "./src/routes/routes.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.use(router);

app.listen(port, () => {
  console.log("Servidor rodando na porta ", port);
});
