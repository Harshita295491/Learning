
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Import cross icon from react-icons

function BasicInfo() {
    const [joiningDate, setJoiningDate] = useState("2024-10-07");
    const [dob, setDob] = useState("2002-03-30");
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [languageInput, setLanguageInput] = useState('');

    const handleDateChange = (setter) => (event) => {
        setter(event.target.value);
    };

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;

        // If a language is selected and not already in the list, update the state
        if (selectedLanguage && !selectedLanguages.includes(selectedLanguage)) {
            setSelectedLanguages((prev) => [...prev, selectedLanguage]);
        }

        // Reset the dropdown value..............................
        setLanguageInput("");
    };

    const handleLanguageRemove = (language) => {
        setSelectedLanguages((prev) => prev.filter((lang) => lang !== language));
    };



    return (
        <div className='w-full h-[100vh]'>
            <div className='w-full p-8'>
                <div className='flex justify-between'>
                    <h1 className='text-[30px] font-medium'>Basic Info</h1>
                    <div className='px-10 py-2 bg-blue-500 rounded-lg'>
                        <button className='text-white'>Edit</button>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-4">
                    <form className="grid grid-cols-3 gap-6">

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Company Name<span className='text-red-600'>*</span></label>
                            <select className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>BlueSpire</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Legal Entity Company Name<span className='text-red-600'>*</span></label>
                            <select className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>BlueSpire</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Employee ID<span className='text-red-600'>*</span></label>
                            <input
                                type="text"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value="0086"
                                readOnly // Mark as read-only if you want to prevent edits
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Joining Date<span className='text-red-600'>*</span></label>
                            <input
                                type="date"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={joiningDate}
                                onChange={handleDateChange(setJoiningDate)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Date of Birth<span className='text-red-600'>*</span></label>
                            <input
                                type="date"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={dob}
                                onChange={handleDateChange(setDob)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Place of Birth<span className='text-red-600'>*</span></label>
                            <input
                                type="text"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value="Gorakhpur"
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">First Name<span className='text-red-600'>*</span></label>
                            <input
                                type="text"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value="Priya"
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Middle Name</label>
                            <input
                                type="text"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Last Name<span className='text-red-600'>*</span></label>
                            <input
                                type="text"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value="Singh"
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Marital Status</label>
                            <select className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>Unmarried</option>
                                <option>Married</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Gender<span className='text-red-600'>*</span></label>
                            <select className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>Female</option>
                                <option>Male</option>
                                <option>Others</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Blood Group<span className='text-red-600'>*</span></label>
                            <input
                                type="text"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className="block text-sm font-medium text-gray-700">Nationality</label>
                            <input
                                type="text"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value="Indian"
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Place of Birth</label>
                            <select className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>Parvathipuram</option>
                            </select>
                        </div>

                       <div>
                            <label className="block text-sm font-medium text-gray-700">Known Languages<span className='text-red-600'>*</span></label>
                            <div className="flex flex-col gap-2">
                                <select
                                    className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={languageInput}
                                    onChange={handleLanguageChange}
                                >
                                    <option value="">Select Language</option>
                                    <option value="English">English</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="Telugu">Telugu</option>
                                    <option value="Bengali">Bengali</option>
                                    <option value="Tamil">Tamil</option>
                                </select>
                                {languageInput && (
                                    <div className="flex items-center mt-1">
                                        <FaCheck className="text-green-500 mr-2" /> {/* Tick icon */}
                                        <span>{languageInput}</span>
                                    </div>
                                )}
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {selectedLanguages.map((language, index) => (
                                        <span key={index} className="flex items-center bg-gray-200 px-2 py-1 rounded-full">
                                            {language}
                                            <FaTimes
                                                className="ml-2 cursor-pointer"
                                                onClick={() => handleLanguageRemove(language)}
                                            />
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </form>

                    <button className='bg-green-700 py-4 px-6'>Save</button>
                </div>
            </div>
        </div>
    );
}

export default BasicInfo


