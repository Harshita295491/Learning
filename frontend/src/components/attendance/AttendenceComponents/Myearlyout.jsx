import React from 'react';
import { FaUserCircle, FaCalendarAlt, FaArrowDown, FaPlus } from 'react-icons/fa';

function Myearlyout() {
  return (
    <div>



      <div className="flex items-center justify-between p-4  rounded-lg ">
        <h1 className="text-lg font-semibold text-gray-800">My Early Out</h1>
        <div className="flex items-center space-x-4">
          {/* Name Dropdown */}
          <div className="flex items-center border border-blue-600  rounded-lg px-4 py-1 space-x-2 text-sm text-blue-600  bg-blue-100">
            {/* Profile Icon */}
            <FaUserCircle className="w-6 h-6 text-blue-600 " />
            <select className="bg-transparent outline-none">
              <option>A Vasanth Praveen</option>
            </select>
          </div>

          {/* Date Picker */}
          <button className="text-sm text-blue-600 bg-blue-100  border border-blue-600 rounded-lg px-4 py-1 flex items-center space-x-2">
            <FaCalendarAlt className="w-4 h-4 text-blue-600" />
            <span>Date: 17 Oct 2024-23 Oct 2024</span>
          </button>


          <div className="flex items-center justify-center w-6 h-6 border border-blue-600 rounded  bg-blue-100">
            <FaArrowDown className="w-4 h-4 text-blue-600" />
          </div>

          <div className="flex flex-col items-center justify-center w-6 h-6 border border-blue-600 rounded  bg-blue-100">
            <FaPlus className="text-blue-600" />
          </div>
        </div>
      </div>





    </div>
  )
}

export default Myearlyout