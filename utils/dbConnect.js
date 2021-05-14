import mongoose from 'mongoose'

const connection = {}

async function dbConnect() {
  if(connection.isConnected) return

  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })

  connection.isConnected = db.connections[0].ready
  console.log(connection.isConnected)
}

export default dbConnect
