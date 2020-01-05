import mongoose from 'mongoose'

export async function connect() {
  try{
    await mongoose.connect(`mongodb://localhost/${process.env.MONGODB_NAME || mongodb-mern}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })

    console.log('>>> DB is connected')
  }
  catch {
    console.log('Something goes wrong!')
    console.log(e)
  }
}