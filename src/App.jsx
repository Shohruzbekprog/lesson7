/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'
import AddProduct from './components/AddProduct'
import { uid } from 'uid';
import Products from './components/Product/Products';
import { Link, Route, Router } from 'react-router-dom';
import home from './pages/home';



const getLocalStorage = () => {
  return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
}


function App() {

const id = uid()
const img = 'https://picsum.photos/200/300' 

const [title, setTitle] = useState ('');
const [price, setPrice] = useState ('');
const [list, setList] = useState (getLocalStorage());




const handleSubmit = (e) => {
  e.preventDefault();
  const newItem = {id: id, name: title, price: price, image: img}
  setList([...list, newItem]);
}


const removeItem = (id) => {
const newItem = list.filter((item) => item.id !== id)
setList(newItem)
}



useEffect (() => {
  localStorage.setItem('products', JSON.stringify(list));
}, [list]);

  return (
    <>
    <header />
    <Link to= '/'>home</Link>
    <Router >
      <Route path='/' element = {<home />}/>
      <Route  path='/addproduct' element = {<AddProduct title={title}
     setTitle={setTitle}
      price={price} 
      setPrice={setPrice}
      handleSubmit ={handleSubmit}/>}/>
      <Route path='/product' element = {
    <Products list = {list} removeItem = {removeItem}/>
      }/>
    </Router> 

    </>
  )
}

export default App
