import {React, useContext} from 'react'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Layout } from '../../Components/Navbar/Layout'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../../Components/OrderCard'
import { Link } from 'react-router-dom'


export const MyOrder = () => {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1

  return (
    <Layout>
      <div className='flex w-80 justify-center items-center relative m-2'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'></ChevronLeftIcon>
        </Link>
        <h1 className='font-bold text-lg'>My Orders</h1>
      </div>
      
      <div className='flex flex-col w-80 bg-yellow-50 border  border-black rounded-lg p-2'>
       {
        context.order?.[index]?.products.map(item =>
          <OrderCard 
            title={item.title} 
            imageUrl={item.image} 
            price={item.price}
            id={item.id}
            key={item.id}>
          </OrderCard>

        )
        }
      </div>
    </Layout>
  )
}
