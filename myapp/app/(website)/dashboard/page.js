import ExerciseList from '@/components/ExerciseList'
import React from 'react'

const DashboardPage =  () => {
  return (
    <div className='flex flex-col gap-4 max-w-screen-lg mx-auto'>
      
      <div className=''>
        <ExerciseList />
      </div>
    </div>
  )
}

export default DashboardPage

