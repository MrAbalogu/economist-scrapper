import mongoose, { Collection } from "mongoose"

const connection = {}

export async function dbConnect(url = process.env.MONGO_URI) {
  if(connection.isConnected) return

  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
}

export async function dbDisconnect() {
  await mongoose.disconnect()
}
