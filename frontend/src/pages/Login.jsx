import React from 'react'
import loginImg1 from "../assets/loginimg1.svg"
import loginImg2 from "../assets/loginimg2.svg"
import loginImg3 from "../assets/loginimg3.svg"
import { Link } from "react-router-dom"
function Login() {
    const loginWithGoogle = ()=> {
        window.open("http://localhost:3000/auth/google","_self")
    }
    return (
        
        <div className='relative flex justify-center  h-[100vh]'>
            <div className='absolute z-[-10] w-full flex justify-between top-0'>
                <img className='w-[340px] h-[320px]' src={loginImg1} alt="" />

            </div>

            {/* login div */}
            <div className='flex flex-col '>
                <h1 className='text-[50px]  font-bold text-center text-[#1F41A9] mt-16'>BLUE SPIRE</h1>
                <div className='w-[354px] h-[400px] flex flex-col gap-4'>

                    <h1 className='font-bold text-[40px] text-[#264ECA] text-center mt-14'>Login</h1>
                    <p className='w-full font-bold text-[16px] text-center text-[#264ECA]'>Please enter your Login and your Password</p>
                    <div className='w-full text-[#1976D2] p-2 border-[1px] border-blue-500 rounded-2xl'>
                        <input className='text-[#1976D2] text-[15px] font-bold' type="email" placeholder='Email' />

                    </div>
                    <div className='w-full p-2  border-[1px] border-blue-500 rounded-2xl'>
                        <input className='text-[#1976D2] text-[15px] font-bold' type="password" placeholder='Password' />

                    </div>
                    <h1 className='text-[#264ECA] text-[10px] flex justify-end mt-0'>Forgot Password ?</h1>

                    <button className='w-full p-2 border-2 border-[#1F41A9] rounded-2xl text-[#264ECA] font-bold text-[15px]'>Register</button>

                    <div className='border-2 rounded-[15px] bg-gray-600'>
                        <button className='w-full p-2 text-white font-bold text-[14px]' onClick={loginWithGoogle}>Or, sign-in with Google</button>
                    </div>
                    <Link to="/"> <p className='text-[#264ECA] text-center text-[14px] font-bold'>Not a member yet?  <span className='text-[#18A6C6]  text-[14px] italic'>Register!</span> </p></Link>
                </div>
            </div>


            <div className='absolute z-[-10] flex justify-between items-end bottom-0 w-full'>
                <img className='w-[228px] h-[228px] ' src={loginImg2} alt="" />
                <img className='w-[520px] h-[509px]' src={loginImg3} alt="" />
            </div>



        </div>
    )
}

export default Login