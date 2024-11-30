// import React from 'react'
import React, { useState} from 'react';
// import myimg from "../../assets/image.jpeg";
// import profile1 from "../../assets/profile1.jpg";
// import announce from "../../assets/announcement.png";
// import axios from "axios"
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function Calendar1() {
    const [tgl, setTgl] = useState(new Date());
    const holidays = ['01-11-2024', '07-11-2024', '11-11-2024', '20-11-2024', '15-11-2024'];
    const absents = ['02-11-2024', '10-11-2024'];
    const  missingClockout=['04-11-2024', '05-11-2024'];
    const present=['06-11-2024', '08-11-2024','12-11-2024', '13-11-2024','14-11-2024', '18-11-2024','19-11-2024', '21-11-2024','22-11-2024', '25-11-2024','26-11-2024', '27-11-2024','29-11-2024']

  return (
    <div>  <div class="bg-white rounded-lg shadow-lg text-center mx-auto py-8 w-[80%] flex justify-center">

    {/* <div className="w-full h-full p-10"> */}
    <Calendar
        className="rounded-xl border-none w-[80%] leading-7"
        onChange={setTgl}
        value={tgl}
        tileClassName={({ date }) => {
            let day = date.getDate();
            let month = date.getMonth() + 1;
            if (month < 10) {
                month = '0' + month;
            }
            if (day < 10) {
                day = '0' + day;
            }
            const realDate = day + '-' + month + '-' + date.getFullYear();
            if (holidays.find(val => val === realDate)) {
                return 'highlight-holiday';
            }
            if (absents.find(val => val === realDate)) {
                return 'highlight-absent';
            }
             if ( missingClockout.find(val => val === realDate)) {
                return 'highlight-missingclockout';
            }
            if ( present.find(val => val === realDate)) {
                return 'highlight-present';
            }
            return null;
        }}
        
    />
    
    {/* </div> */}
</div></div>
  )
}

export default Calendar1;