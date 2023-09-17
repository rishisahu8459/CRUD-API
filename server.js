require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect(process.env.Database_URL , {useNewURLParser: true})
const db  = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))
app.use(express.json())
const subcribersRouter = require('./routes/subscribers')
app.use('/subscribers', subcribersRouter)

app.listen(3000, () => console.log('server Started'))
