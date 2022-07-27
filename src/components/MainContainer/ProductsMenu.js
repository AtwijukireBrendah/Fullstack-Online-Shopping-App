import React from "react"

function ProductsMenu(props) {
    return (
        <span className="productsmenu">
            <ul class="phone-brands-list" style={{ listStyle: 'none' }}>
                {
                    props.categories.map((category, index) =>
                        <h1><li class="phone-brand" key={index} onClick={() => { props.selectProductCategory(index) }}><span>{category}</span></li></h1>)
                }
            </ul>
       
    </span >
    )
}

export default ProductsMenu