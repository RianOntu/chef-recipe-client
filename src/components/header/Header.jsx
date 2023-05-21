import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { AuthenticationContext } from '../Providers/AuthenticationProvider';

const Header = () => {
  const {user,logOut}=useContext(AuthenticationContext);
  const handleLogout=()=>{
    logOut().then().catch(error=>console.log(error))
  }
    return (
        <div>
           <nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="/">Chef's World</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll align-items-center">
        <li class="nav-item">
          <Link to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/blog'>Blog</Link>
        </li>
        <li className='photo'>
        {
          user?<div className='d-flex align-items-center'><li onClick={handleLogout} className='nav-item'><Link>Logout</Link></li><li className='nav-item'><img data-bs-toggle="tooltip" data-bs-placement="bottom" title={user.displayName} src={user.photoURL} alt="" /></li></div>:<li className='nav-item'><Link to='/login'>Login</Link></li>
        }
        </li>

      
       
      </ul>
     
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;