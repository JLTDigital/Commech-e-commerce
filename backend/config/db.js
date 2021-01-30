import mongoose from 'mongoose'

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    }) 
    console.log(`MongoDB connected: ${conn.connection.host}`.bgCyan)
  } catch (err) {
    console.log(`Error: ${err.message}`.red.bold)
    process.exit(1)
  }
}

export default connectDb