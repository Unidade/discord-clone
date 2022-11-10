import { config } from 'dotenv'
config()
import express from 'express'
import cors from 'cors'
import router from './routes/authRoutes'
import path from 'path'

const app = express()

app.use(express.json())
app.use(
  cors({
    origin: '*',
  })
)
app.use('/api/auth', router)

console.log(process.env.MODE)
if (process.env.MODE?.toLowerCase() === 'production') {
  app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'build')))
  app.get('*', (req, res) => {
    res.sendFile(
      path.join(__dirname, '..', '..', 'frontend', 'build', 'index.html')
    )
  })
}

export default app
