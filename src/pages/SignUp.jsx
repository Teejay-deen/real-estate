import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto    ' >
        <h1 className='text-3xl text-center font-semibold my-7'>Sign up</h1>
        <span className=' my-7 font-semibold mt-2 text-center'>Fill in the information below to get started</span>
        <form action="" className='flex flex-col gap-3'>
            <input type="text" placeholder='First name' id='fName' className='border p-3 rounded-lg' />
            <input type="text" placeholder='Lasr name' id='lName' className='border p-3 rounded-lg' />
            <input type="text" placeholder='Email' id='email' className='border p-3 rounded-lg' />
            <input type="password" placeholder='Password' id='password' className='border p-3 rounded-lg' />
            <input type="Password" placeholder='Confirm Password' id='cPassword' className='border p-3 rounded-lg' />
            <button className='bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-90'>Sign Up</button>
        </form>
        <div className='mt-3 flex gap-2'>
            <p>Have an account?</p>
            <Link to="/sign-in">
                <span className='text-blue-700'>Sign in </span>
            </Link>
        </div>
       
    </div>
  )
}

export default SignUp