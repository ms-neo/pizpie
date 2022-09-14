const mongoose = require('mongoose');
// const config = require('config');
// const dbUri = config.get('mongoUri');
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
        console.log(err.message, 'err')
        process.exit(1)
    }
}

module.exports =connectDB