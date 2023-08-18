import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) =>{
    //shopping Cart - Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail -  Open/close
    const [isProDetOpen, setIsProDetOpen] = useState(false)
    const openProDetail = () => setIsProDetOpen(true)
    const closeProDetail = () => setIsProDetOpen(false)

    // Checkout Side Menu -  Open/close
    const [isCheckSideMenuOpen, setIsCheckSideMenuOpen] = useState(false)
    const openCheckSideMenu = () => setIsCheckSideMenuOpen(true)
    const closeCheckSideMenu = () => setIsCheckSideMenuOpen(false)

    //  Product Detail - Show product
    const [productToShow, setProductToShow] = useState({})

    //Shopping Cart - add products to cart
    const [cartProducts, setCartProducts] = useState([])

    //  Shopping Cart  -  Order
    const [order, setOrder] = useState([])

    //  Get Products
    const [data, setData] = useState(null)


    const [filterData, setFilterData] = useState(null)

    //  Get Products by Title and Category
    const [searchByTitle, setSearchByTitle] = useState(null)
    const [searchByCategory, setSearchByCategory] = useState(null)
 
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])

    const filterDataByTitle = (data, searchByTitle) =>  {
        return data?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filterDataByCategory = (data, searchByCategory) =>  {
        return data?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, data, searchByTitle, searchByCategory) => {
        if(searchType === 'byTitle'){
           return filterDataByTitle(data, searchByTitle)
        }
        if(searchType === 'byCategory'){
            return filterDataByCategory(data, searchByCategory)
        }
        if(searchType === 'byTitleAndCategory'){
            return filterDataByCategory(data, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if(!searchType){
            return data
         }
    }

    useEffect(()=>{
        if (searchByTitle && searchByCategory) setFilterData(filterBy('byTitleAndCategory', data, searchByTitle,  searchByCategory))
        if (searchByTitle && !searchByCategory) setFilterData(filterBy('byTitle', data, searchByTitle,  searchByCategory))
        if (!searchByTitle && searchByCategory) setFilterData(filterBy( 'byCategory', data, searchByTitle,  searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilterData(filterBy(null, data, searchByTitle,  searchByCategory))
    }, [data, searchByTitle, searchByCategory])
    console.log('searchByTitle: ', searchByTitle);
    console.log('searchByCategory: ', searchByCategory);
    console.log('filterData: ', filterData);
    


    return (
        <ShoppingCartContext.Provider 
         value={
            {count,
             setCount,
             openProDetail,
             closeProDetail, 
             isProDetOpen,
             productToShow,
             setProductToShow,
             cartProducts,
             setCartProducts,
             isCheckSideMenuOpen,
             openCheckSideMenu,
             closeCheckSideMenu,
             order,
             setOrder,
             data,
             setData,
             searchByTitle, 
             setSearchByTitle,
             filterData,
             searchByCategory,
             setSearchByCategory
             }}>
             {children}
        </ShoppingCartContext.Provider>
       
    )
}