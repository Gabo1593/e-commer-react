import {useRoutes, BrowserRouter} from 'react-router-dom'
import './App.css'
import { ShoppingCartProvider } from '../../Context'

import { MyOrders } from '../MyOrders'
import { Home } from '../Home'
import { NotFound } from '../NotFound'
import { SingIn } from '../SingIn'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { Nav } from '../../Components/Navbar'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'

const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '/', element: <Home></Home> },
    { path: "/men's-clothing", element: <Home></Home> },
    { path: '/electronics', element: <Home></Home> },
    { path: '/jewelery', element: <Home></Home> },
    { path: '/toys', element: <Home></Home> },
    { path: '/others', element: <Home></Home> },
    { path: '/my-orders', element: <MyOrders></MyOrders> },
    { path: '/my-orders/last', element:<MyOrder></MyOrder>},
    { path: '/my-orders/:id', element:<MyOrder></MyOrder>},
    { path: '/my-account', element: <MyAccount></MyAccount> },
    { path: '/my-order', element: <MyOrder></MyOrder> },
    { path: '/sing-in', element: <SingIn></SingIn> },
    { path: '/*', element: <NotFound></NotFound> },
  ])
  return routes
}

function App() {

  return (
    <>
    <ShoppingCartProvider>
      <BrowserRouter>
       <AppRoutes></AppRoutes>
       <Nav></Nav>
       <CheckoutSideMenu></CheckoutSideMenu>
      </BrowserRouter>
    </ShoppingCartProvider>
   
    </>
  )
}

export default App
