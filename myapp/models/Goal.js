import mongoose from "mongoose";


const GoalSchema = new mongoose.Schema({
    creator: String,
    targetWeight: {
        type: Number
      },
      targetDistance: {
        type: Number
      },
      targetDuration: {
        type: Number
      }
  }, {timestamps: true})

export default mongoose?.models?.Goal || mongoose.model("Goal", GoalSchema)