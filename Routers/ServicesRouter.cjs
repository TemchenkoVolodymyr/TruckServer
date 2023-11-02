const express = require('express')

const servicesRouter = express.Router();
const servicesFunctions = require('../Functions/ServicesFunction.cjs')
servicesRouter.route('/')
  .get(servicesFunctions.getServices)
  .post(servicesFunctions.createService)

module.exports = servicesRouter