import React from 'react';

const UserDropdown = ({ selectedUser, setSelectedUser }) => {
  return (
    <div className="flex items-center">
      <img
        src="https://via.placeholder.com/24"
        alt="User Avatar"
        className="w-6 h-6 rounded-full mr-2"
      />
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
        className="border border-gray-300 p-2 rounded-md"
      >
        <option value="Sai Kiran Diddi">Sai Kiran Diddi</option>
        <option value="John Doe">John Doe</option>
        <option value="Jane Smith">Jane Smith</option>
      </select>
    </div>
  );
};

export default UserDropdown;
