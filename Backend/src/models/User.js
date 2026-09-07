import mongoose from "mongoose";

const userSchema =new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        height:{
            type: Number,
            required:true
        },
        weight:{
            type: Number,
            required:true
        }
    }
);

const User = mongoose.model('user', userSchema);

export default User;