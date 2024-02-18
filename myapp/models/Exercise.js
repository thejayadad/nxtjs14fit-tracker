import mongoose from "mongoose";


const ExerciseSchema = new mongoose.Schema({
    creator: String,
    name: {
        type: String,
      },
      duration: {
        type: Number,
      },
      distance: {
        type: Number
      },
      calories: {
        type: Number
      },
      intensity: {
        type: String
      },
      notes: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      },

  }, {timestamps: true})

export default mongoose?.models?.Exercise || mongoose.model("Exercise", ExerciseSchema)