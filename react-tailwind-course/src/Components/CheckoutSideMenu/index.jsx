import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext, React } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import './style.css'
import { totalPrice } from '../../utils'

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) =>{
    const filteredProduct = context.cartProducts.filter(item => item.id != id)
    context.setCartProducts(filteredProduct)
  }

  const handleCheckOut = () =>{
    const orderToAdd = {
      date: '15.08.23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts) 
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setCount(0)
    context.closeCheckSideMenu()
    context.setSearchByTitle('')
  }

  return (
   <aside className={`${context.isCheckSideMenuOpen? 'flex' : 'hidden'} checkout-side-menu scrollable-cards `}>
        <div className='flex justify-between items-center'>
            <h2 className='font-medium text-xl p-2'>My Orders</h2>
            <div onClick={()=> context.closeCheckSideMenu()}> <  XMarkIcon className='h-6 w-6 text-red-500 hover:text-red-900' />
            </div>
        </div>
        <div className='px-6 flex-1'>
          {
            context.cartProducts.map(item =>
            <OrderCard 
             handleDelete={handleDelete}
             title={item.title} 
             imageUrl={item.image} 
             price={item.price}
             id={item.id}
             key={item.id}>
            </OrderCard>

            )
          }
        </div>
       <div className='px-6 mb-6'>
          <p className='flex justify-between mb-2'>
            <span className='font-light'>Total</span>
            <span className='font-medium '>{totalPrice(context.cartProducts)}</span>
          </p>
          <Link to='/my-orders/last'>
          <button className='w-full bg-black py-3 hover:text-red-600 text-white rounded-lg' onClick={()=> handleCheckOut()}
          >Checkout</button>
          </Link>
       </div>
   </aside>
  )
}
