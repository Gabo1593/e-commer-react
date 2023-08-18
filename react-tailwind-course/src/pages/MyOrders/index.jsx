import {React, useContext} from 'react'
import { Layout } from '../../Components/Navbar/Layout'
import { OrdersCard } from '../../Components/OrdersCard'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'



export const MyOrders = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='flex w-80 justify-center items-center relative'>
        <h1 className='font-semibold text-lg'>My Orders</h1>
      </div>
      
      {
        context.order.map((order, index)=>  (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
              totalPrice={order.totalPrice} 
              totalProducts={order.totalProducts}>
            </OrdersCard>
          </Link>
        )
         
        )
      }
      
    </Layout>
  )
}
