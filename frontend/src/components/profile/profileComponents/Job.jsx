import React from 'react'

function Job() {
  return (
    
    <div className="w-full p-5">
      <h1 className="text-2xl font-medium mb-4">Job Information</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-300">Effective Date</th>
              <th className="px-4 py-2 border border-gray-300">Location</th>
              <th className="px-4 py-2 border border-gray-300">Sub Location</th>
              <th className="px-4 py-2 border border-gray-300">Job Title</th>
              <th className="px-4 py-2 border border-gray-300">Category</th>
              <th className="px-4 py-2 border border-gray-300">Department</th>
              <th className="px-4 py-2 border border-gray-300">Sub Department</th>
              <th className="px-4 py-2 border border-gray-300">Reporting Manager</th>
              <th className="px-4 py-2 border border-gray-300">Line Manager</th>
              <th className="px-4 py-2 border border-gray-300">Line Manager 2</th>
              <th className="px-4 py-2 border border-gray-300">Employment Status</th>
              <th className="px-4 py-2 border border-gray-300">Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Mon 07 Oct, 2024</td>
              <td className="px-4 py-2 border border-gray-300">Hyderabad</td>
              <td className="px-4 py-2 border border-gray-300">-</td>
              <td className="px-4 py-2 border border-gray-300">Junior Software Engineer</td>
              <td className="px-4 py-2 border border-gray-300">-</td>
              <td className="px-4 py-2 border border-gray-300">IT Services</td>
              <td className="px-4 py-2 border border-gray-300">-</td>
              <td className="px-4 py-2 border border-gray-300">Tejaswi Peesapati</td>
              <td className="px-4 py-2 border border-gray-300">Chandramouli Mettapalli</td>
              <td className="px-4 py-2 border border-gray-300">-</td>
              <td className="px-4 py-2 border border-gray-300 text-green-500">Internship</td>
              <td className="px-4 py-2 border border-gray-300">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}



  

export default Job