import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import { AuthenticationContext } from '../Providers/AuthenticationProvider';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
  const {user,logOut}=useContext(AuthenticationContext);
  const navigate = useNavigate()
  const from ='/login'
  const handleLogout=()=>{
    logOut().then(()=>navigate(from, { replace: true })).catch(error=>console.log(error))
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
          <ActiveLink className='a' to='/'>Home</ActiveLink>
        </li>
        <li class="nav-item">
          <ActiveLink className='a' to='/blog'>Blog</ActiveLink>
        </li>
        <li className='photo'>
        {
          user?<div className='d-flex align-items-center'><li onClick={handleLogout} className='nav-item'><ActiveLink to='/logout'className='a'>Logout</ActiveLink></li><li className='nav-item'><img data-bs-toggle="tooltip" data-bs-placement="bottom" title={user.displayName} src={user.photoURL} alt="" /></li></div>:<li className='nav-item'><ActiveLink className='a' to='/login'>Login</ActiveLink></li>
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