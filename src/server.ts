import express from "express";

import "./database";

const app = express();

app.get("/", (req, res) => res.json({ message: "eae patrão" }));

app.post("/", (req, res) => res.json({ message: "user salvo!" }));

app.listen(3333, () => console.log("rodando na porta http://localhost:3333"));
