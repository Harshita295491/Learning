import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Personal from "./profileComponents/Personal";
import EmergencyContact from "./profileComponents/EmergencyContact";
import OrgStructure from "./profileComponents/OrgStructure";
import Job from "./profileComponents/Job";
import BankInformation from "./profileComponents/BankInformation";
import Settings from "../settings/Settings";
import Signature from "./profileComponents/Signature";
import Documents from "./profileComponents/Documents";
import ProfileUpdateRequests from "./profileComponents/ProfileUpdateRequests";
import TimelineAndFeedback from "./profileComponents/TimelineAndFeedback";
import MyProfileCompletion from "./profileComponents/MyProfileCompletion";
import OfficialDocuments from "./profileComponents/Documents/OfficialDocuments";
import OtherDocuments from "./profileComponents/Documents/OtherDocuments";
import PersonalDocuments from "./profileComponents/Documents/PersonalDocuments";
import Agreement from "./profileComponents/Job/Agreement";
import Compensation from "./profileComponents/Job/Compensation";
import EmployeeResignation from "./profileComponents/Job/EmployeeResignation";
import EmploymentHistory from "./profileComponents/Job/EmploymentHistory";
import Internship from "./profileComponents/Job/Internship";
import JobInformation from "./profileComponents/Job/JobInformation";
import Contact from "./profileComponents/Personal/Contact";
import Address from "./profileComponents/Personal/Address";
import Education from "./profileComponents/Personal/Education";
import FamilyInfo from "./profileComponents/Personal/FamilyInfo";
import Previous from "./profileComponents/Personal/Previous";
import HealthBenefit from "./profileComponents/Personal/HealthBenefit";
import BasicInfo from "./profileComponents/Personal/BasicInfo";
import MyAssets from "./profileComponents/MyAssets";
import MyFinance from "./profileComponents/MyFinance";
import MyProfile from "./MyProfile";
import calender from "../../assets/calendar-date.svg"
import sms from "../../assets/sms.svg";
import phone from "../../assets/phone.svg";
import briefcase from "../../assets/briefcase-02.svg";


const ProfileNavigation = () => {
  const [activeComponent, setActiveComponent] = useState("Personal");
  const [openDropdown, setOpenDropdown] = useState(null);

  // Array of sidebar items with dropdown options
  const sidebarItems = [
    {
      label: "Personal",
      component: "Personal",
      dropdownOptions: [
        { label: "Basic Info", component: "BasicInfo" },
        { label: "Family Info", component: "familyInfo" },
        { label: "Contact & Social Links", component: "ContactSocialLinks" },
        { label: "Address", component: "Address" },
        { label: "Education", component: "Education" },
        { label: "Previous Employer", component: "PreviousEmployer" },
        { label: "Health Benefit", component: "HealthBenefit" },
      ],
    },
    {
      label: "Emergency Contact",component: "EmergencyContact",
    },
    { label: "Org Structure",component: "OrgStructure" },
    {
      label: "Job",
      component: "Job",
      dropdownOptions: [
        { label: "Job Information", component: "JobInformation" },
        { label: "Agreement", component: "Agreement" },
        { label: "Compensation", component: "Compensation" },
        { label: "Employee Resignation", component: "EmployeeResignation" },
        { label: "Employment History", component: "EmploymentHistory" },
        { label: "Internship/Probation", component: "Internship" },
      ],

    },
    { label: "Bank Information", component: "BankInformation" },
    { label: "Settings", component: "Settings" },
    { label: "Signature", component: "Signature" },
    {
      label: "Documents", 
      component: "Documents",
      dropdownOptions: [
        { label: "Personal Documents", component: "PersonalDocuments" },
        { label: "Official Documents", component: "OfficialDocuments" },
        { label: "Other Documents", component: "OtherDocuments" },

      ],
    },
    { label: "Profile Update Requests", component: "ProfileUpdateRequests" },
    { label: "Timeline And Feedback", component: "TimelineAndFeedback" },
    { label: "Profile Update Requests", component: "ProfileUpdateRequests" },
    { label: "My Profile Completion", component: "MyProfileCompletion" },
    { label: "Profile Update Requests", component: "ProfileUpdateRequests" },
    { label: "My Assets", component: "MyAssets" },
    { label: "My Finance", component: "MyFinance" },
  ];

  // Function to render the selected component
  const renderComponent = () => {
    switch (activeComponent) {
      case "BasicInfo":
        return <BasicInfo/>
      case "familyInfo":
        return <FamilyInfo/>
      case "ContactSocialLinks":
        return <Contact/>
      case "Address":
        return <Address/>
      case "Education":
        return <Education/>
      case "PreviousEmployer":
        return <Previous/>
      case "HealthBenefit":
        return <HealthBenefit/>
      case "EmergencyContact":
        return <EmergencyContact />;
      case "OrgStructure":
        return <OrgStructure />;
      case "Job":
        return <Job />;
        case "JobInformation":
        return <div><JobInformation/></div>;
      case "Agreement":
        return <div><Agreement/></div>;
      case "Compensation":
        return <div><Compensation/></div>;
      case "EmployeeResignation":
        return <div><EmployeeResignation/></div>;
      case "EmploymentHistory":
        return <div><EmploymentHistory/></div>;
      case "Internship":
        return <div><Internship/></div>;
      case "BankInformation":
        return <BankInformation />;
      case "Settings":
        return <Settings />;
      case "Signature":
        return <Signature />;
      case "Documents":
        return <Documents />;
        case "PersonalDocuments":
        return <div><PersonalDocuments/></div>;
      case "OfficialDocuments":
        return <div><OfficialDocuments/></div>;
      case "OtherDocuments":
        return <div><OtherDocuments/></div>;
      case "ProfileUpdateRequests":
        return <ProfileUpdateRequests />;
      case "TimelineAndFeedback":
        return <TimelineAndFeedback />;
      case "MyProfileCompletion":
        return <MyProfileCompletion />;
      case "MyAssets":
        return <MyAssets />;
      case "MyFinance":
        return <MyFinance />;
      default:
        return <BasicInfo/>;
    }
  };

  return (
    <div className="flex flex-1">
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

export default ProfileNavigation;
