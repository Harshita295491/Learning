
import React, { useState, useEffect } from 'react';
import AttachmentIcon from "../../../../assets/R_Attachment.svg";
import DownloadIcon from "../../../../assets/R_Download_Logo.svg";

function ReimbursementRequest() {
  const [isExpanded, setIsExpanded] = useState(false);
  // const [showReimbursementList, setShowReimbursementList] = useState(false);
  const [reimbursements, setReimbursements] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);


    const [joiningDate, setJoiningDate] = useState("2024-10-07");
    const [dob, setDob] = useState("2002-03-30");
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    // const [languageInput, setLanguageInput] = useState('');

    const handleDateChange = (setter) => (event) => {
        setter(event.target.value);
    };

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/reimbursements');
        const data = await response.json();
        setReimbursements(data);
      } catch (error) {
        console.error('Error fetching reimbursements:', error);
      }
    };

    fetchData();
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

 

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative">
      
        <div className="reimbursement-list">
        <div className="header flex justify-between  p-4 bg-gray-100 rounded-md">
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

          
<div>
        <div className='w-full h-[100vh]'>
            <div className='w-full p-8'>
                

                <div className="max-w-7xl mx-auto mt-4">
                    <form className="grid grid-cols-3 gap-6">

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Type<span className='text-red-600'>*</span></label>
                            <select className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="" disabled selected>Select Expense Type</option>
                                <option>Business Expenses</option>
                                <option>Travel Expenses</option>
                                <option>Food Expenses</option>
                                <option>Fuel Expenses</option>
                                <option>Healthcare Expenses</option>                        
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Billing Date<span className='text-red-600'>*</span></label>
                            <input
                                type="date"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={joiningDate}
                                onChange={handleDateChange(setJoiningDate)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Location</label>
                            <select className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="" disabled selected>Select Location</option>
                                <option>United States</option>
                                <option>Hyderabad</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Bill Number</label>
                            <input
                                type="text"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                // value="Enter the Bill Number"
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Amount<span className='text-red-600'>*</span></label>
                            <input
                                type="number"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">GST Amount<span className='text-red-600'>*</span></label>
                            <input
                                type="Number"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                // placeholder="Enter the GST Amount"
                                // readOnly
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Payment Mode<span className='text-red-600'>*</span></label>
                            
                              <select className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="" disabled selected>Select Payment Mode</option>
                                <option>Online</option>
                                <option>Offline</option>
                                readOnly
                            </select>
                        </div>        
                            

                      

                

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Paid Mode</label>
                            <select className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="" disabled selected>Select Paid Mode</option>
                                <option>Inside Payroll</option>
                                <option>Outside Payroll</option>
                            </select>
                        </div>

                        <br />
                        <br />

                        <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="attachment">
                Attachment(Only PNG,PDF,JPG formats are allowed)<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-4">
                <input
                  id="attachment"
                  type="file"
                  className="hidden"
                  // accept="image/*" // Only accept image files
                  // onChange={handleFileChange}
                />
                <label htmlFor="attachment" className="cursor-pointer">
                  <div className>
                    <img src={AttachmentIcon} alt="" />
                  </div>
                </label>
  
                
               
              </div>
              
            </div>

    

                    </form>
                    <br />
                    <br />
                  <div class="flex  gap-10 justify-end">
                    <button className='border-2 bg-A1A1A1 py-3 px-6 text-xs text-white-500'>Cancel</button>
                    <button className='border-2 bg-blue-700 py-3 px-6 text-xs text-white-500'>Save & New</button>
                    <button className='border-2 bg-[#38CB2B] bg-green-700 py-3 px-6 text-xs text-white-500'>Save</button>
                  </div>  
                </div>
                </div>
             </div>
    
  
            </div>            
              
            

           <div className="pagination flex justify-center my-4">
            {/* Implement pagination controls */}
          </div>
        </div>
      
    </div>
  );

}
export default ReimbursementRequest;

