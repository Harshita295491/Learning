import React from 'react'
import loginImg1 from "../assets/loginimg1.svg"
import loginImg2 from "../assets/loginimg2.svg"
import loginImg3 from "../assets/loginimg3.svg"
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className='relative flex justify-center h-[100vh]'>
            <div className='z-[-10] absolute w-full flex justify-between top-0'>
                <img className='w-[340px] h-[320px]' src={loginImg1} alt="" />

            </div>

            {/* register div */}

            <div className='absolute mt-18'>
                <h1 className='text-[50px]  font-bold text-center text-[#1F41A9] mt-20'>BLUE SPACE</h1>
            </div>
            <div className='w-[354px] h-[400px] flex flex-col mt-44 gap-4'>

                <h1 className='font-bold text-[40px] text-[#264ECA] text-center '>Register</h1>
                <p className='w-full font-bold text-[15px] text-center text-[#264ECA]'>Please enter your Name, Login and your Password</p>
                <div className='w-full p-2 border-[1px] border-[#1F41A9] rounded-2xl'>
                    <input type="text" placeholder='Username' />

                </div>
                <div className='w-full p-2 border-[1px] border-[#1F41A9] rounded-2xl'>
                    <input type="email" placeholder='Email' />

                </div>
                <div className='w-full p-2  border-[1px] border-[#1F41A9] rounded-2xl'>
                    <input type="password" placeholder='Password' />

                </div>
                <div className='w-full p-2  border-[1px] border-[#1F41A9] rounded-2xl'>
                    <input type="password" placeholder='Re-enter Password' />

                </div>


                <button className='w-full p-2 border-2 border-[#1F41A9] rounded-2xl text-[#264ECA] font-bold text-[15px]'>Register</button>


                <Link to="/login">  <p className='text-[#264ECA] text-center text-[14px] font-bold'>Already have an Account? <span className='text-[#18A6C6]  text-[14px] italic'>Login!</span> </p></Link>
            </div>



            <div className='z-[-10] absolute flex justify-between items-end bottom-0 w-full'>
                <img className='w-[228px] h-[228px] ' src={loginImg2} alt="" />
                <img className='w-[520px] h-[509px]' src={loginImg3} alt="" />
            </div>



        </div>
    )
}

export default Register