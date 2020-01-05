import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  names: {
    type: String,
    required: true
  },
  surnames: {
    type: String,
    required: true
  },
  age: Number
})

export default model('User', userSchema);