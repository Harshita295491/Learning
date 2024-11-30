

import React, { useState } from 'react';
import calender from "../../../../assets/calendar-date.svg"
import sms from "../../../../assets/sms.svg";
import phone from "../../../../assets/phone.svg";
import briefcase from "../../../../assets/briefcase-02.svg";
import { FaTimes } from 'react-icons/fa'; // Import cross icon from react-icons

function Contact() {
  const [joiningDate, setJoiningDate] = useState("2024-10-07");
  const [dob, setDob] = useState("2002-03-30");


  const handleDateChange = (setter) => (event) => {
    setter(event.target.value);
  };




  return (
    <div className='w-full h-[100vh]'>
      

      <div className='w-full px-16 py-8'>
        <div className='flex justify-between'>
          <h1 className='text-[30px] font-medium'>Contact & Social Links </h1>


          <div className='px-10 py-2 bg-blue-500 rounded-lg'>
            <button className='text-white'>Edit</button>
          </div>


        </div>

        <div className="max-w-7xl mx-auto mt-4">
          <h1 className='text-[20px]'>Contact<span className='text-red-600'>*</span></h1>
          <form className="mt-6 grid grid-cols-2 gap-4">

            <div>
              <label className="block text-sm font-medium text-gray-700">Work Email<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Enter work email'
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Personal Email<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Enter Personal Email' />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile Number<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Enter Mobile Number'
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Landline<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Enter Landline Number' />
            </div>


          </form>


          <h1 className='text-[20px] mt-8'>Social Links<span className='text-red-600'>*</span></h1>
          <form className="mt-6 grid grid-cols-2 gap-4">

            <div>
              <label className="block text-sm font-medium text-gray-700">Linkedin<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Enter linkedin url'
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Instagram<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Enter instagram url' />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Github<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Enter Github url'
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Twitter<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Enter twitter url' />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Portfolio<span className='text-red-600'>*</span></label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Enter portfolio url' />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact
