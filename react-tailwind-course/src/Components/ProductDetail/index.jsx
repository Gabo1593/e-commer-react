import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext, React } from 'react'
import { ShoppingCartContext } from '../../Context'
import './style.css'

export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  

  return (
   <aside className={`${context.isProDetOpen? 'flex' : 'hidden'} product-detail `}>
        <div className='flex justify-between items-center'>
            <h2 className='font-medium text-xl p-2'>Detail</h2>
            <div onClick={()=> context.closeProDetail()}> <  XMarkIcon className='h-6 w-6 text-red-500 hover:text-red-900' />
            </div>
        </div>
        <figure className='px-6'>
          <p className='font-medium p-2 text-center'>{context.productToShow.title}</p>
          <img className='w-4/5 h-auto m-auto rounded-lg object-cover' src={context.productToShow.image} alt="" />
          <p className='font-medium p-6 text-right'>{`Price: ${context.productToShow.price} $`}</p>
          <p >{context.productToShow.description}</p>
        </figure>
   </aside>
  )
}
