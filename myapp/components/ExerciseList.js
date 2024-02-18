'use client'
import React, { useState, useEffect } from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { getAllExercises } from '@/lib/data';
import { updateExercise } from '@/lib/action';
import ExerciseUpdateForm from './Forms/ExerciseUpdateForm';

const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchExercises = async () => {
          try {
            const exercisesData = await getAllExercises();
            setExercises(JSON.parse(exercisesData)); // Parse JSON string to JavaScript objects
          } catch (error) {
            console.error('Error fetching exercises:', error);
          }
        };
    
        fetchExercises();
      }, []);
      const handleSuccess = () => {
        setSuccess(true);
        setLoading(false); // Set loading to false since update is complete
        
        setTimeout(() => {
          setSuccess(false);
          window.location.reload(); // Reload the page to show updated exercises
        }, 1000); // Reset success message after 3 seconds and reload the page
      };
    
      const handleError = () => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000); // Reset error message after 3 seconds
      };


    return (
        <div className='p-8'>
            {exercises.length > 0 ? (
                <Accordion variant="splitted">
                    {exercises.map((exercise) => (
                        <AccordionItem key={exercise.id} title={exercise.name} >
                            <ExerciseUpdateForm
                              exercise={exercise}
                              onSuccess={handleSuccess}
                              onError={handleError}
                              setLoading={setLoading}
                            />
                            </AccordionItem>
                        
                    ))}
                </Accordion>
            ) : (
                <p>No exercises added yet.</p>
            )}
            {loading && <p>Loading...</p>}
            {success && <p>Exercise updated successfully!</p>}
            {error && <p>Error updating exercise. Please try again.</p>}
        </div>
    );
};

export default ExerciseList;
