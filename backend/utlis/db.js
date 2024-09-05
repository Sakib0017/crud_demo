import mongoose from "mongoose";

const dbCon=async()=>{
    try {
        await mongoose.connect("mongodb+srv://sakib-admin:sakib124000@cluster0.x55l3gi.mongodb.net/crud")
        console.log('Mongodb is conntected')
    } catch (error) {
        console.log(error)
    }
}

export default dbCon