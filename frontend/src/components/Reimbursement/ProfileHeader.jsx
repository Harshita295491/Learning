<div className='bg-gradient-to-r from-[#a3c4f1] to-[#f5e9d0] p-4 w-full h-[62px] flex items-center justify-around text-[12px] text-black  gap-10'>
<div className='flex gap-1 items-center'>
    <img src={sms} alt="" />
    <a href="mailto:vasavi.patnaik@thebluespire.com">vasavi.patnaik@thebluespire.com</a>
</div>
<div className='flex gap-1 items-center'>
    <img src={phone} alt="" />
    <p>91-9550264485</p>
</div>
<div className='flex gap-1 items-center'>
    <img src={calender} alt="" />
    <p>15 Days</p>
</div>
<div className='flex gap-1 items-center'>
    <img src={briefcase} alt="" />
    <p>Mon 07 Oct, 2024</p>
</div>
<div className='flex flex-col gap-1'>
    <p>Chandramouli Mettapalli</p>
    <p>0015</p>
</div>
<div className='flex flex-col gap-1 '>
    <p>Tejaswi Peesapati</p>
    <p>0002</p>
</div>
</div>


// return (
  //   <div className="relative p-4">
  //     {/* <button
  //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
  //       onClick={handleReimbursementListClick}
  //     >
  //       My Reimbursement List
  //     </button> */}

     
  //       <div className="reimbursement-list">
  //         <div className="header flex space-x-4 p-4 bg-gray-100 rounded-md">
  //           <div className="total-reimbursements text-blue-500 font-semibold">
  //             Reimbursement ({reimbursements.length})
  //           </div>
  //           <div className="reimbursement-stats flex space-x-4">
  //             <div className="text-green-600">
  //               Total Amount: ₹{totalAmount.toFixed(2)}
  //             </div>
  //             <div className="text-blue-600">
  //               Approved: {approvedCount}
  //             </div>
  //             <div className="text-yellow-600">
  //               Pending: {pendingCount}
  //             </div>
  //             <div className="text-red-600">
  //               Rejected: {rejectedCount}
  //             </div>
  //             <button className="text-white bg-blue-700 hover:bg-blue-800 font-bold py-1 px-3 rounded">
  //               Download Report
  //             </button>
  //           </div>
  //         </div>

  //         <div className="filters my-4">
  //           <input 
  //             type="text" 
  //             placeholder="Search by employee name" 
  //             value={searchTerm} 
  //             onChange={handleSearch} 
  //             className="border px-3 py-2 rounded"
  //           />
  //         </div>

  //         <table className="reimbursement-table w-full border-collapse mt-4">
  //           <thead>
  //             <tr className="bg-gray-200 font-medium">
  //              <th className="px-4 py-2 border border-gray-300">Reimbursement ID</th>
  //              <th className="px-4 py-2 border border-gray-300">Employee Name</th>
  //              <th className="px-4 py-2 border border-gray-300">Expense Type</th>
  //              <th className="px-4 py-2 border border-gray-300">Payment Type</th>
  //              <th className="px-4 py-2 border border-gray-300">Paid Mode</th>
  //              <th className="px-4 py-2 border border-gray-300">Location</th>
  //              <th className="px-4 py-2 border border-gray-300">Billing Date</th>
  //              <th className="px-4 py-2 border border-gray-300">Bill Number</th>
  //              <th className="px-4 py-2 border border-gray-300">Requested Amount</th>
  //              <th className="px-4 py-2 border border-gray-300">Bill Number</th>
  //              <th className="px-4 py-2 border border-gray-300">Approved Amount</th>
  //              <th className="px-4 py-2 border border-gray-300">GST Amount</th>
  //              <th className="px-4 py-2 border border-gray-300">Description</th>
  //              <th className="px-4 py-2 border border-gray-300">Attchment</th>
  //              <th className="px-4 py-2 border border-gray-300">Status</th>
  //              <th className="px-4 py-2 border border-gray-300">Created On</th>
  //              <th className="px-4 py-2 border border-gray-300">Last Approval</th>
  //              <th className="px-4 py-2 border border-gray-300">Next Approval</th>
  //              <th className="px-4 py-2 border border-gray-300">Comment</th>
  //              <th className="px-4 py-2 border border-gray-300">Action By</th>
  //              <th className="px-4 py-2 border border-gray-300">Actions</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {reimbursements
  //               .filter((r) =>
  //                 r.employeeName.toLowerCase().includes(searchTerm.toLowerCase())
  //               )
  //               .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  //               .map((reimbursement) => (
  //                 <tr key={reimbursement.id} className="hover:bg-gray-100">
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.id}</td>
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.employeeName}</td>
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.expensetype}</td>
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.paymenttype}</td>
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.paidmode}</td>
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.Location}</td>
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.billingdate}</td>
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.billnumber}</td>
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.requestedamount}</td>
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.billnumber}</td>
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.approvedamount}</td>
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.gstamount}</td>
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.description}</td>
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.attchment}</td>
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.status}</td>
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.createdon}</td>
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.lastapproval}</td>
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.nextapproval}</td>
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.comment}</td>
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.actionby}</td>
  //                   <td className="px-4 py-2 border border-gray-300">{reimbursement.actions}</td>
                    
  //                 </tr>
  //               ))}
  //           </tbody>
  //         </table>

  //         {/* Pagination can be added here if needed */}
          
  //       </div>
      
  //   </div>
  // );