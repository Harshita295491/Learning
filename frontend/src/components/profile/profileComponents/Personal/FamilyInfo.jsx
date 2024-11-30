
import React, { useState } from 'react';
import calender from "../../../../assets/calendar-date.svg"
import sms from "../../../../assets/sms.svg";
import phone from "../../../../assets/phone.svg";
import briefcase from "../../../../assets/briefcase-02.svg";
import { FaTimes } from 'react-icons/fa'; // Import cross icon from react-icons

function FamilyInfo() {
  const [joiningDate, setJoiningDate] = useState("2024-10-07");
  const [dob, setDob] = useState("2002-03-30");
  const [familyForms, setFamilyForms] = useState([{ id: 1 }]);

  const handleDateChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleAddNew = () => {
    if (familyForms.length < 2) {
      setFamilyForms([...familyForms, { id: familyForms.length + 1 }]);
    }
  };

  return (
    <div className='w-full h-[100vh]'>
      

      <div className='w-full px-16 py-8'>
        <div className='flex justify-between'>
          <h1 className='text-[30px] font-medium'>Family Information</h1>
          <div className='flex gap-2'>
            <div className='px-10 py-2 bg-blue-500 rounded-lg'>
              <button className='text-white' onClick={handleAddNew}>Add New</button>
            </div>
            <div className='px-10 py-2 bg-blue-500 rounded-lg'>
              <button className='text-white'>Edit</button>
            </div>
          </div>
        </div>

        {/* Loop through each family form */}
        {familyForms.map((form, index) => (
          <div key={form.id} className="max-w-7xl mx-auto mt-8">
            <h1 className='text-[20px]'>Family Information {index + 1}<span className='text-red-600'>*</span></h1>
            <form className="mt-6 grid grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Relationship<span className='text-red-600'>*</span></label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder='Enter Relationship'
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name<span className='text-red-600'>*</span></label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder='Enter Name'
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth<span className='text-red-600'>*</span></label>
                <input
                  type="date"
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={joiningDate}
                  onChange={handleDateChange(setJoiningDate)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Occupation<span className='text-red-600'>*</span></label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder='Enter Occupation'
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact<span className='text-red-600'>*</span></label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder='Enter Contact'
                />
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FamilyInfo
