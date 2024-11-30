import React from 'react'

function Internship() {
  return (
    <div className="w-full p-5 h-[100vh]">
    <h1 className="text-[30px] font-medium mb-6">Internship/Probation</h1>
    <div className="overflow-x-auto">
      <table className="min-w-full border text-[12px] border-gray-300 text-center">
        <thead>
          <tr className="bg-[#B9B9B9] font-medium ">
            <th className="px-4  py-2 border border-gray-300">Start Date</th>
            <th className="px-4 py-2 border border-gray-300">End date</th>
            <th className="px-4 py-2 border border-gray-300">Length</th>
            <th className="px-4 py-2 border border-gray-300">Reduce/Extended</th>
            <th className="px-4 py-2 border border-gray-300">Employment Status</th>
            <th className="px-4 py-2 border border-gray-300">Action</th>
          </tr>
          
        </thead>
        <tbody className='text-xs text-[#787878] font-medium'>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Mon 07 Oct, 2024</td>
            <td className="px-4 py-2 border border-gray-300">Mon 06 Jan, 2025</td>
            <td className="px-4 py-2 border border-gray-300">92 Days</td>
            <td className="px-4 py-2 border border-gray-300">-</td>
            <td className="px-4 py-2 border border-gray-300">Internship</td>
            <td className="px-4 py-2 border border-gray-300">***</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Internship