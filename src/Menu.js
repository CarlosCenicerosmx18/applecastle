import React from 'react'
import logo from './img/PNG/solo-positivo@2x.png'
const Menu = () => {
  return (
    <header>
        <nav>
            <div id="menu-icon">

            </div>
            <div id="logo">
            <a href="/">
                <img src={logo} width="200px" height="auto" alt=""/>
            </a>
                
            </div>
            <ul class="menu">
                <li>SHOP</li>
                <li>ABOUT US</li>
                <li><button class="btn bg-dark text-white">GET STARTED</button></li>
            </ul>

        </nav>

    </header>
  )
}

export default Menu