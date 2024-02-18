import mongoose from "mongoose";


const CategorySchema = new mongoose.Schema({
    creator: String,
    title: String,
    Workout: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }],
  }, {timestamps: true})

export default mongoose?.models?.Category || mongoose.model("Category", CategorySchema)