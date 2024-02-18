import CreateCategoryForm from '@/components/Forms/CreateCategoryForm'
import SearchForm from '@/components/Forms/SearchForm'
import WorkoutList from '@/components/WorkoutList'
import React from 'react'

const DashboardPage =  () => {
  return (
    <div className='flex flex-col gap-4 max-w-screen-lg mx-auto'>
      <div>
        <h2 className='text-center'>Add Category</h2>
      <CreateCategoryForm />
      </div>
      <div className='flex items-center flex-col'>
        <SearchForm />
      </div>
      <WorkoutList/>
    </div>
  )
}

export default DashboardPage

