import React, { useState } from 'react';
import Dashboard from './Dashboard';


const Header = () => {
  const [selectedOption, setSelectedOption] = useState(''); // State for dropdown value

  // Handle change of dropdown value
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex justify-around align-middle">
      {/* Dropdown label */}
      <h1>Sai Kiran Diddi</h1>
      <label htmlFor="dropdown" className="mb-2 text-gray-700 font-medium">
      </label>

        <div className='flex justify-end ml-64'>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
        className="p-2 border rounded-md bg-white shadow-md w-44 h-9"
      >
        <option value="">-- Choose an option --</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p className='text-3xl mx-2.5'>|</p>
      <Dashboard/>
      </div>
    </div>
  );
};

export default Header;
