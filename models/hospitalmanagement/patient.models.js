import mongoose from "mongoose";
const patientSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true
  },
  diagonosedWith: {
    type: String,
    required: true
  },
  address : {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  bloodgroup: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
    enum :["M","F","O"]
  },
  admittedin: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  }
});
export const Patient = mongoose.model("Patient",patientSchema);