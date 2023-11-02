const ServiceSchema = require('../Modules/ServicesModule.cjs')

exports.getServices = async (req, res) => {
  const services = await ServiceSchema.find()

  if (!services) {
    res.status(404).json({
      status: "Error",
      message: "Document has not found"
    })
  } else {
    res.status(200).json({
      status: "Success",
      services
    })
  }
}

exports.createService = async (req, res) => {

  const service = await ServiceSchema.create({
    service:{
      title: req.body.title,
      price: req.body.price
    }
  })

  if (!service) {
    res.status(404).json({
      status: "Document was not created"
    })
  } else {
    res.status(200).json({
      status: "Succeed",
      service
    })
  }
}