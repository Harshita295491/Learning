import React from 'react'

function PersonalDocuments() {
  return (
    <div className="w-full p-5 h-[100vh]">

   
    <h1 className="text-[30px] font-medium mb-6">Documents</h1>

    <div className='flex justify-between'>
      <h1 className='text-lg'>Personal Documents</h1>
      <div className='px-10 py-2 bg-blue-500 rounded-lg'>
            <button className='text-white'>Add New</button>
          </div>
    </div>
   
    <div className="overflow-x-auto mt-8">
      <table className="min-w-full border text-[12px] border-gray-300 text-center">
        <thead>
          <tr className="bg-[#B9B9B9] font-medium ">
            <th className="px-4  py-2 border border-gray-300">Document Name</th>
            <th className="px-4 py-2 border border-gray-300">Number</th>
            <th className="px-4 py-2 border border-gray-300">Attachments</th>
            <th className="px-4 py-2 border border-gray-300">Expired On</th>
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

export default PersonalDocuments