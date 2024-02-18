'use server'
import Category from "@/models/Category"
import connectDB from "./db"
import Workout from "@/models/Workout"

export const getAllCategory = async () => {
    try {
        await connectDB()
        const categories = await Category.find({})
        return categories
    } catch (error) {
        throw new Error("Failed to fetch categories! " + error);
    
    }
}

export const getSingleCategory = async (id) => {
try {
    await connectDB()
    const category = await Category.findById(id)
    return category
} catch (error) {
    throw new Error("Failed to fetch categories! " + error);
}

}

export const getWorkouts = async (categoryId) => {
    try {
        await connectDB()
        const workouts = await Workout.find( { categoryId: categoryId})
  
        console.log("Workouts: ", workouts);  
        return workouts;
    } catch (error) {
        throw new Error("Failed to fetch workouts! " + error);
        
    }
}