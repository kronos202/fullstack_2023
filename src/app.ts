import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import morgan from 'morgan'


const app = express()

//init middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

//init db
import './db/init.mongodb'
//check overload from helpers/check.connect

//init routes

export { app }