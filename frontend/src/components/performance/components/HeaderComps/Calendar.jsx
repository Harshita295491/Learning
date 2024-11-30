import React, { useState } from 'react';

// Helper function to generate the days for a given month and year
const generateCalendarDays = (month, year) => {
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // Get the weekday the month starts on
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the total days in the month

  const daysArray = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    daysArray.push(null); // Fill with null for empty slots before the 1st of the month
  }
  for (let day = 1; day <= daysInMonth; day++) {
    daysArray.push(day); // Fill with actual days
  }

  return daysArray;
};

const Calendar = ({ dateRange }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const calendarDays = generateCalendarDays(currentMonth, currentYear);

  return (
    <div className="calendar-container mt-6">
      {/* Month and Year Navigation */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePreviousMonth}>&lt;</button>
        <div>
          <span>{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })}</span> {currentYear}
        </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 text-center">
        <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
        {calendarDays.map((day, index) =>
          day ? (
            <div
              key={index}
              className={`p-2 ${day >= new Date(dateRange.startDate).getDate() && day <= new Date(dateRange.endDate).getDate() ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded`}
            >
              {day}
            </div>
          ) : (
            <div key={index} className="p-2"></div> // Empty slots
          )
        )}
      </div>
    </div>
  );
};

export default Calendar;
