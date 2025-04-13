import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectionDB from './config/database.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoute.js'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cors())

await connectionDB()

app.use('/api/user',userRouter)
app.use('/api/img', imageRouter)

app.get('/',(req, res) => {
    res.send("All Set")
})

app.listen(PORT, ()=> {
    console.log(`Server Started on PORT ${PORT}`)
})