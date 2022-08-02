import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function CartContainer({cart, removeFromCart}) {
    let totalAmount = 0

    cart.forEach(product => {
        totalAmount += product.price
    })

    console.log('caRT', cart)
    return(
    <>
        <div>
            <p>Cart</p>

            <Box sx={{ flexGrow: 1 }}>
            {cart.map((item, index) => {
                return (
                <Grid container spacing={2}>
                    <Grid xs={4}>
                    <img src={item.image} alt="name" width={"150px"} />
                    </Grid>
                    <Grid xs={4}>
                    <p>UGX {item.price}</p>
                    </Grid>
                    <Grid  xs={4}>
                    <button className="btn" onClick={() => removeFromCart(index)}>Remove from Cart</button>

                    </Grid>
                    </Grid>
                   )
                })}   
                </Box>

                <p>Total price: UGX {totalAmount} </p>
        </div>
    </>)
}

export default CartContainer



