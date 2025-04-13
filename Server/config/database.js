import mongoose from "mongoose";

const connectionDB = async() => {
    try {
        await mongoose.connect(`${process.env.MONGO_DB_URI}`).then(
            console.log('Database Connected...')
        )
    } catch (error) {
        console.log(error)
    }
}

export default connectionDB