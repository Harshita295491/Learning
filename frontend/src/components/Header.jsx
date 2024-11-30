import {useEffect,useState} from 'react'
import logo from '../assets/Logo.svg'
import axios from 'axios'


import msg from "../assets/Frame.svg"

import { FiMoon } from 'react-icons/fi'
import { IoMdMenu } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
import { FaBell, FaRegBell } from 'react-icons/fa'

function Header() {

  return (
    <div className=' bg-[#005FD0] w-full  flex  px-4 py-2 justify-between'>
      <div className=''>
        <img className='' src={logo} alt="" />
      </div>
      <div className='  flex gap-4  items-center'>
        {/* <img  className='w-6 h-6 ' src={notify} alt=""  /> */}
        <FiMoon size={25} className='text-white' />
        <FaBell size={25} className='text-white' />

        {/* <img  className='w-6 h-6' src={moon} alt=""  /> */}

        <img className='w-6 h-6' src={msg} alt="" />
        {/* <img  className='w-6 h-6' src={hamburger} alt=""  /> */}
        <IoMdMenu size={25} className='text-white' />

        {/* <img  className='w-6 h-6' src={profile} alt=""  /> */}
        <CgProfile size={28} className='text-white' />


      </div>
    </div>
  )
}

export default Header