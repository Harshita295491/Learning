import React from 'react'

function BankInformation() {
  return (
    <div className="w-full p-5 h-[100vh]">
    <h1 className="text-[30px] font-medium mb-6">Bank Information</h1>
    <div className="overflow-x-auto">
      <table className="min-w-full border text-[12px] border-gray-300 text-center">
        <thead>
          <tr className="bg-[#B9B9B9] font-medium ">
            <th className="px-4  py-2 border border-gray-300">Bank Name</th>
            <th className="px-4 py-2 border border-gray-300">Bank Branch</th>
            <th className="px-4 py-2 border border-gray-300">Account Number</th>
            <th className="px-4 py-2 border border-gray-300">Account Type</th>
            <th className="px-4 py-2 border border-gray-300">Attachment</th>
            <th className="px-4 py-2 border border-gray-300">Status</th>
            <th className="px-4 py-2 border border-gray-300">Action</th>

          </tr>
          
        </thead>
        <tbody className='text-xs text-[#787878] font-medium'>
         
         
        </tbody>
      </table>
      <div className='mt-8 flex items-center justify-center'>
      <h1 className='text-lg'>No data to display</h1>
      </div>
     
    </div>
  </div>
  )
}

export default BankInformation