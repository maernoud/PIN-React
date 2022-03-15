import React from "react";


function Navbar(props){
    return (
        <nav class="principal__navbar">
            <div class="principal__navbar__logo">
                <img src="/image/image/logo.png" alt="25Watts"/>
            </div>
            <div class="principal__navbar__links">
              <a href="#Home">Home</a>
              <a href="#">About</a>
              <a href="#">Product</a>
              <a href="#">Services</a>
              <a href="#contact">Contact</a>
            </div>
        </nav>

    )

}
export default Navbar;