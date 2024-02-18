'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { updateCategory } from '@/lib/action';
import { getSingleCategory } from '@/lib/data';
import { useRouter } from 'next/navigation'; // Import useRouter hook

const EditCategoryPage = ({ params }) => {
  const { id } = params;
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter(); // Initialize useRouter hook

  const fetchCategory = async () => {
    try {
      const category = await getSingleCategory(id);
      setValue('title', category.title); // Set the initial value of the title input field
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  };

  // Submit form data
  const onSubmit = async (formData) => {
    try {
      await updateCategory(id, formData.title); // Pass ID and title separately to updateCategory
      setSuccessMessage('Category updated successfully'); // Set success message
      router.push('/dashboard'); // Redirect user to /dashboard
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  React.useEffect(() => {
    fetchCategory(); // Fetch category data when the component mounts
  }, []); 

  return (
    <div>
      <h2 className='text-center'>Edit Category</h2>
      {successMessage && <p>{successMessage}</p>} {/* Show success message if available */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('title', { required: 'Title is required' })}
          placeholder='Enter new title'
        />
        {errors.title && <p>{errors.title.message}</p>}
        <button type='submit'>Update Category</button>
      </form>
    </div>
  );
};

export default EditCategoryPage;
