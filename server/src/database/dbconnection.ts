import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI
const DB_NAME = process.env.DB_NAME || 'default'

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  console.log('Connecting to MongoDB')
  if (cached.conn) {
    console.log('Returning cached mongoose')
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName: DB_NAME,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }
  try {
    console.log(await cached.promise)
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }
  console.log('Returning new mongoose')
  return cached.conn
}

export default dbConnect
