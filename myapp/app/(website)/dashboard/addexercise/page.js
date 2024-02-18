'use client'
// AddExercise.js
import React, { useState } from 'react';
import AddExerciseForm from '@/components/Forms/AddExerciseForm';

const AddExercise = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSuccess = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000); 
  };

  const handleError = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
  };

  return (
    <div>
      <h2>Add Exercise</h2>
      <AddExerciseForm
        onSuccess={handleSuccess}
        onError={handleError}
        setLoading={setLoading}
      />
      {loading && <p>Loading...</p>}
      {success && <p>Exercise added successfully!</p>}
      {error && <p>Error adding exercise. Please try again.</p>}
    </div>
  );
};

export default AddExercise;
