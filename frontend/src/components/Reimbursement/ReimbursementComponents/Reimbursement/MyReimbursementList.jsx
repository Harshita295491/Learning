import React, { useState, useEffect } from "react";
import DownloadIcon from "../../../../assets/R_Download_Logo.svg";
import DownloadSmallIcon from "../../../../assets/R_download.svg";
import UploadIcon from "../../../../assets/R_Upload.svg";
import AddIcon from "../../../../assets/R_Add.svg";

function MyReimbursementList() {
  const [reimbursements, setReimbursements] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Sample data can be added here if needed
    setReimbursements([]);
  }, []);

  return (
    <div className="reimbursement-list">
      <div className="header flex justify-between p-4 bg-gray-100 rounded-md">
           <div>
             <div className="total-reimbursements text-blue-500 font-semibold">
              Reimbursement ({reimbursements.length})
            </div>
            </div>
            <div className="flex ">
            <div className="reimbursement-stats flex space-x-4">
              <div className="text-green-600">
                Total Amount: ${reimbursements.reduce((total, reimbursement) => total + reimbursement.amount, 0)}
              </div>
              <div className="text-blue-600">
                Approved: {reimbursements.filter(r => r.status === 'Approved').length}
              </div>
              <div className="text-yellow-600">
                Pending: {reimbursements.filter(r => r.status === 'Pending').length}
              </div>
              <div className="text-red-600">
                Rejected: {reimbursements.filter(r => r.status === 'Rejected').length}
              </div>
              {/* <button className="text-white bg-blue-700 hover:bg-blue-800 font-bold py-1 px-3 rounded">
                Download Report
              </button> */}

              <div>
                <img src={DownloadIcon} alt="" />
              </div>
            </div>
          </div>
          </div>

      {/* Filter Section */}
      
      <div className="flex gap-1">
      <select className="border px-2 py-1 rounded">
  <option value="" disabled selected>Status</option>
  <option>Approved</option>
  <option>Pending</option>
  <option>Rejected</option>
  <option>Cancelled</option>
</select>

<select className="border px-2 py-1 rounded">
  <option value="" disabled selected>Location</option>
  <option>New York</option>
  <option>Los Angeles</option>
</select>

<select className="border px-2 py-1 rounded">
  <option value="" disabled selected>Sub Location</option>
  <option>X</option>
  <option>Y</option>
  <option>Z</option>
</select>

<select className="border px-2 py-1 rounded">
  <option value="" disabled selected>Expense Type</option>
  <option>Business Expenses</option>
  <option>Travel Expenses</option>
  <option>Food Expenses</option>
  <option>Fuel Expenses</option>
  <option>Healthcare Expenses</option>
</select>

<select className="border px-2 py-1 rounded">
  <option value="" disabled selected>Payment Type</option>
  <option>Online</option>
  <option>Offline</option>
</select>

        
        <input 
          type="text" 
          placeholder="All Users" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="border px-2 py-1 rounded w-1/4"
        />

        
              <div>
                <img src={DownloadSmallIcon} alt="" />
              </div>
              
              <div>
                <img src={UploadIcon} alt="" />
              </div>
              
              <div>
                <img src={AddIcon} alt="" />
              </div>

        </div>
      

      {/* Scrollable Table Wrapper */}
      <div className="w-full p-5 h-[100vh]">
      {/* <h1 className="text-[30px] font-medium mb-6">Job Information</h1> */}
      <div className="w-[1000px] overflow-x-auto no-scrollbar overflow-auto">
  <table className="w-full border table-fixed text-[12px] border-gray-300 text-start">
    <thead>
      <tr className="bg-[#B9B9B9] font-medium">
        <th className="w-[200px] px-2 py-2 text-start border border-gray-300">Reimbursement Id</th>
        <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Employee Name</th>
        <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Expense Type</th>
        <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Payment Type</th>
        <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Paid Mode</th>
        <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Location</th>
        <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Billing Date</th>
        <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Bill Number</th>
        <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Requested Amount</th>
        <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Approved Amount</th>
        <th className="w-[200px] px-2 py-3 text-start border border-gray-300">GST Amount</th>
        <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Description</th>
        <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Attachment</th>
        <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Status</th>
        <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Created On</th>
        <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Comment</th>
        <th className="w-[200px] px-2 py-3 text-start border border-gray-300">Action By</th>
      </tr>
    </thead>
    <tbody>  
      <tr>
       
         <td className="w-[200px] px-2 py-3 border border-gray-300">R12345</td>
         <td className="w-[200px] px-2 py-3 border border-gray-300">John Doe</td>
         <td className="w-[200px] px-2 py-3 border border-gray-300">Travel</td>
         <td className="w-[200px] px-2 py-3 border border-gray-300">Reimbursement</td>
         <td className="w-[200px] px-2 py-3 border border-gray-300">Bank Transfer</td>
         <td className="w-[200px] px-2 py-3 border border-gray-300">New York</td>
         <td className="w-[200px] px-2 py-3 border border-gray-300">2024-10-15</td>
         <td className="w-[200px] px-2 py-3 border border-gray-300">B12345</td>
         <td className="w-[200px] px-2 py-3 border border-gray-300">$500</td>
         <td className="w-[200px] px-2 py-3 border border-gray-300">$450</td>
         <td className="w-[200px] px-2 py-3 border border-gray-300">$50</td>
         <td className="w-[200px] px-2 py-3 border border-gray-300">Business Trip to NY</td>
         <td className="w-[200px] px-2 py-3 border border-gray-300">Receipt.pdf</td>
         <td className="w-[200px] px-2 py-3 border border-gray-300">Approved</td>
         <td className="w-[200px] px-2 py-3 border border-gray-300">2024-10-17</td>
         <td className="w-[200px] px-2 py-3 border border-gray-300">N/A</td>
         <td className="w-[200px] px-2 py-3 border border-gray-300">Manager A</td>
  </tr>
  <tr>
     <td className="w-[200px] px-2 py-3 border border-gray-300">R12346</td>
     <td className="w-[200px] px-2 py-3 border border-gray-300">Jane Smith</td>
     <td className="w-[200px] px-2 py-3 border border-gray-300">Accommodation</td>
     <td className="w-[200px] px-2 py-3 border border-gray-300">Reimbursement</td>
     <td className="w-[200px] px-2 py-3 border border-gray-300">Credit Card</td>
     <td className="w-[200px] px-2 py-3 border border-gray-300">Los Angeles</td>
     <td className="w-[200px] px-2 py-3 border border-gray-300">2024-10-20</td>
     <td className="w-[200px] px-2 py-3 border border-gray-300">A12346</td>
     <td className="w-[200px] px-2 py-3 border border-gray-300">$300</td>
     <td className="w-[200px] px-2 py-3 border border-gray-300">$300</td>
     <td className="w-[200px] px-2 py-3 border border-gray-300">$0</td>
     <td className="w-[200px] px-2 py-3 border border-gray-300">Hotel Stay</td>
     <td className="w-[200px] px-2 py-3 border border-gray-300">HotelReceipt.pdf</td>
     <td className="w-[200px] px-2 py-3 border border-gray-300">Pending</td>
     <td className="w-[200px] px-2 py-3 border border-gray-300">2024-10-21</td>
     <td className="w-[200px] px-2 py-3 border border-gray-300">Waiting for manager approval</td>
     <td className="w-[200px] px-2 py-3 border border-gray-300">Manager B</td>
  </tr>
    </tbody>
  </table>
</div>
</div>
</div>
)
};
export default MyReimbursementList;
