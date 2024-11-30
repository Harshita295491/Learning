import notFoundImg from '../assets/no-data-found.svg';


const ReportSummary = () => {
    return (
      <div className="p-4 border rounded-lg bg-gray-50 mt-6">
        <h2 className="text-lg font-semibold mb-4">Report Summary</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr>
                <th className="p-2 text-left border-b">Project Name</th>
                <th className="p-2 text-left border-b">Total Activities</th>
                <th className="p-2 text-left border-b">Total Tasks</th>
                <th className="p-2 text-left border-b">Completed Tasks</th>
                <th className="p-2 text-left border-b">Remaining Tasks</th>
                <th className="p-2 text-left border-b">Overdue Tasks</th>
                <th className="p-2 text-left border-b">Billable Hours</th>
                <th className="p-2 text-left border-b">Non-Billable Hours</th>
                <th className="p-2 text-left border-b">Total Tracked Hours</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample empty row */}
              <tr>
                <td className="p-2 border-b"></td>
                <td className="p-2 border-b"></td>
                <td className="p-2 border-b"></td>
                <td className="p-2 border-b"></td>
                <td className="p-2 border-b"></td>
                <td className="p-2 border-b"></td>
                <td className="p-2 border-b"></td>
                <td className="p-2 border-b"></td>
                <td className="p-2 border-b"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <img src={notFoundImg} alt="Illustration" className="w-100 h-100"/>
        </div>

      </div>
    );
  };
  
  export default ReportSummary;
  