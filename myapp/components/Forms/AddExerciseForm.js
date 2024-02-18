'use client'
// AddExerciseForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { addExercise } from '@/lib/action';

const AddExerciseForm = ({ onSuccess, onError, setLoading }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setLoading(true); // Set loading state to true
    try {
      await addExercise(data.name); // Call addExercise function
      onSuccess(); // Call onSuccess callback
    } catch (error) {
      console.error('Error adding exercise:', error);
      onError(); // Call onError callback
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('name', { required: 'Name is required' })}
        placeholder='Enter exercise name'
      />
      {errors.name && <p>{errors.name.message}</p>}
      <button type='submit'>Add Exercise</button>
    </form>
  );
};

export default AddExerciseForm;
