import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();

	return (
		<div className='flex flex-col justify-center content-center gap-4 '>
			<h1 className='font-bold text-black text-center -mb-1 text-5xl'>Khedne Maak</h1>
			<h3 className='text-center'>Your social network for rideshare.</h3>
			<Button variant='outlined' onClick={()=>{navigate('/signin')}}>Sign In</Button>{' '}
			<Button variant='outlined' onClick={()=>{navigate('/signup')}}>Sign Up</Button>{' '}
		</div>
  )
}
