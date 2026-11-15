import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
mongoose.set('strictQuery', true)
import app from './app'

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then(data => {
    console.log('MongoDb successfully connected')
    const PORT = process.env.PORT || 3000

    app.listen(PORT, () => {
      console.log(`Port is running on ${PORT}`)
      console.log(
        `Admin project is running on a http://localhost:${PORT}/admin`,
      )
    })
  })
  .catch(err => console.log('Something went wrong', err))
