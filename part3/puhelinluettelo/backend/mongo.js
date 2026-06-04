const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@fso.h9zvaru.mongodb.net/phoneApp?appName=fso`

mongoose.set('strictQuery', false)
mongoose.connect(url, { family: 4 })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

const name = process.argv[3]
if (name) {
  const number = process.argv[4]
  if (number) {
    const person = new Person({
      name: name,
      number: number
    })
    person.save().then(res => {
      console.log('person saaaaaaveeeed......')
      mongoose.connection.close()
    })
  } else {
    console.log('u are Missing the Number girl!')
    mongoose.connection.close()
  }

} else {
  console.log('phoneboooooook:')
  Person.find({}).then(res => {
    res.forEach(p => {
      console.log(p.name, p.number)
    })
    mongoose.connection.close()
  })
}