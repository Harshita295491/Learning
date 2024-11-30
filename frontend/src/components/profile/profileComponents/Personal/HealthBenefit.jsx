
import React, { useState } from 'react';
import calender from "../../../../assets/calendar-date.svg"
import sms from "../../../../assets/sms.svg";
import phone from "../../../../assets/phone.svg";
import briefcase from "../../../../assets/briefcase-02.svg";
import { FaTimes } from 'react-icons/fa'; // Import cross icon from react-icons

function HealthBenefit(){
    // State to hold the uploaded file and its preview URL
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
  
    // Function to handle file selection
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file)); // Create a preview URL for the image
      }
    };
  
    return (
      <div className='w-full h-[100vh]'>
        

            <div className='w-full px-16 py-8'>
{/* Header */}
<div className="flex justify-between items-center mb-4">
          <h1 className="text-[30px] font-medium">Health Benefit</h1>
          <div className='px-10 py-2 bg-blue-500 rounded-lg'>
              <button className='text-white'>Add New</button>
            </div>
        </div>
  
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Insurance Type</th>
                <th className="p-2 border">Insurance Number</th>
                <th className="p-2 border">Insurance Image</th>
                <th className="p-2 border">Expired On</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Add rows dynamically here */}
            </tbody>
          </table>
        </div>
  
        {/* Add Insurance Form */}
        <div className="mt-8 p-6 border rounded-lg shadow-md bg-white">
          <h2 className="text-xl font-semibold mb-4">Add Insurance</h2>
  
          <form className="space-y-4">
            {/* Insurance Type and Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium" htmlFor="insuranceType">
                  Insurance Type<span className="text-red-500">*</span>
                </label>
                <select
                  id="insuranceType"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Type</option>
                  {/* Add other options here */}
                </select>
              </div>
  
              <div>
                <label className="block mb-2 font-medium" htmlFor="insuranceNumber">
                  Insurance Number<span className="text-red-500">*</span>
                </label>
                <input
                  id="insuranceNumber"
                  type="text"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Insurance Number"
                />
              </div>
            </div>
  
            {/* Attachment */}
            <div>
              <label className="block mb-2 font-medium" htmlFor="attachment">
                Attachment<span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded p-4 flex items-center space-x-4">
                <input
                  id="attachment"
                  type="file"
                  className="hidden"
                  accept="image/*" // Only accept image files
                  onChange={handleFileChange}
                />
                <label htmlFor="attachment" className="cursor-pointer">
                  <div className="border rounded p-2 bg-gray-200 inline-block">
                    📎
                  </div>
                </label>
  
                {/* Display the file preview */}
                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="h-16 w-16 object-cover rounded"
                  />
                )}
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Document should be up to 3MB size only. Supported file formats: JPG, JPEG, PNG.
              </div>
            </div>
          </form>
        </div>
            </div>
        
      </div>
    );
  };

  export default HealthBenefit
