import { Schema, model } from 'mongoose'

const Account = new Schema({
  name: { type: String, required: true, minlength: 1, maxlength: 20 },
  password: { type: String, required: true, minlength: 6 }
})

export default model('account', Account)