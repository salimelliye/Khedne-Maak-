import React , { useState } from 'react'
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'


export default function SignIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

  return (
    <div className='auth-main flex flex-col max-w-xs gap-8 items-center justify-center mt-12'>
        <h1 className='text-3xl'>Sign In</h1>
        <div className='w-full flex flex-col gap-2'>
          <label className='text-xl text-center'>Enter your Email (or Username)</label>
          <TextField fullWidth id='fullWidth' type='email' onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className='w-full flex flex-col gap-2'>
          <label className='text-xl text-center'>Enter your Password </label>
          <TextField fullWidth id='fullWidth' type='password' onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <Button variant="contained">Login</Button>
        <Link to='/signup' className='hover:underline'>Don't have an Account? Sign Up</Link>
        <Button className='to-home' variant="outlined" onClick={()=>{navigate('/')}}>Back to Home</Button>
    </div>
  )
}