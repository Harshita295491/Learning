import React from 'react'

function MyAssets() {
  return (
    <div className="w-full p-5 h-[100vh]">
      <h1 className="text-[30px] font-medium mb-6">My Assets</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border text-[12px] border-gray-300 text-center">
          <thead>
            <tr className="bg-[#B9B9B9] font-medium ">
              <th className="px-4  py-2 border border-gray-300">Asset ID</th>
              <th className="px-4 py-2 border border-gray-300">Asset Name</th>
              <th className="px-4 py-2 border border-gray-300">category</th>
              <th className="px-4 py-2 border border-gray-300">Serial Number</th>
              <th className="px-4 py-2 border border-gray-300">Condition</th>
              <th className="px-4 py-2 border border-gray-300">Action By</th>
            </tr>

          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-4 border border-gray-300"></td>
              <td className="px-4 py-2 border border-gray-300"></td>
              <td className="px-4 py-2 border border-gray-300"></td>
              <td className="px-4 py-2 border border-gray-300"></td>
              <td className="px-4 py-2 border border-gray-300"></td>
              <td className="px-4 py-2 border border-gray-300"></td>
            </tr>
            <tr>
              <td className="px-4 py-4 border border-gray-300"></td>
              <td className="px-4 py-2 border border-gray-300"></td>
              <td className="px-4 py-2 border border-gray-300"></td>
              <td className="px-4 py-2 border border-gray-300"></td>
              <td className="px-4 py-2 border border-gray-300"></td>
              <td className="px-4 py-2 border border-gray-300"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyAssets