import React from 'react'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'



export const OrdersCard = props => {
  const {totalPrice, totalProducts} = props
   
  return (
    <div className='flex justify-between  bg-white  mb-2 border border-black w-80 p-1'>
      
        <div className='w-1/2 p-2'>
          <p className='flex flex-col justify-around'>
            <CalendarDaysIcon className='h-6 w-6 text-black cursor-pointer'></CalendarDaysIcon>
            <span className='font-bold'>15.08.23</span>
            
          </p>
        </div>
        <div className='flex flex-col w-1/2 items-end bg-red-500 p-2'>
          <p><span>🛒{totalProducts}</span></p>
          <p><span className='font-bold text-lg'>{totalPrice + ' $'}</span></p>
        </div>
      
       
    </div>
  )
}
