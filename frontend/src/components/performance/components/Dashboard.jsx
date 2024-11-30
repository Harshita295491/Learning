import React, { useState } from 'react';
import DateRangePicker from './HeaderComps/DateRangePicker';

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      {/* Pass startDate and endDate as props */}
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
    </div>
  );
};

export default Dashboard;
