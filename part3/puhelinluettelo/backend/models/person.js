const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

console.log('connecting toooo........', url)
mongoose.connect(url, { family: 4 })
  .then(() => {
    console.log('connected to mongo')
  })
  .catch(error => {
    console.log('error connecting to mongo:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true
  },
  number: {
    type: String,
    minlength: 8,
    required: true,
    validate: {
      validator: val => {
        return /^\d{2,3}-\d{4,}$/.test(val)
      },
      message: props => `${props.value} is not a valid phone number!!!!!!!!!!!!!!`
    }
  }
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)