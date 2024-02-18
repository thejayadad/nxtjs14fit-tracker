'use server'
import Category from "@/models/Category"
import connectDB from "./db"

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