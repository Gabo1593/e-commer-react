import {React, useContext} from 'react'
import { Layout } from '../../Components/Navbar/Layout'
import { Card } from '../../Components/Navbar/Card'
import { ProductDetail } from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

export const Home = () => {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if(context.filterData?.length > 0){
      return (
      context.filterData?.map(item=>
      <Card key={item.id} data={item} ></Card>
      )
      )
    }else{
      return (
       <div>
        We don't have anything 
       </div>
      )
    }
  }
  

  return (
    <Layout>
       <div className='flex w-80 justify-center items-center relative'>
        <h1 className='font-semibold text-lg'>Home</h1>
      </div>
      <input type="text" 
      placeholder='Search a product'
      className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none' 
      onChange={(event)=> context.setSearchByTitle(event.target.value)}/>

      <div className='grid gap-4 grid-cols-3 w-full max-w-screen-lg justify-items-center'>
        {
          renderView()
        }
     </div>
     <ProductDetail></ProductDetail>
     
      
    </Layout>
  )
}
