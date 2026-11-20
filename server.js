import mongoose from "mongoose";

import dotenv from "dotenv";

import Consulta from "./models/Consulta.js";

import express from "express";

import cors from "cors";

dotenv.config();
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("¡MongoDB conectado correctamente!");
  })
  .catch((error) => {
    console.error("Error al conectar con MongoDB:", error);
  });

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.post("/api/consultas", async (req, res) => {
  try {
    const { name, email, pillar, message } = req.body;

    const nuevaConsulta = new Consulta({
      nombre: name,
      email: email,
      pilares: pillar,
      mensaje: message,
    });

    await nuevaConsulta.save();

    res.status(201).json({
      mensaje: "¡Consulta guardada correctamente!",
    });

  } catch (error) {
    console.error("Error al guardar la consulta:", error);

    res.status(500).json({
      mensaje: "No se pudo guardar la consulta.",
    });
  }
});

app.get("/", (req, res) => {
  res.send("¡Bienvenido a Superacción Fit!");
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});