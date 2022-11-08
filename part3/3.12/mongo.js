const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const phoneArgv = {
  name : process.argv[3],
  phoneNumber : process.argv[4]
}

const url = `mongodb+srv://chifeng:${password}@cluster0.a4ng4lg.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.connect(url)

const phoneSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  date: Date,
})

const Phone = mongoose.model('phone', phoneSchema)

const phone = new Phone({
  ...phoneArgv,
  date: new Date(),
})

// phone.save().then(result => {
//   console.log(`add ${result.name} number ${result.phoneNumber} to phonebook`)
//   mongoose.connection.close()
// })

Phone.find({}).then(result => {
  result.forEach(phone => {
    console.log(phone)
  })
  mongoose.connection.close()
})