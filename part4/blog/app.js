const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const blogsRouter = require('./controllers/blogs')

const app = express()
app.use(express.json())
app.use(morgan('tiny'))

logger.info('connecting tooooo...', config.MONGODB_URI)
mongoose
    .connect(config.MONGODB_URI, { family: 4 })
    .then(() => {
        logger.info('CONNECTED to mongo')
    })
    .catch((error) => {
        logger.error('Sir unforntualey we have encoutenered an error while conecting :', error.message)
    })

app.use(express.json())

app.use('/api/blogs', blogsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app