import mongoose from "mongoose";


const WorkoutSchema = new mongoose.Schema({
    creator: String,
    type: {
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
      }
  }, {timestamps: true})

export default mongoose?.models?.Workout || mongoose.model("Workout", WorkoutSchema)