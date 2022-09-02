import React from 'react';
import '../assets/styles/Header.css';

const Header = () => {
    return(
        <header class="Header-msg">
        <div class="wrapper">
          <div class="logo">Welcome to the platform</div>
          <nav>
            <a href="#">Help</a>
          </nav>
        </div>
      </header>
    );
}
export default Header;