import React from 'react'
import NoDataFound from "../../../../assets/noDataFound.svg"
function EmployeeResignation() {
  return (
    <div className="w-full p-5 h-[100vh]">
      <h1 className="text-[30px] font-medium mb-6">Employee Resignation</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border text-[12px] border-gray-300 text-center">
          <thead>
            <tr className="bg-[#B9B9B9] font-medium ">
              <th className="px-4  py-2 border border-gray-300">Resignation Type</th>
              <th className="px-4 py-2 border border-gray-300">Reason</th>
              <th className="px-4 py-2 border border-gray-300">Notice Given On</th>
              <th className="px-4 py-2 border border-gray-300">Last Working Day</th>
              <th className="px-4 py-2 border border-gray-300">Note</th>
              <th className="px-4 py-2 border border-gray-300">Revoke Reason</th>
              <th className="px-4 py-2 border border-gray-300">Notice period (In Days)</th>
              <th className="px-4 py-2 border border-gray-300">Remark</th>
              <th className="px-4 py-2 border border-gray-300">Revoked on</th>
              <th className="px-4 py-2 border border-gray-300">Status</th>
              <th className="px-4 py-2 border border-gray-300">Note</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
            
          </thead>
          <tbody>
           
          </tbody>

         
        </table>
        <div className='relative mt-16 w-full flex flex-col justify-center items-center'>
        <p className='mt-8 font-semibold text-[24px] absolute top-[-35px]'>No Data To Display</p> 
        <img className='relative' src={NoDataFound} alt="" />
         
    
        </div>
       
      </div>
    </div>
  );
}

export default EmployeeResignation