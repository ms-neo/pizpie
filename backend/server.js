require('dotenv').config()
const express = require('express')
const mongoose= require('mongoose')
const path = require('path')
const cors =require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors());
//calling the mongoose connect function to fetch the data from the database
const dbUri = process.env.MONGO_URI;

const connectDB = async ()=>{
    try {
        await mongoose.connect(
            `mongodb+srv://neona:${dbUri}@pizpiedb.powid.mongodb.net/pizpieDB?retryWrites=true&w=majority&ssl=true`
        ,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`connected to mongodb.....`)
    } catch (err) {
        console.log(err, 'err')
        process.exit(1)
    }
}
connectDB()


app.use('/api/cart', require('./routes/api/cartRouter'))
app.use('/api/category', require('./routes/api/categoryRouter'))
app.use('/api/orders', require('./routes/api/orderRouter'))
app.use('/api/shipping-address', require('./routes/api/shippingAddress'))
app.use('/api/payment-stripe', require('./routes/api/paymentRouter'))
app.use('/api/products', require('./routes/api/productsRouter'))
app.use('/api/users',require('./routes/api/userRouter'))

app.get('*', (req, res) => {
    res.sendFile('./client/build/index.html');
  });
// if (process.env.NODE_ENV === 'production'){
//     // set static folder
//     app.use(express.static("client/build"));
    
    // app.get('*', (req, res) => {
    //   res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
    // });
//     }
    
const port = process.env.PORT || 5000

process.on('warning', (warning) => {
    console.log(warning.stack);
});

app.listen(port, () => {
    console.log(`the server is working now in port ${port}`)
})