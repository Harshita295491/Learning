import React from 'react'
import { useState } from 'react';
// import { FaCalendarAlt, FaUser, FaChevronDown } from "react-icons/fa";
import { FaUserCircle, FaCalendarAlt, FaArrowDown, FaPlus } from 'react-icons/fa';

function MyAttendence() {

  return (


    <div className='w-full'>

      <div className="flex items-center justify-between p-4  rounded-lg ">
        <h1 className="text-lg font-semibold text-gray-800">My Attendance</h1>
        <div className="flex items-center space-x-4">
          {/* Name Dropdown */}
          <div className="flex items-center   rounded-2xl px-4 py-1 space-x-2 text-sm text-blue-600  bg-blue-100">
            {/* Profile Icon */}
            <FaUserCircle className="w-6 h-6 text-blue-600 " />
            <select className="bg-transparent outline-none">
              <option>A Vasanth Praveen</option>
            </select>
          </div>

          {/* Date Picker */}
          <button className="text-sm text-blue-600 bg-blue-100  rounded-2xl  px-4 py-1 flex items-center space-x-2">
            <FaCalendarAlt className="w-4 h-4 text-blue-600" /> {/* Calendar Icon */}
            <span>Date: 17 Oct 2024-23 Oct 2024</span>
          </button>


          <div className="flex items-center justify-center w-6 h-6 rounded-2xl  bg-blue-100">
            <FaArrowDown className="w-4 h-4 text-blue-600" />
          </div>
          {/* List Symbol Icon */}
          <div className="flex items-center justify-center w-6 h-6 rounded-2xl  bg-blue-100">
            <FaPlus className="text-blue-600" />
          </div>
        </div>
      </div>


      <div className="w-full p-5 rounded-lg ">
        <div className="w-[1000px] overflow-x-auto no-scrollbar overflow-autotable-fixed text-[12px] border-gray-300 text-start rounded-lg">
          {/* <div className="w-full border table-fixed text-[12px] border-gray-300 text-start rounded-lg"> */}

            <div className=" flex font-medium w-[3000px] overflow-x-auto no-scrollbar overflow-auto rounded-lg h-[10vh] border border-gray-300">
              <div className="w-[400px] px-2 py-2 text-center ">
                <p>Working Hours</p>
                <p>37 H : 30 M : 54 S</p>
              </div>
              <div className="w-[400px] px-2 py-2 text-center ">
                <p>Actual Working Time</p>
                <p>37 H : 30 M : 54 S</p>
              </div>
              <div className="w-[400px] px-2 py-2 text-center">
                <p>Tracked Hours</p>
                <p>00 H : 00 M : 00 S</p>
              </div>
              <div className="w-[400px] px-2 py-2 text-center ">
                <p>Time Difference</p>
                <p>01 H : 00 M : 00 S</p>
              </div>
              <div className="w-[400px] px-2 py-2 text-center ">
                <p>Clock In Days</p>
                <p>12</p>
              </div>
              <div className="w-[400px] px-2 py-2 text-center ">
                <p>Payroll Present Days</p>
                <p>20</p>
              </div>

              <div className="w-[400px] px-2 py-2 text-center ">
                <p>Absent</p>
                <p>9</p>
              </div>
              <div className="w-[400px] px-2 py-2 text-center ">
                <p>On-Leave</p>
                <p>4</p>
              </div>
              <div className="w-[400px] px-2 py-2 text-center ">
                <p>Late-In</p>
                <p>12</p>
              </div>
              <div className="w-[400px] px-2 py-2 text-center">
                <p>Early-Out</p>
                <p>20</p>
              </div>
              <div className="w-[400px] px-2 py-2 text-center ">
                <p>Paid Leave</p>
                <p>53</p>
              </div>
              <div className="w-[400px] px-2 py-2 text-center ">
                <p>UnPaid Leave</p>
                <p>28</p>
              </div>
              <div className="w-[400px] px-2 py-2 text-center">
                <p>OD/Hourly Remote Work</p>
                <p>00 H : 00 M</p>
              </div>
              <div className="w-[400px] px-2 py-2 text-center ">
                <p>Hourly Paid Leave</p>
                <p>00 H : 00 M</p>
              </div>
              <div className="w-[400px] px-2 py-2 text-center ">
                <p>Hourly UnPaid Leave</p>
                <p>00 H : 00 M</p>
              </div>
              <div className="w-[400px] px-2 py-2 text-center ">
                <p>Weekend</p>
                <p>28</p>
              </div>
              <div className="w-[400px] px-2 py-2 text-center ">
                <p>Weekend</p>
                <p>28</p>
              </div>
              <div className="w-[400px] px-2 py-2 text-center ">
                <p>Holiday</p>
                <p>28</p>
              </div>


            </div>


          </div>
        {/* </div> */}
      </div>








      <div className="w-full p-5 h-[100vh]">
        {/* <h1 className="text-[30px] font-medium mb-6">Job Information</h1> */}
        <div className="w-[1000px] overflow-x-auto no-scrollbar overflow-auto">
          <table className="w-full border table-fixed text-[12px] border-gray-300 text-start">
            <thead>
              <tr className="bg-[#B9B9B9] font-medium">
                <th className="w-[200px] px-2 py-2 text-start border border-gray-300">Date</th>
                <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Display Name</th>
                <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Day Status</th>
                <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Attendence Status</th>
                <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Attendence Action</th>
                <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Clock-IN</th>
                <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Clock-OUT</th>
                <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Total Time</th>
                <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Break Hours</th>
                <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Productive Hours</th>
                <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Extra Time</th>
                <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Shift</th>
                <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Job Title</th>
                <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Department</th>
                <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Clock OUT IP</th>
                <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Action</th>

              </tr>
            </thead>
            <tbody>
              <tr>

                <td className="w-[200px] px-2 py-3 border border-gray-300">Wed 23 Oct, 2024</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">Vasavi Patnaik</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300 ">no</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">On Going</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">8:30 AM</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">-</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">-</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">-</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">-</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">-</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">General Shift</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">Junior Software Engineer</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">27.52.4.222</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">-</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>

              </tr>
              <tr>

                <td className="w-[200px] px-2 py-3 border border-gray-300">Wed 23 Oct, 2024</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">Vasavi Patnaik</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">no</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">On Going</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">8:30 AM</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">-</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">-</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">-</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">-</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">-</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">General Shift</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">Junior Software Engineer</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">27.52.4.222</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300">-</td>
                <td className="w-[200px] px-2 py-3 border border-gray-300"></td>

              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MyAttendence;