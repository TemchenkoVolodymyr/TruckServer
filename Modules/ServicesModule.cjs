const mongoose = require('mongoose')

const ServicesSchema = new mongoose.Schema({
  service:{
    title:String,
    price:String
  }

})

const Services = mongoose.model('services',ServicesSchema)

module.exports = Services