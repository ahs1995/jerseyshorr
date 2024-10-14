import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  currency: { type: String, required: true },
  size: [String], //Later change it to single string value
  imageUrl: { type: String, required: true },
  season: { type: String, required: true },
  style: { type: String, required: true },
  team: { type: String, required: true },
  stockAvailibilty: { type: String, required: true }, //spelling error in static json data
  material: { type: String, required: true },
  inventoryCount: { type: Number, required: true },
  description: { type: String, required: true },
  createdAt: { type: String, required: true },
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
