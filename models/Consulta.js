import mongoose from "mongoose";

const consultaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pilares: {
    type: [String],
    default: [],
  },
  mensaje: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Consulta = mongoose.model("Consulta", consultaSchema);

export default Consulta;