import mongoose, { Collection } from "mongoose"

const connection = {}

export async function dbConnect(url = process.env.MONGO_URI) {
  if(connection.isConnected) return

  const db = await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })

  return db
}

export async function closeDB() {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  console.log("closing db...", mongoose.connection.readyState)
}

export async function clearConnection() {
  const collections = mongoose.connection.collections

  console.log("clearing db...")

  for (const key in collections) {
    const collection = collections[key]
    await collection.deleteMany()
  }
}
