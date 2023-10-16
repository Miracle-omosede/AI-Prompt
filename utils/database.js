import mongoose from 'mongoose'

let isConnected = false; // track connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }
    
}