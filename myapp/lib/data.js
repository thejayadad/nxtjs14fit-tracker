'use server'
// import Category from "@/models/Category"
import connectDB from "./db"
// import Workout from "@/models/Exercise"
import Exercise from "@/models/Exercise"

export const getAllExercises = async() => {
    try {
        await connectDB()
        const exercises = await Exercise.find({}, '_id name').lean(); // Fetch only _id and name fields and use lean() to convert to plain JavaScript objects
        return JSON.stringify(exercises);
    } catch (error) {
        throw new Error("Failed to fetch exercises! " + error);

    }
}



// export const getSingleCategory = async (id) => {
// try {
//     await connectDB()
//     const category = await Category.findById(id)
//     return category
// } catch (error) {
//     throw new Error("Failed to fetch categories! " + error);
// }

// }

// export const getWorkouts = async (categoryId) => {
//     try {
//         await connectDB()
//         const workouts = await Workout.find( { categoryId: categoryId})
  
//         console.log("Workouts: ", workouts);  
//         return workouts;
//     } catch (error) {
//         throw new Error("Failed to fetch workouts! " + error);
        
//     }
// }