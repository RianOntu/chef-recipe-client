import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='formpage w-50 mx-auto mt-5'>
            <h1 className='text-center'>Please Login</h1>
            <form className='w-50 mx-auto'>
  <div class="form-group mb-3">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div class="form-group mb-3">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <p>New to this website?Please <Link to='/register'>Register</Link></p>
 
  <button type="submit" class="btn btn-primary">Login</button>
</form>
        </div>
    );
};

export default Login;