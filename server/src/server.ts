import app from './app'
import dbConnect from './database/dbconnection'

import * as dotenv from 'dotenv'
import * as http from 'http'
dotenv.config()

const PORT = process.env.PORT || process.env.API_PORT

const server = http.createServer(app)

// Connect to Database then initialize the server
dbConnect()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`)
    })
  })
  .catch((err) => {
    console.log('database connection failed. Server not started')
    console.error(err)
  })
