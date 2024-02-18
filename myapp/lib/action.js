'use server'
import Category from "@/models/Category"
import connectDB from "./db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



export const addCategory = async (title) => {
    try {
      await connectDB();
      const newCategory = new Category({
        title,
      });
      await newCategory.save();
      return newCategory; 
    } catch (error) {
      throw new Error("Failed to create category! " + error);
    }

  };
  
  export const updateCategory = async (id, title) => {
    try {
      await connectDB();
      const updateFields = {};
      if (title) {
        updateFields.title = title;
      }
      await Category.findByIdAndUpdate(id, updateFields);
      revalidatePath("/dashboard")
      return updateFields;
    } catch (error) {
      throw new Error('Failed to update category! ' + error);
    }

  };
  
  