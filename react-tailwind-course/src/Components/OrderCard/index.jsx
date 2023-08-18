import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { render } from 'react-dom'


export const OrderCard = props => {
    const {id, title, imageUrl, price, handleDelete} = props
    let renderXMarkIcon
    if (handleDelete) {
        renderXMarkIcon = <XMarkIcon onClick={()=> handleDelete(id)} className='h-6 w-6 text-red-500 hover:text-red-900' />
    }
  return (
    <div className='flex justify-between w-full m-auto'>
        <div className='flex items-center gap-2 w-3/4'>
            <figure className='w-1/3 h-20'>
                <img className='w-full h-full rounded-lg object-contain' src={imageUrl} alt={title} />
            </figure>
            <p className='text-sm font-light w-2/3'>{title}</p>
        </div>
        <div className='flex items-center justify-center gap-2 w-1/4'>
            <p className='text-lg font-medium'>{price + ' $'}</p>
            {renderXMarkIcon}
        </div>
    </div>
  )
}
