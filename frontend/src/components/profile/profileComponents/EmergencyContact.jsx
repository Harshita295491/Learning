import React, { useState } from 'react';
import calender from "../../../assets/calendar-date.svg"
import sms from "../../../assets/sms.svg";
import phone from "../../../assets/phone.svg";
import briefcase from "../../../assets/briefcase-02.svg";
import { FaTimes } from 'react-icons/fa'; // Import cross icon from react-icons


function EmergencyContact() {
  return (
    <div className='w-full h-full'>
     

      <div className='w-full px-16 py-8 h-full'>
        <div className='flex justify-between'>
          <h1 className='text-[30px] font-medium'>Emergency Contact </h1>
        </div>

        <div className="max-w-7xl mx-auto mt-4">
          <form className="mt-6 grid grid-cols-3 gap-4">
            
              <div>
                <label className="block text-sm font-medium text-gray-700">Relationship</label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder='relationship'
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder='Name' />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder='number'
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Occupation</label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder='Occupation' />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Home/Landline</label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder='Home/Landline' />
              </div>
          
          </form>



          <div>
            <h1 className='text-[20px] mt-8'>Current Address</h1>
            <form className="mt-6 grid grid-cols-3 gap-4">

              <div>
                <label className="block text-sm font-medium text-gray-700">Address 1</label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder='Enter Address 1 '
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Address 2</label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder='Enter Address 2 '
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder='Enter City' />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder='Enter Country'
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder='Enter State' />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Pincode</label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder='Enter Pincode' />
              </div>

            </form>
          </div>



       
            <div className='flex gap-4'>
              <h1 className='text-[20px] mt-8'>Current Address</h1>


              <h1 className='text-[20px] mt-8'>Same as Current Address</h1>
            </div>
         

            <form className="mt-6 grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Address 1</label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Enter current Address '
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Enter City' />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Enter Country'
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">State</label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Enter State' />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Pincode</label>
              <input
                type="text"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Enter Pincode' />
            </div>
          </form>
        </div>






      </div>
    </div >

  )
}

export default EmergencyContact