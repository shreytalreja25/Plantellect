const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI || "mongodb+srv://shreytalreja25:shrey9999@cluster0.55lgf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("✅ Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
}

// Call the function but DO NOT disconnect!
run().catch(console.dir);

module.exports = mongoose;
