
import React, { useState } from 'react';
import calender from "../../../../assets/calendar-date.svg"
import sms from "../../../../assets/sms.svg";
import phone from "../../../../assets/phone.svg";
import briefcase from "../../../../assets/briefcase-02.svg";
import { FaTimes } from 'react-icons/fa'; // Import cross icon from react-icons

function Previous() {
    const [joiningDate, setJoiningDate] = useState("2024-10-07");
    const [dob, setDob] = useState("2002-03-30");


    const handleDateChange = (setter) => (event) => {
        setter(event.target.value);
    };


    return (
        <div className='w-full h-[100vh]'>
           

            <div className='w-full px-16 py-8'>
                <div className='flex justify-between'>
                    <h1 className='text-[30px] font-medium'>Previous Employer </h1>


                    <div className='flex gap-2'>
                        <div className='px-10 py-2 bg-blue-500 rounded-lg'>
                            <button className='text-white'>Add New</button>
                        </div>
                        <div className='px-10 py-2 bg-blue-500 rounded-lg'>
                            <button className='text-white'>Edit</button>
                        </div>
                    </div>


                </div>

                <div className="max-w-7xl mx-auto mt-4">
                    <h1 className='text-[20px]'>Previous Employer 1</h1>
                    <form className="mt-6 grid grid-cols-3 gap-4">

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Company Name</label>
                            <input
                                type="text"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder='Address 1'
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Department</label>
                            <input
                                type="text"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder='Address 2' />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Job Title</label>
                            <input
                                type="text"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder='City'
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Start month/year</label>
                            <input
                                type="text"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder='Country' />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">End Month/Year</label>
                            <input
                                type="text"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder='State' />
                        </div>



                    </form>
                    <h1 className='text-[20px] mt-8'>Previous Employer 2</h1>
                    <form className="mt-6 grid grid-cols-3 gap-4">

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Company Name</label>
                            <input
                                type="text"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder='Enter Address 1'
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Department</label>
                            <input
                                type="text"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder='Enter Address 2' />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Job Title</label>
                            <input
                                type="text"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder='Enter City'
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Start month/year</label>
                            <input
                                type="text"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder='Enter Country' />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">End Month/Year</label>
                            <input
                                type="text"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder='Enter State' />
                        </div>



                    </form>
                </div>
            </div>
        </div>
    );
}

export default Previous
