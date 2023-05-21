import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../Providers/AuthenticationProvider';

const Login = () => {
  const [success,setSuccess]=useState('');
  const [error,setError]=useState('');
  const {logIn}=useContext(AuthenticationContext);

  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || '/'
const handleLogin=event=>{
  event.preventDefault();
  const form=event.target;
  const email=form.email.value;
  const password=form.password.value;
  logIn(email,password).then(result=>{
    const loggedInUser=result.user;
    console.log(loggedInUser);
    form.reset();
    navigate(from, { replace: true })
    setSuccess('Login Successful!')
    setError('')
  }).catch(error=>setError(error.message))
}




    return (
        <div className='formpage w-50 mx-auto mt-5'>
          <p className='text-success text-center'>{success}</p>
          <p className='text-danger text-center'>{error}</p>
            <h1 className='text-center'>Please Login</h1>
            <form className='w-50 mx-auto' onSubmit={handleLogin}>
  <div class="form-group mb-3">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
    
  </div>
  <div class="form-group mb-3">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name='password' class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
  </div>
  <p>New to this website?Please <Link to='/register'>Register</Link></p>
 
  <button type="submit" class="btn btn-primary">Login</button>
  <h4 className='text-center'>Or</h4>
  <div className="d-flex">
    

  </div>
</form>
        </div>
    );
};

export default Login;