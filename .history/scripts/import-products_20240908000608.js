import fs from "fs";
import path from "path";
import { MongoClient } from "mongodb";

// Load environment variables
import dotenv from "dotenv";
dotenv.config({ path: path.join(process.cwd(), ".env.local") });

const MONGODB_URL = process.env.DB_URL;

if (!MONGODB_URL) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

async function importData() {
  let client;

  try {
    client = await MongoClient.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    const db = client.db();
    const collection = db.collection("products");

    const productsData = JSON.parse(
      fs.readFileSync(
        path.join(process.cwd(), "data", "Products.json"),
        "utf-8",
      ),
    );

    // Process each product
    const processedProducts = productsData.map((product) => {
      // Check if the image file exists
      const imagePath = path.join(
        process.cwd(),
        "public",
        "images",
        product.imageUrl,
      );
      if (fs.existsSync(imagePath)) {
        // If the image exists, we'll store the path relative to the public folder
        product.imageUrl = `/images/${product.imageUrl}`;
      } else {
        console.warn(
          `Warning: Image not found for ${product.name}. Using a placeholder.`,
        );
        product.imageUrl = "/images/placeholder.jpg"; // Adjust this to your actual placeholder image path
      }

      // Convert availableSizes from string to array
      product.availableSizes = product.availableSizes.split(",");

      return product;
    });

    // Optional: Clear existing data
    await collection.deleteMany({});

    // Insert the processed data
    const result = await collection.insertMany(processedProducts);

    console.log(`${result.insertedCount} products imported successfully!`);
  } catch (error) {
    console.error("Error importing data:", error);
  } finally {
    if (client) {
      await client.close();
    }
    process.exit();
  }
}

// Run the import
importData();
