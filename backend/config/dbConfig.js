const mongoose = require('mongoose');
// const config = require('config');
// const dbUri = config.get('mongoUri');
const dbUri = process.env.MONGO_URI;

const connectDB = async ()=>{

    try {
        // console.log(`${dbUri}`)
        await mongoose.connect(
            // `mongodb+srv://neona:${dbUri}@pizpiedb.powid.mongodb.net/test`
            // `mongodb+srv://neona:${dbUri}@pizpiedb.powid.mongodb.net/?retryWrites=true&w=majority`
            `mongodb+srv://neona:${dbUri}@pizpiedb.powid.mongodb.net/pizpieDB?retryWrites=true&w=majority&ssl=true`
        // `mongodb://neona:${dbUri}@endangeredanimals-shard-00-00.eznhk.mongodb.net:27017,endangeredanimals-shard-00-01.eznhk.mongodb.net:27017,endangeredanimals-shard-00-02.eznhk.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-pvwqse-shard-0&authSource=admin&retryWrites=true&w=majority`
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