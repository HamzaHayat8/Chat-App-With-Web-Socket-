import mongoose from "mongoose";

export async function mongooseConnect(UrlMongo) { 
  try {
    if (!UrlMongo) {
      throw new Error("No se ha proporcionado una URL de conexión a MongoDB.");
    }
    mongoose.set("strictQuery", true);
    await mongoose.connect(UrlMongo);
  } catch (error) {
    console.error(error);
  }
}
