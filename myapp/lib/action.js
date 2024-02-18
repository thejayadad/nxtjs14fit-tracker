'use server'
import { revalidatePath } from "next/cache";
// import Category from "@/models/Category"
import connectDB from "./db"
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
// import Workout from "@/models/Exercise";
import Exercise from "@/models/Exercise";


export const addExercise = async(name) => {
  try {
    await connectDB();
    const newExercise = new Exercise({
      name,
    });
    await newExercise.save();
    return newExercise.toJSON(); 
    } catch (error) {
    throw new Error("Failed to create exercise! " + error);
  }
}

export const updateExercise = async (id, name) => {
  try {
    await connectDB();
    const updateFields = {};
    if (name) {
      updateFields.name = name; // Corrected field name
    }
    console.log("Update fields:", updateFields);
    console.log("Exercise ID:", id);
    await Exercise.findByIdAndUpdate(id, updateFields);
    console.log("Exercise updated successfully!");
    revalidatePath("/dashboard");
    return updateFields;
  } catch (error) {
    console.error('Failed to update exercise:', error);
    throw new Error('Failed to update exercise! ' + error);
  }
};



// export const addCategory = async (title) => {
//     try {
//       await connectDB();
//       const newCategory = new Category({
//         title,
//       });
//       await newCategory.save();
//       return newCategory; 
//     } catch (error) {
//       throw new Error("Failed to create category! " + error);
//     }

//   };
  
//   export const updateCategory = async (id, title) => {
//     try {
//       await connectDB();
//       const updateFields = {};
//       if (title) {
//         updateFields.title = title;
//       }
//       await Category.findByIdAndUpdate(id, updateFields);
//       revalidatePath("/dashboard")
//       return updateFields;
//     } catch (error) {
//       throw new Error('Failed to update category! ' + error);
//     }

//   };
  
//   export const addWorkout = async (workoutData) => {
//     const { type, duration, distance, calories, intensity, notes, date, categoryId } = workoutData;
//     try {
//         await connectDB();
//         const newWorkout = new Workout({
//             type, duration, distance, calories, intensity, notes, date, categoryId
//         });
//         await newWorkout.save();
//         return newWorkout;
//     } catch (error) {
//         throw new Error("Failed to create workout! " + error);
//     }
// };

// export const updateWorkout = async (id, type) => {
//   try {
//     await connectDB();
//     const updateFields = {};
//     if (type) {
//       updateFields.type = type;
//     }
//     await Workout.findByIdAndUpdate(id, updateFields); // Update the Workout model instead of Category
//     revalidatePath("/dashboard");
//     return updateFields;
//   } catch (error) {
//     throw new Error('Failed to update workout! ' + error);
//   }
// };
