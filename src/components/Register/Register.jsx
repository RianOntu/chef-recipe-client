import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='formpage w-50 mx-auto mt-5'>
            <h1 className='text-center'>Please Register</h1>
            <form className='w-50 mx-auto'>
  <div class="form-group mb-3">
    <label for="exampleInputEmail1">Name:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name"/>
   
  </div>
  <div class="form-group mb-3">
    <label for="exampleInputEmail1">Email address:</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div class="form-group mb-3">
    <label for="exampleInputPassword1">Password:</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group mb-3">
    <label for="exampleInputEmail1">Photo URL:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your photo URL"/>
   
  </div>

  <p>Already have an account?Please <Link to='/login'>Login</Link></p>
  
  <button type="submit" class="btn btn-primary">Register</button>
</form>
        </div>
    );
};

export default Register;