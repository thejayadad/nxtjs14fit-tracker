import { getAllCategory } from '@/lib/data'
import Link from 'next/link'
import React from 'react'
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import {FiEdit, FiTrash, FiArrowDown} from "react-icons/fi"
import { BiDotsVertical } from 'react-icons/bi';


const WorkoutList = async () => {
  const categories = await getAllCategory()
  return (
    <div className='flex flex-col gap-4 p-8'>
      
           {categories.length > 0 ? (
    <div>
    {categories.map((category) => (
        <div
        className='p-8 bg-gray-100 mb-8'
        key={category.id}>
          <div 
          className='flex items-center justify-between'
          >
          <Link href={`/dashboard/category/${category.id}`}>
            {category.title}
          </Link>
          <Popover placement="right">
      <PopoverTrigger>
  <BiDotsVertical
        className='text-xl'        
        />
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-2 py-4 flex gap-4">
          <div className="text-xl font-bold">
          <Link href={`/dashboard/category/${category.id}/edit`}>
          <FiEdit />
          </Link>
          </div>
          <div className="text-xl">
            <FiTrash />
          </div>
        </div>
      </PopoverContent>
    </Popover>
            </div>
          </div>
          ))}
        </div>
      ) : (
        <p>No categories</p>
      )}
    </div>
  )
}

export default WorkoutList