
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000
const helmet = require('helmet')
const http = require('http')
const server = http.createServer(app)
const path = require('path')
const ErrorHandler = require("./helpers/ErrorHandler.cjs");

app.use(helmet())

app.use(cors({origin:'*'}))
app.use(express.json())
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => console.log('DB connection successful'))

const servicesRouter = require('./Routers/ServicesRouter.cjs')
app.use('/services',servicesRouter)



app.all('*',(req,res,next) => {
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH")
  next(new ErrorHandler(`Url with this path ${req.originalUrl} doesnt exist`), 404);
})

server.listen(PORT,() => {
  console.log(`App running on ${PORT}`)
})