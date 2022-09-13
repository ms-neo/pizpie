const mongoose = require('mongoose');
const config = require('config');
const dbUri = config.get('mongoUri');

const connectDB = async ()=>{

    try {
        await mongoose.connect(dbUri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (err) {
        console.log(err.message, 'err')
        process.exit(1)
    }

}

module.exports =connectDB