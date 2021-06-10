import mongoose, { Collection } from "mongoose"

const connection = {}

export async function dbConnect(url = process.env.MONGO_URI) {
  if(connection.isConnected) return

  const db = await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })

  console.log("connected db: ", db)
}

export async function dbDisconnect() {
  await mongoose.disconnect()
}
