import React from 'react';
import {  FaCalendarAlt,FaArrowRight, FaPlus, FaTimes } from 'react-icons/fa';

function MyodRemoteWork() {
  return (
    <div>
       <div>
        <h1 className="text-lg font-semibold text-gray-800">My OD & Remote Work </h1>
      </div>
        <div className="flex items-center justify-between p-4  rounded-lg ">
        <h1 className="text-lg font-semibold text-gray-800">Remote Work Request : 0</h1>
        <div className="flex items-center space-x-4">
          {/* Name Dropdown */}
          <div className="flex items-center border   rounded-2xl px-4 py-1 space-x-2 text-sm text-blue-600  bg-blue-100">
            {/* Profile Icon */}
            {/* <FaUserCircle className="w-6 h-6 text-blue-600 " /> */}
            <select className="bg-transparent outline-none">
              <option>Type Of Remote Work</option>
            </select>
          </div>

          {/* Date Picker */}
          <button className="text-sm text-blue-600 bg-blue-100   rounded-2xl px-4 py-1 flex items-center space-x-2">
            <FaCalendarAlt className="w-4 h-4 text-blue-600" />
            <span>Date: 17 Oct 2024-23 Oct 2024</span>
          </button>


          <div className="flex items-center   rounded-2xl px-4 py-1 space-x-5 text-sm text-blue-600  bg-blue-100">
            {/* Profile Icon */}
            <FaArrowRight className="w-4 h-4 text-blue-600 " />
            <select className="bg-transparent outline-none">
              <option>Pending</option>
            </select>
            <FaTimes className="w-4 h-4 text-blue-600 " />

          </div>

          <div className="flex flex-col items-center justify-center w-6 h-6  rounded-2xl  bg-blue-100">
            <FaPlus className="text-blue-600" />
          </div>
        </div>
      </div>
      <div className="w-full p-5 h-[100vh]">
        {/* <h1 className="text-[30px] font-medium mb-6">Job Information</h1> */}
        <div className="w-[1000px] overflow-x-auto no-scrollbar overflow-auto">
          <table className="w-full border table-fixed text-[12px] border-gray-300 text-start">
            <thead>
              <tr className="bg-[#B9B9B9] font-medium">
                <th className="w-[200px] px-2 py-2 text-center border border-gray-300">Employee Name</th>
                <th className="w-[200px] px-2 py-3 text-center border border-gray-300">Type</th>
                <th className="w-[200px] px-2 py-3 text-center border border-gray-300">From</th>
                <th className="w-[200px] px-2 py-3 text-center border border-gray-300">To</th>
                <th className="w-[200px] px-2 py-3 text-center border border-gray-300">No.Of days / hours</th>
                <th className="w-[200px] px-2 py-3 text-center border border-gray-300">Status</th>
                <th className="w-[200px] px-2 py-3 text-center border border-gray-300">Requested On</th>
                <th className="w-[200px] px-2 py-3 text-center border border-gray-300">Reason</th>
                <th className="w-[200px] px-2 py-3 text-center border border-gray-300">Action By</th>
                <th className="w-[200px] px-2 py-3 text-center border border-gray-300">Actions</th>


              </tr>
            </thead>
            <tbody>
              <tr>

                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300 "></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>


              </tr>
              <tr>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>

              </tr>

            </tbody>
          </table>
        </div>
      </div></div>
  )
}

export default MyodRemoteWork