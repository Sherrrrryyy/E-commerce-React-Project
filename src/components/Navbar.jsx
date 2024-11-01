import { React, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'



const Navbar = () => {


    const [visible, setVisible] = useState(false)


    return (

        <div className='flex justify-between items-center py-5 pr-10 pl-10  font-medium'>
            <img src={assets.logo} className='w-36' alt="" />
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>Home</p>
                    <hr className='w-3/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>Collection</p>
                    <hr className='w-3/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>About</p>
                    <hr className='w-3/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>Contact</p>
                    <hr className='w-3/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>
            <div className='flex gap-5 items-center'>
                <img src={assets.search_icon} className='w-4 cursor-pointer' alt="" />

                <div className='group relative'>
                    <img src={assets.profile_icon} className='w-4 cursor-pointer' alt="" />
                    <div className='group-hover:block hidden absolute right-0 pt-4 '>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black '>My Profile</p>
                            <p className='cursor-pointer hover:text-black '>Orders</p>
                            <p className='cursor-pointer hover:text-black '>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='group relative flex gap-2 items-center'>
                    <img src={assets.cart_icon} className='w-4 cursor-pointer' alt="" />
                    <p className='group absolute bottom-[-8px] right-[-5px] w-4 rounded-full text-center leading-4 bg-black text-white aspect-square text-[8px]'>0</p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-4 cursor-pointer sm:hidden' alt="" />
            </div>
            <div className={`overflow-hidden absolute top-0 right-0 bottom-0 bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-700'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer '>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p className=''>Back</p>
                    </div>
                    <NavLink className='py-2 pl-6 border' onClick={() => setVisible(false)} to='/'>Home</NavLink>
                    <NavLink className='py-2 pl-6 border' onClick={() => setVisible(false)} to='/collection'>Collection</NavLink>
                    <NavLink className='py-2 pl-6 border' onClick={() => setVisible(false)} to='/about'>About</NavLink>
                    <NavLink className='py-2 pl-6 border' onClick={() => setVisible(false)} to='/contact'>Contact</NavLink>

                </div>
            </div>
        </div>


    )
}

export default Navbar