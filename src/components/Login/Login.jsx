import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../Providers/AuthenticationProvider';


const Login = () => {
  const {setLoading,user}=useContext(AuthenticationContext);
  const [success,setSuccess]=useState('');
  const [error,setError]=useState('');
  const {logIn,googleSignIn,githubSignIn}=useContext(AuthenticationContext);

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

const handleGoogleSignIn=()=>{
  googleSignIn().then(()=>navigate(from, { replace: true })).catch(error=>console.log(error))
  
}
const handleGithubLogin=()=>{
  githubSignIn().then(()=>navigate(from, { replace: true })).catch(error=>console.log(error))
  
}



    return (
        <div className='formpage  mx-auto mt-5'>
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
  <p>New to this website?Please <Link className='register' to='/register'>Register</Link></p>
 
  <button type="submit" class="btn btn-primary">Login</button>

</form>
<h4 className='text-center'>Or</h4>
  <button onClick={handleGoogleSignIn} className="d-flex align-items-center google mx-auto">
  <i className="fa-brands fa-google m-3"></i>

  Sign in with Google

  </button>
  <button onClick={handleGithubLogin} className="d-flex align-items-center google mt-3 mx-auto">
  <i class="fa-brands fa-github m-3"></i>

  Sign in with Github

  </button>
        </div>
    );
};

export default Login;