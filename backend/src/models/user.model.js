import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    // this is a third-party authentication service (clerk), so we keep track of the clerkId to 
    // identify the user
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);