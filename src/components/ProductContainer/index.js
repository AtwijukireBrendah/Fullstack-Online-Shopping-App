import React from "react";
import { Button } from "@mui/material";


function ProductContainer(props) {


    return (<>
        <div>
            <li style={{ maxHeight: '100vh', listStyle: 'none' }}>
                <div className="product-details">
                    <img src={props.product.image} alt="title" width={"150px"} />
                    <p>$ {props.product.price}</p>
                    <div>
                        <h3>{props.product.title}</h3>
                        <p>{props.product.description}</p>
                    </div>
                    <button className="btn" variant="contained" size="medium" background-color="orange" onClick={() => {
                        props.addToCart(props.product)

                    }}>Add to cart</button>
                    <br />
                    <br />
                    <div>


                    </div>


                </div>
            </li>
        </div>
    </>)
}

export default ProductContainer