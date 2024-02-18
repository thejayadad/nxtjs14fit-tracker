import Modals from '@/components/Modal';
import { updateCategory } from '@/lib/action';
import { getSingleCategory, getWorkouts } from '@/lib/data';
import React from 'react'

const UpdateCategory = async ({ params }) => {
    const { id } = params;
    const category = await getSingleCategory(id)
    const workouts = await getWorkouts()
  return (
    <div className='flex flex-col gap-4'>
              {category && <h2 className='text-center'>{category.title}</h2>}
            {workouts.length > 0 ? (
                <div>
                    {workouts.map((workout) => (
                        <div key={workout.id}>
                            <p>{workout.name}</p>
                        </div>
                    ))}
                </div>
            ) : (
           <>
                <p className='text-center'>No workouts available. Post your first workout!</p>
                <Modals/>
           </>
            )}

    </div>
  )
}

export default UpdateCategory