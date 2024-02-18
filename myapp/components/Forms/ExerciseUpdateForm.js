'use client'
// ExerciseUpdateForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { updateExercise } from '@/lib/action';

const ExerciseUpdateForm = ({ exercise, onSuccess, onError, setLoading }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setLoading(true); // Set loading state to true
    try {
      await updateExercise(data.id, data.name); // Pass exercise id from form data
      onSuccess(); // Call onSuccess callback
    } catch (error) {
      console.error('Error updating exercise:', error);
      onError(); // Call onError callback
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='hidden' // Make the input hidden
        {...register('id')} // Register id field
        defaultValue={exercise._id} // Populate input with current exercise id
      />
      <input
        type='text'
        {...register('name', { required: 'Name is required' })}
        defaultValue={exercise.name} // Populate input with current exercise name
      />
      {errors.name && <p>{errors.name.message}</p>}
      <button type='submit'>Update</button>
    </form>
  );
};

export default ExerciseUpdateForm;
