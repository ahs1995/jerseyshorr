import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  currency: { type: String, required: true },
  size: [String],
  imageUrl: { type: String, required: true },
  season: { type: String, required: true },
  style: { type: String, required: true },
  team: { type: String, required: true },
  stockAvailibility: { type: String, required: true },
  material: { type: String, required: true },
  inventoryCount: { type: Number, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});
