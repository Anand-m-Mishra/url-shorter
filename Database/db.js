import mongoose from "mongoose"


const connectDb = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/url-short`)
        console.log(`connect to DB`);
        
    }
    catch (err) {
        console.log(`error in connecting to DB`);
        process.exit(-1);
    }
}

export default connectDb
