import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { Link } from "react-router-dom";
// import sms from "../../assets/sms.svg";
import MyProfile from "./MyProfile";
import calender from "../../assets/calendar-date.svg"
import sms from "../../assets/sms.svg";
import phone from "../../assets/phone.svg";
import briefcase from "../../assets/briefcase-02.svg";
import MyStatusReport from "./AttendenceComponents/MyStatusReport";
import MyAttendence from "./AttendenceComponents/MyAttendence";
import MyAttendencerequests from "./AttendenceComponents/MyAttendencerequests";
import MyLatein from "./AttendenceComponents/MyLatein";
import MyShiftChangeRequests from "./AttendenceComponents/MyShiftChangeRequests";
import Myearlyout from "./AttendenceComponents/Myearlyout";
import MyodRemoteWork from "./AttendenceComponents/MyodRemoteWork";
const AttendenceNavigation = () => {
  const [activeComponent, setActiveComponent] = useState("Personal");
  const [openDropdown, setOpenDropdown] = useState(null);

  // Array of sidebar items with dropdown options
  const sidebarItems = [

    { label: "My Attendence", path: "/my-attendence", component: "MyAttendence" },
    { label: "My Status Report", path: "/myStatusReport", component: "MyStatusReport" },
    { label: "My Attendence requests", path: "/myAttendencerequests", component: "MyAttendencerequests" },
    { label: "My Shift Change Requests", path: "/myShiftChangeRequestss", component: "MyShiftChangeRequests" },
    { label: "My Od Remote Work", path: "/myodRemoteWork", component: "MyodRemoteWork" },
    { label: "My Late in", path: "/mylatein", component: "MyLatein" },
    { label: "My Early Out", path: "/myearlyout", component: "Myearlyout" },


  ];

  // Function to render the selected component
  const renderComponent = () => {
    switch (activeComponent) {
      case "MyAttendence":
        return <MyAttendence />;
      case "MyStatusReport":
        return <MyStatusReport />;
      case "MyAttendencerequests":
        return <MyAttendencerequests />;
      case "MyShiftChangeRequests":
        return <MyShiftChangeRequests />;
      case "MyodRemoteWork":
        return <MyodRemoteWork />;
      case "MyLatein":
        return <MyLatein />;
      case "Myearlyout":
        return <Myearlyout />;


      default:
        return <MyAttendence />;
    }
  };

  return (
    <div className="flex flex-1 ">
       {/* Sidebar */}
       <div className="w-[367px] bg-white">
        <MyProfile />

        <ul className="mt-2 overflow-auto h-[57vh]">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <div
                className="flex relative flex-col gap-2 cursor-pointer py-1 px-3 rounded"
                onClick={() => {
                  if (item.dropdownOptions) {
                    setOpenDropdown(openDropdown === index ? null : index);
                  } else {
                    setActiveComponent(item.component);
                  }
                }}
              >
                
                <div className="flex justify-between items-center">
                  <p className="hover:text-blue-600 cursor-pointer hover:font-semibold">{item.label}</p>
                  {item.dropdownOptions && (
                    <div
                      className="ml-2 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenDropdown(openDropdown === index ? null : index);
                      }}
                    >
                      {openDropdown === index ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  )}
                </div>
              </div>

              {/* Dropdown menu */}
              {openDropdown === index && item.dropdownOptions && (
                <ul className="w-48 z-[40] top-9 left-10 bg-white flex flex-col gap-2">
                  {item.dropdownOptions.map((option, optIndex) => (
                    <li
                      className="hover:text-blue-600 cursor-pointer hover:font-semibold ml-6"
                      key={optIndex}
                      onClick={() => setActiveComponent(option.component)}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
      <div className='bg-gradient-to-r from-[#a3c4f1] to-[#f5e9d0] p-4 w-full h-[62px] flex items-center justify-around text-[12px] text-black  gap-10'>
                <div className='flex gap-1 items-center'>
                    <img src={sms} alt="" />
                    <a href="mailto:vasavi.patnaik@thebluespire.com">vasavi.patnaik@thebluespire.com</a>
                </div>
                <div className='flex gap-1 items-center'>
                    <img src={phone} alt="" />
                    <p>91-9550264485</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <img src={calender} alt="" />
                    <p>15 Days</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <img src={briefcase} alt="" />
                    <p>Mon 07 Oct, 2024</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p>Chandramouli Mettapalli</p>
                    <p>0015</p>
                </div>
                <div className='flex flex-col gap-1 '>
                    <p>Tejaswi Peesapati</p>
                    <p>0002</p>
                </div>
            </div>
      

      <div className=" bg-gray-100 p-4">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default AttendenceNavigation;
