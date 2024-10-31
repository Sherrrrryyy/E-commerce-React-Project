import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
    return (

        <div className='flex justify-between py-5 pr-10 pl-10  font-medium'>
            <img src={assets.logo} className='w-36' alt="" />
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

                <NavLink className='flex flex-col items-center gap-1'>
                    <p>Home</p>
                    <hr className='w-2/4 border-none max-h-[1.5px] bg-gray-700' />
                </NavLink>

                <NavLink className='flex flex-col items-center gap-1'>
                    <p>Home</p>
                    <hr className='w-2/4 border-none max-h-[1.5px] bg-gray-700' />
                </NavLink>  <NavLink className='flex flex-col items-center gap-1'>
                    <p>Home</p>
                    <hr className='w-2/4 border-none max-h-[1.5px] bg-gray-700' />
                </NavLink>  <NavLink className='flex flex-col items-center gap-1'>
                    <p>Home</p>
                    <hr className='w-2/4 border-none max-h-[1.5px] bg-gray-700' />
                </NavLink>
            </ul>

        </div>

    )
}

export default Navbar