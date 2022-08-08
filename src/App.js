import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import { useState, useEffect } from "react";
import Cart from "./pages/cart";
import Details from "./pages/details";
import Shop from "./pages/shop";
import ShopLayout from "./pages/shop-layout";
import { createBrowserHistory } from 'history';


function App() {
  const history = createBrowserHistory();
  const [items, setItems ] = useState([]);
  const [filteredItems, setFilteredItems ] = useState([]);
  const [cart, setCart ] = useState([]);
  const [currentIndex, setCurrentIndex ] = useState(1);

  function catItems (e){
    setFilteredItems(() => items.filter((item) => item.categories.includes(Number(e.target.id))))
  }
  function all () {
    setFilteredItems(items)
  }
  function addToCart(e){
      let filtered = items.filter((item) => item.id === Number(e.target.id));
      
     
      if(!cart.includes(filtered[0])){
        filtered[0].amount= 1
        setCart((cart) => cart.concat(...filtered))
      }
      else{
       addAmount()
      }
  }
  function addAmount (e){
    let filtered = items.filter((item) => item.id === Number(e.target.id));
    filtered[0].amount++
    const tempCart = [...cart ]
    let index = tempCart.indexOf(filtered[0])
     tempCart.splice(index,1, filtered[0])
    setCart(tempCart)
  }
  function subtractAmount (e) {
    let filtered = items.filter((item) => item.id === Number(e.target.id));
    filtered[0].amount--
    const tempCart = [...cart ]
    let index = tempCart.indexOf(filtered[0])
     tempCart.splice(index,1, filtered[0])
    setCart(tempCart)
  }
  function fetchItems(){
    fetch('https://fakerapi.it/api/v1/products?_quantity=50')
    .then((response) => response.json())
    .then((data) => setItems(data.data))
  }
  function remove(e){
    let filtered = cart.filter((item) => item.id !== Number(e.target.id));
    setCart(filtered)
  }
  function slideImage(e) {
    setCurrentIndex(Number(e.target.id))
  }
  useEffect(() => {
   fetchItems()
  }, [])
  useEffect(()=>{
    all()
  }, [items])
  return (
    <BrowserRouter history={history} basename='/app'>
    <Routes>
      <Route path='/' element={<Layout cart={cart.length}/>} >
        <Route index element= {<Home/>} />
        <Route path='shop' element={<ShopLayout/>} >
          <Route index element={<Shop items={filteredItems} filter={catItems} all={all} ATC={addToCart} add={addAmount} subtract={subtractAmount}/>} />
          <Route path=':id' element={<Details items={items} currentIndex={currentIndex} slideImage={slideImage} ATC={addToCart} add={addAmount} subtract={subtractAmount}/>} />
        </Route>
        <Route path='cart' element={<Cart cart={cart} add={addAmount} subtract={subtractAmount} remove={remove}/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
