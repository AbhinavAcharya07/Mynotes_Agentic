import mongoose from "mongoose";
const connectionWithMongoose = async()=>{
    const MongoUrl = process.env.MONGO_URL;
    try {
       const connectionInstance = await mongoose.connect(MongoUrl)
        console.log("connection success,host on",connectionInstance.connection.host)
    } catch (error) {
        console.log(error)
    }
    
}
export {connectionWithMongoose}