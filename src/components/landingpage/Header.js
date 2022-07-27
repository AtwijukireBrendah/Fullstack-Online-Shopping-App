import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faTruck } from "@fortawesome/free-solid-svg-icons"
import SearchResultsContainer from '../SearchResultsContainer.js'

function Header(props){
    return (
        <div className='header'>
            <nav>
                <ul class="navigation-bar">
                    <div class="left-nav">
                        <span class="nav-text">Free Delivery</span>
                        <span class="nav-text">Call to Order   0705119096</span>

                        <div class="right-nav">
                            <form>
                                <button type="button,submit" id="btnLogin-SignUp" formaction=""
                                    target="_blank">Login/SignUp</button>
                            </form>
                        </div>


                    </div>
                </ul >
            </nav >
            <section class="search-area">
                <div>
                    <ul class="bottom-navigation">

                        {/* <form className="form" noValidate autoComplete="on"> */}
                            
                        <span>
                           <span>
                               {/* <a id="homepage-link" href="./index.html" alt="homepage" style="width:300px;"> */}
                                <FontAwesomeIcon icon={faTruck} /> KCF ONLINE STORE
    {/* <Icon baseClassName="fas" className="fa-plus-circle" />
    <Icon baseClassName="fas" className="fa-plus-circle" color="primary" /> */}
      


                            </span>
                                {/* </a> */}
                                  
                        </span>

                        <SearchResultsContainer products={props.products} setProducts={props.setProducts}/>

                        

                        {/* </form> */}

                        <span onClick={() => { props.goToCart() }} style={{cursor: 'pointer'}}>
                            {/* <a id="cartpage-link" href="./cartpage.html" alt="cartMenu" style="margin-right:50px;"> */}
                            <FontAwesomeIcon icon={faCartShopping} /> Cart <sup>{props.cartSize}</sup>
                        </span>
                        {/* </a> */}

                    </ul >
                </div >
            </section >
        </div >
    );
}

export default Header;



