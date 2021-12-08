
import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        unique: true, 
    },
    phone: {
        type:String,
        required: true,
    },
    dob:{
        type:Date,
        required:true
    },
    country:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    creation:{
        type: Date,
        required: Date.now(),
    },
    login: {
        type: Date,
        default: Date.now()
      }
});
const userModel = mongoose.model("BAGUser", userSchema);

export default userModel;
