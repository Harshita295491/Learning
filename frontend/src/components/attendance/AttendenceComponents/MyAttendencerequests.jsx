import React from 'react';
import { FaUserCircle, FaCalendarAlt, FaArrowDown, FaPlus, FaTimes, FaArrowRight } from 'react-icons/fa';

function MyAttendencerequests() {
  return (
    <div>
      <div>
        <h1 className="text-lg font-semibold text-gray-800">My Attendence Requests </h1>
      </div>
      <div className="flex items-center justify-between p-4  rounded-lg ">
        <h1 className="text-lg font-semibold text-gray-800">Total Time Requests </h1>
        <div className="flex items-center space-x-4">
          {/* Name Dropdown */}


          {/* Date Picker */}
          <button className="text-sm text-blue-600 bg-blue-100   rounded-2xl px-4 py-1 flex items-center space-x-2">
            <FaCalendarAlt className="w-4 h-4 text-blue-600" />
            <span>Date: 17 Oct 2024-23 Oct 2024</span>
          </button>

          <div className="flex items-center  rounded-2xl px-4 py-1 space-x-5 text-sm text-blue-600  bg-blue-100">
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
                <th className="w-[200px] px-2 py-2  border border-gray-300 text-center ">Date</th>
                <th className="w-[200px] px-2 py-3  border border-gray-300  text-center">Adjustment Type</th>
                <th className="w-[200px] px-2 py-3  border border-gray-300 text-center">IN</th>
                <th className="w-[200px] px-2 py-3  border border-gray-300 text-center">OUT</th>
                <th className="w-[200px] px-2 py-3  border border-gray-300 text-center">Reason</th>
                <th className="w-[200px] px-2 py-3 border border-gray-300 text-center">Requested on</th>
                <th className="w-[200px] px-2 py-3  border border-gray-300 text-center">Action By</th>
                <th className="w-[200px] px-2 py-3  border border-gray-300 text-center">Status</th>
                <th className="w-[200px] px-2 py-3  border border-gray-300 text-center">Action</th>

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

              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MyAttendencerequests;