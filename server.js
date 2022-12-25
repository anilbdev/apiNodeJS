const express = require('express')
const dotEnv = require('dotenv')
const cors = require('cors')
const dbConnection = require('./database/connection')
const productRouter = require('./routes/productRoute')
dotEnv.config()
const app = express()

//db connection
dbConnection()

//CORS enabled
app.use(cors())
//Requst content type application/json
app.use(express.json())
//Parsing the form url encoded
app.use(express.urlencoded({ extended: true }))

//Any which are unhandled
app.use((err, req, res, next) =>
{
    console.error(err.stack)
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    })
})

app.use('/api/v1/product', productRouter)
// app.use('/api/v1/category', productRouter)
app.get('/', (req, res) =>
{
    res.send('Hello')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>
{
    console.log(`Server running on PORT ${PORT}`);
})