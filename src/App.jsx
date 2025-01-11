import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/homePage";
import Contact from "./Pages/contact";
import About from "./Pages/about";
import Profile from "./Pages/profile";
import Search from "./Pages/search";
import Product from "./Pages/product";
import CategoriesDetails from "./Pages/categoriesDetails";
import Cart from "./Pages/cart";
import Favorite from "./Pages/favorite";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/logIn";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import Header1 from "./layOuts/header1";
import Header2 from "./layOuts/header2";
import Footer from "./layOuts/footer";
import ItemDetails from "./Pages/itemDetails";
import itemsContext from "./Contexts/itemsContext";
import Cookies from "js-cookie"


export default function App() {

  const {decodeToken} = useContext(itemsContext)


  useEffect(() => {
    let token = Cookies.get("mytoken")
    if(token) {
      decodeToken(token)
    }

  },[])
  return(
    <Router>
      <div>

        <Header1 />
        <Header2 />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About />}/> 
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/product' element={<Product />}/> 
        <Route path='/categories/:CategoryName' element={<CategoriesDetails/>}/>
        <Route path='/itemdetails/:id' element={<ItemDetails/>}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path="/favorite" element={<Favorite/>}/>

      </Routes>
      <Footer />
      
      </div>
    </Router>
  )
}