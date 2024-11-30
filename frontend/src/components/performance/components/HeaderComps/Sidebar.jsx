import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-48 p-4 bg-gray-100 border-r">
      <ul>
        <li className="mb-4">Today</li>
        <li className="mb-4">Yesterday</li>
        <li className="mb-4">Last Month</li>
      </ul>

      <div className="mt-8">
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>days up to today</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
