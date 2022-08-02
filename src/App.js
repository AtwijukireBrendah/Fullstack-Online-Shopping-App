import React, { useEffect, useRef, useState } from 'react';

import Header from './components/landingpage/Header';
// import CategorySection from './components/landingpage/CategorySection';
// import ProductsDisplay from './components/categories/ProductsDisplay';
import Footer from './components/landingpage/Footer';
import './App.css';
import MainContainer from './components/MainContainer';
import CartContainer from './components/CartContainer';
import ProductContainer from './components/ProductContainer';
// import SearchResultsContainer from './components/SearchResultsContainer';


function App() {

    const mainContainerRef = useRef()

    const [showingPage, setShowingPage] = useState("main")
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [selectedProduct, setSelectedProduct] = useState({})

    useEffect(() =>{
        
        if (products.length === 0){
            fetch("http://localhost:3009/api/v1/products")
            .then((res) => res.json())
            .then((apiResults) => {
                setProducts(apiResults)
            });
        }


        mainContainerRef.current.updateProductsList()
    }, [products])

    function addToCart(product){
        let cartTemp = cart
        cartTemp.push(product)
        setCart(cartTemp)
        alert("Item has been added to cart successfully!!");

    }

    function removeFromCart(product){
        let cartTemp = cart
        cartTemp.splice(product, 1)
        setCart(cartTemp)
    }

    function removeFromCart(product){
        let cartTemp = cart
        cartTemp.splice(product, 1)
        setCart(cartTemp)
    }


    function showBody(){
        if (showingPage === "cart") {
            return <CartContainer cart={cart} removeFromCart={removeFromCart} />
        } else if (showingPage === "main") {
            return <MainContainer ref={mainContainerRef} goToProduct={(product) => { setSelectedProduct(products[product]); setShowingPage("product") }} addToCart={addToCart} products={products} styles={{ marginTop: '500px' }} />
        } else if (showingPage === "product") {
            return <ProductContainer product={selectedProduct} addToCart={addToCart}  styles={{ marginTop: '500px' }} />
        } 
        // else if(showingPage === "searchresults"){
        //     return <SearchContainer product={selectedProduct} searchresults={searchresults}  styles={{ marginTop: '500px' }} />
        // }
        else {
            return null
        }
    }

    return (
        <div className="App">
            <Header goToCart={() => { setShowingPage("cart") }} cartSize={cart.length} products={products} setProducts={setProducts} />
            {
                showBody()
            }
            <Footer/>

        </div>
    );
}


export default App;

