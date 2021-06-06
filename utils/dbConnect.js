import mongoose, { Collection } from "mongoose"

const connection = {}

export async function dbConnect(url = process.env.MONGO_URI) {
  if(connection.isConnected) return

  const db = await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })

  connection.isConnected = db.connections[0].ready
  console.log(connection.isConnected)
}

export async function closeDB() {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
}

export async function clearDB() {
  const collections = mongoose.connection.collections

  for (const key in collections) {
    const collection = collections[key]
    await collection.deleteMany()
  }
}
