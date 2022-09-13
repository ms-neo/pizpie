require('dotenv').config()
const express = require('express')
const connectDB = require('./config/dbConfig')
const cors =require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors());
//calling the mongoose connect function to fetch the data from the database
connectDB()


app.use('/api/cart', require('./routes/api/cartRouter'))
app.use('/api/category', require('./routes/api/categoryRouter'))
app.use('/api/orders', require('./routes/api/orderRouter'))
app.use('/api/shipping-address', require('./routes/api/shippingAddress'))
app.use('/api/payment-stripe', require('./routes/api/paymentRouter'))
app.use('/api/products', require('./routes/api/productsRouter'))
app.use('/api/users',require('./routes/api/userRouter'))

// if (process.env.NODE_ENV === 'production'){
    // set static folder
    app.use(express.static("client/build"));
    
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
    });
    // }
    
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`the server is working now in port ${port}`)
})