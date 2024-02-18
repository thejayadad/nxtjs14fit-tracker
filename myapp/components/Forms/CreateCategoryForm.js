'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { addCategory } from '@/lib/action';

const CreateCategoryForm = () => {
  const { register, handleSubmit, formState: { errors }, reset, setError } = useForm();
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async ({ title }) => {
    setLoading(true);
    try {
      await addCategory(title); 
      reset(); 
    } catch (error) {
      console.error('Error creating category:', error);
      setError('title', { type: 'server', message: 'Failed to create category' });
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('title')}
        placeholder='Title...'
      />
      {errors.title && <p>{errors.title.message}</p>}
      {loading ? (
        <button type="button" disabled>Loading...</button>
      ) : (
        <input type="submit" value="Submit" />
      )}
    </form>
  );
};

export default CreateCategoryForm;
