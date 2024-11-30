import React, { useState } from 'react';

const DateRangePicker = () => {
  // Initialize the state for the date range
  const [startDate, setStartDate] = useState(new Date()); // Default start date is today
  const [endDate, setEndDate] = useState(new Date()); // Default end date is today

  // Example of how to handle date change (using an actual date picker here would be ideal)
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value); // Update start date
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value); // Update end date
  };

  return (
    <div>
      <label>Start Date: </label>
      <input type="date" value={startDate} onChange={handleStartDateChange} />
      <br />
      <label>End Date: </label>
      <input type="date" value={endDate} onChange={handleEndDateChange} />
    </div>
  );
};

export default DateRangePicker;
