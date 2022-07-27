import React, { useState } from "react"
import { TextField} from "@mui/material";

// search items

function SearchResultsContainer({products, setProducts}){

    const [title, setTitle] = useState('');

    console.log('title', title)

    const searchProduct = () => {
        const filteredProducts = products.filter(function(product) {
            return product.title.toLowerCase().includes(title.toLowerCase())
        })

        setProducts(filteredProducts)
    } 

    return (
        <span class="search-span">
            <div>
                <span>
                    <TextField type="text" size="small" id="searchbar" name="title" placeholder="Search Brands and Categories" value={title} onChange={(val) => setTitle(val)} />
                </span>
                <span>
                    <button id="btnSearch" size="small" onClick={searchProduct}>SEARCH</button>
                </span>

            </div>

    </span>
    )
 }

 export default SearchResultsContainer;




 //  function registerEvents(){
//     document.getElementById("btnSearch").addEventListener("click", function(e) {
//        let searchInput = document.getElementById("searchbar").value
//        let searchResults = searchProduct(searchInput)
//        console.log(searchResults)
//        alert(searchResults)
//     })
//  }
 
//  registerEvents()

// search items

// export function searchProduct(name){
//     return products.filter(function(product) {
//        return product.name.toLowerCase().includes(name.toLowerCase())
//     })
//  }