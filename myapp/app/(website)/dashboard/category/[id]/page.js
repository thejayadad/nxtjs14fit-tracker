import { updateCategory } from '@/lib/action';
import { getSingleCategory } from '@/lib/data';
import React from 'react'

const UpdateCategory = async ({ params }) => {
    const { id } = params;
    const category = await getSingleCategory(id)
  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-center'>{category.title}</h2>
    </div>
  )
}

export default UpdateCategory