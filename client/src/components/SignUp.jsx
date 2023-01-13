import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export default function SignUp() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const navigate = useNavigate();

  return (
    <div className='auth-main flex flex-col max-w-xs gap-8 items-center justify-center mt-12'>
        <h1 className='text-3xl'>Sign Up</h1>
        <div className='w-full flex flex-col gap-2'>
            <label className='text-xl text-center'> Enter your Email &#128236; </label>
            <TextField fullWidth id="fullWidth" type='email' onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className='w-full flex flex-col gap-2'>
            <label className='text-xl text-center'> Pick a Solid Password &#128272; </label>
            <TextField fullWidth id="fullWidth" type='password' onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div className='w-full flex flex-col gap-2'>
            <label className='text-xl text-center'> Choose a cool username &#129412; </label>
            <TextField type='email' fullWidth id="fullWidth"  onChange={(e)=>{setUsername(e.target.value)}} />
        </div>
        <Button variant="contained">Submit</Button>
        <Link to='/signin' className='hover:underline'>Already have an account? Sign In</Link>
        <Button className='to-home' variant="outlined" onClick={()=>{navigate('/')}}>Back to Home</Button>
    </div>
  )
}