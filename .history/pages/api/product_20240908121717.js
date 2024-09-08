import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const { db } = await connectToDatabase();
        const products = await db.collection("products").find({}).toArray();
        res.status(200).json({ success: true, data: products });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
