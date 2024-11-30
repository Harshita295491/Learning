import React from 'react';
import { FaUserCircle, FaCalendarAlt, FaArrowDown, FaPlus, FaInfoCircle } from 'react-icons/fa';


function MyStatusReport() {
  return (
    <div>
      <div className="flex items-center justify-evenly p-4  rounded-lg ">
        <h1 className="text-lg font-semibold text-gray-800">My Status Report</h1>
        <div className='text-sm text-white bg-green-700  border  rounded-2xl px-4 py-1 flex items-center space-x-2'>
        <FaInfoCircle className="w-6 h-6 " />

            <p>Summary</p>
          </div>
        <div className="flex items-center space-x-4">
          {/* Name Dropdown */}
          <div className="flex items-center border   rounded-2xl px-4 py-1 space-x-2 text-sm text-blue-600  bg-blue-100">
            {/* Profile Icon */}
            <FaUserCircle className="w-6 h-6 text-blue-600 " />
            <select className="bg-transparent outline-none">
              <option>A Vasanth Praveen</option>
            </select>
          </div>

          {/* Date Picker */}
          <button className="text-sm text-blue-600 bg-blue-100    rounded-2xl px-4 py-1 flex items-center space-x-2">
            <FaCalendarAlt className="w-4 h-4 text-blue-600" />
            <span>Date: 17 Oct 2024-23 Oct 2024</span>
          </button>


          <div className="flex items-center justify-center w-6 h-6   rounded-2xl  bg-blue-100">
            <FaArrowDown className="w-4 h-4 text-blue-600" />
          </div>

          <div className='text-sm text-blue-600 bg-blue-100   rounded-2xl px-4 py-1 flex items-center space-x-2'>
            <FaPlus className="text-blue-600" />
            <p>Add Work Log</p>
          </div>
        </div>
      </div>
      <div className="w-full p-5 h-[100vh]">
        {/* <h1 className="text-[30px] font-medium mb-6">Job Information</h1> */}
        <div className="w-full">
          <table className="border table-fixed text-[12px] border-gray-300 text-start">
            <thead>
              <tr className="bg-[#B9B9B9] font-medium">
                <th className="w-[200px] px-2 py-2 text-center border border-gray-300">Project</th>
                <th className="w-[200px] px-2 py-3 text-center border border-gray-300">Task/Ticket</th>
                <th className="w-[200px] px-2 py-3 text-center border border-gray-300">Activity</th>
                <th className="w-[200px] px-2 py-3 text-center border border-gray-300">Start</th>
                <th className="w-[200px] px-2 py-3 text-center border border-gray-300">End</th>
                <th className="w-[200px] px-2 py-3 text-center border border-gray-300">Total Hours</th>

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


              </tr>
              <tr>

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
      </div>
    </div>
  )
}

export default MyStatusReport