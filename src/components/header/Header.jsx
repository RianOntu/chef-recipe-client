import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
           <nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="/">Chef's World</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
        <li class="nav-item">
          <Link to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/blog'>Blog</Link>
        </li>
        <li class="nav-item">
          <Link to='/login'>Login</Link>
        </li>
      
       
      </ul>
     
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;