import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
    name : {
        type: String,
        require: true,
        trim: true,
    },
    email : {
        type : String,
        require: true,
        trim: true,
    },
    password : {
        type : String,
        require : true,
        trim : true,
    },
    role : {
        type: String,
        enum : ["Admin" , "Student"]
    }
},
{timestamps:true}
)

export const User = mongoose.model("User", userSchema);