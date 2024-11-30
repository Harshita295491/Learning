import React from 'react';
import { FaUserCircle, FaCalendarAlt, FaArrowDown, FaPlus } from 'react-icons/fa';

function MyLatein() {
  return (
    <div>
        <div className="flex items-center justify-between p-4  rounded-lg ">
        <h1 className="text-lg font-semibold text-gray-800">My Late In</h1>
        <div>
          <p>00 H : 00M</p>
          <p>Total Hours</p>
        </div>
        <div className="flex items-center space-x-4">
          
         
          {/* Date Picker */}
          <button className="text-sm text-blue-600 bg-blue-100 rounded-2xl px-4 py-1 flex items-center space-x-2">
            <FaCalendarAlt className="w-4 h-4 text-blue-600" />
            <span>Date: 17 Oct 2024-23 Oct 2024</span>
          </button>


         
        </div>
      </div>
      <div className="w-full p-5 h-[100vh]">
        {/* <h1 className="text-[30px] font-medium mb-6">Job Information</h1> */}
        <div className="w-full">
          <table className="border table-fixed text-[12px] border-gray-300 text-start">
            <thead>
              <tr className="bg-[#B9B9B9] font-medium">
                <th className="w-[200px] px-2 py-2 text-center border border-gray-300">Date</th>
                <th className="w-[200px] px-2 py-3 text-center border border-gray-300">Clock In Time</th>
                <th className="w-[200px] px-2 py-3 text-center border border-gray-300">Late In Time</th>
                <th className="w-[200px] px-2 py-3 text-center border border-gray-300">Penalty</th>
                <th className="w-[200px] px-2 py-3 text-center border border-gray-300">Late In Reason</th>
                <th className="w-[200px] px-2 py-3 text-center border border-gray-300">Action</th>

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
      </div></div>
  )
}

export default MyLatein;