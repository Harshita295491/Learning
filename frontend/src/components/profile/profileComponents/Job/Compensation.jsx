import React from 'react'

function Compensation() {
  return (
    <div className="w-full p-5 h-[100vh]">
      <h1 className="text-[30px] font-medium mb-6">Compensation</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border text-[12px] border-gray-300 text-center">
          <thead>
            <tr className="bg-[#B9B9B9] font-medium ">
              <th className="px-4  py-2 border border-gray-300">Start Date</th>
              <th className="px-4 py-2 border border-gray-300">End date</th>
              <th className="px-4 py-2 border border-gray-300">Previous Salary</th>
              <th className="px-4 py-2 border border-gray-300">Increment %</th>
              <th className="px-4 py-2 border border-gray-300">new Salary</th>
              <th className="px-4 py-2 border border-gray-300">Pay Frequency</th>
              <th className="px-4 py-2 border border-gray-300">Notice period (In Days)</th>
              <th className="px-4 py-2 border border-gray-300">Notify period (In Days)</th>
              <th className="px-4 py-2 border border-gray-300">Monthly Bonus</th>
              <th className="px-4 py-2 border border-gray-300">Salary Mode</th>
              <th className="px-4 py-2 border border-gray-300">Note</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
            
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Mon 05 Nov, 2024</td>
              <td className="px-4 py-2 border border-gray-300">N/A</td>
              <td className="px-4 py-2 border border-gray-300">*****</td>
              <td className="px-4 py-2 border border-gray-300">**</td>
              <td className="px-4 py-2 border border-gray-300">****</td>
              <td className="px-4 py-2 border border-gray-300">Monthly</td>
              <td className="px-4 py-2 border border-gray-300">-</td>
              <td className="px-4 py-2 border border-gray-300">-</td>
              <td className="px-4 py-2 border border-gray-300">****</td>
              <td className="px-4 py-2 border border-gray-300">Bank</td>
              <td className="px-4 py-2 border border-gray-300 text-green-500">--</td>
              <td className="px-4 py-2 border border-gray-300">-</td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Compensation