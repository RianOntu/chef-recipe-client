import React, { useContext, useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { AuthenticationContext, auth } from '../Providers/AuthenticationProvider';
import { getAuth,updateProfile } from 'firebase/auth';
import app from '../Firebase/firebase.config';



const Register = () => {
  const [success,setSuccess]=useState('');
  const [error,setError]=useState('');
  const {registerUser}=useContext(AuthenticationContext);

const handleRegister=(event)=>{

  event.preventDefault();
  const form=event.target;
  const name=form.name.value;
  const email=form.email.value;
  const password=form.password.value;
  const photo_url=form.purl.value;

  if(password.length<6){
      setError('Password should be six characters long!');
      return;
  }
  if(!/^(?=.*[\W_].*[\W_])/.test(password)){
    setError("Please enter atleast two special characters!")
    return;
  }
  registerUser(email,password).then(result=>{
    const newUser=result.user;
    updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo_url
    }).then(() => {
      setError('');
      setSuccess('User has been registered successfully! Now please login')
    }).catch((error) => {
      
    });
    console.log(newUser);
  }).catch(error=>console.log(error))
  form.reset();

 

}
     





    return (
        <div className='formpage  mx-auto mt-5'>
          <p className='text-danger text-center'>{error}</p>
          <p className='text-success text-center'>{success}</p>
            <h1 className='text-center'>Please Register</h1>
            <form className='w-50 mx-auto' onSubmit={handleRegister}>
  <div class="form-group mb-3">
    <label for="exampleInputEmail1">Name:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" name='name' aria-describedby="emailHelp" placeholder="Enter your name" required/>
   
  </div>
  <div class="form-group mb-3">
    <label for="exampleInputEmail1">Email address:</label>
    <input type="email" class="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" placeholder="Enter email" required/>
    
  </div>
  <div class="form-group mb-3">
    <label for="exampleInputPassword1">Password:</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name='password' placeholder="Password" required/>
  </div>
  <div class="form-group mb-3">
    <label for="exampleInputEmail1">Photo URL:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" name='purl' aria-describedby="emailHelp" placeholder="Enter your photo URL" required/>
   
  </div>

  <p>Already have an account?Please <Link className='register' to='/login'>Login</Link></p>
  
  <button type="submit" class="btn btn-primary">Register</button>
</form>
        </div>
    );
};

export default Register;