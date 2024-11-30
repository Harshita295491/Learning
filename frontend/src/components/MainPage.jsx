import React, { useState,useEffect } from 'react';
import Sidebar from './SideNavbar';
import Dashboard from './dashboard/Dashboard';
import Inbox from "./inbox/Inbox";
import Settings from './settings/Settings';
import Profile from './profile/Profile';
import Help from './help/Help';
import Onboarding from "./onboarding/Onboarding"
import Referrals from "./referrals/Referrals"
import Organization from './Organization/Organization';
import Attendence from "./attendance/Attendence"
import Leaves from './leaves/Leaves';

import Performance from './performance/Performance';

import Overtime from './overtime/Overtime';

import Reimbursement from './Reimbursement/Profile';
import Cab from './CabServices/Cab';

import axios from 'axios';





function MainPage() {
  const [userdata, setUserdata] = useState({});

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:3000/login/success", {
        withCredentials: true,
      });
      console.log("response", response.data);
      setUserdata(response.data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUser(); // Call the function here
  }, []);


  const [selectedId, setSelectedId] = useState(1); // Default to the first option (id: 1)
  const [hoverId, setHoverId] = useState(false); // Default to the first option (id: 1)
  const sideBarItems = [
    {
      id: 1,
      label: 'Dashboard',
      component: <Dashboard/>,
      icon: (
        <div className="flex w-full items-center group cursor-pointer px-4 py-2 hover:bg-gray-100 ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white group-hover:text-blue-500 transition-colors duration-300"
          >
            <path
              d="M10.5495 2.53189C11.3874 1.82531 12.6126 1.82531 13.4505 2.5319L20.2005 8.224C20.7074 8.65152 21 9.2809 21 9.94406V19.7468C21 20.7133 20.2165 21.4968 19.25 21.4968H15.75C14.7835 21.4968 14 20.7133 14 19.7468V14.2468C14 14.1088 13.8881 13.9968 13.75 13.9968H10.25C10.1119 13.9968 9.99999 14.1088 9.99999 14.2468V19.7468C9.99999 20.7133 9.2165 21.4968 8.25 21.4968H4.75C3.7835 21.4968 3 20.7133 3 19.7468V9.94406C3 9.2809 3.29255 8.65152 3.79952 8.224L10.5495 2.53189ZM12.4835 3.6786C12.2042 3.44307 11.7958 3.44307 11.5165 3.6786L4.76651 9.37071C4.59752 9.51321 4.5 9.72301 4.5 9.94406V19.7468C4.5 19.8849 4.61193 19.9968 4.75 19.9968H8.25C8.38807 19.9968 8.49999 19.8849 8.49999 19.7468V14.2468C8.49999 13.2803 9.2835 12.4968 10.25 12.4968H13.75C14.7165 12.4968 15.5 13.2803 15.5 14.2468V19.7468C15.5 19.8849 15.6119 19.9968 15.75 19.9968H19.25C19.3881 19.9968 19.5 19.8849 19.5 19.7468V9.94406C19.5 9.72301 19.4025 9.51321 19.2335 9.37071L12.4835 3.6786Z"
              fill="currentColor"
            />
          </svg>
          <span className={` ${hoverId ? "block":"hidden"} ml-2  text-white group-hover:text-blue-500 transition-all ease-in-out  duration-500`}>
            Dashboard
          </span>
        </div>
      ),
    },
    {
      id: 2, label: '', component: <Inbox />,
      icon: (
        <div className="flex w-full items-center group cursor-pointer px-4 py-2 hover:bg-gray-100">
        <svg
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white transition-colors duration-300"
          stroke="currentColor" 
        >
          <path
            d="M1.83325 6.125L6.59427 9.15474C6.86895 9.32953 7.00628 9.41693 7.15486 9.47884C7.28675 9.5338 7.42495 9.57374 7.56661 9.59784C7.72622 9.625 7.89128 9.625 8.22139 9.625H13.7784C14.1086 9.625 14.2736 9.625 14.4332 9.59784C14.5749 9.57374 14.7131 9.5338 14.845 9.47884C14.9936 9.41693 15.1309 9.32953 15.4056 9.15474L20.1666 6.125M6.23325 17.5H15.7666C17.3067 17.5 18.0768 17.5 18.6651 17.2139C19.1825 16.9622 19.6032 16.5607 19.8669 16.0667C20.1666 15.5052 20.1666 14.7701 20.1666 13.3V7.7C20.1666 6.22986 20.1666 5.49479 19.8669 4.93327C19.6032 4.43935 19.1825 4.03778 18.6651 3.78611C18.0768 3.5 17.3067 3.5 15.7666 3.5H6.23325C4.69311 3.5 3.92304 3.5 3.33478 3.78611C2.81733 4.03778 2.39664 4.43935 2.13298 4.93327C1.83325 5.49479 1.83325 6.22986 1.83325 7.7V13.3C1.83325 14.7701 1.83325 15.5052 2.13298 16.0667C2.39664 16.5607 2.81733 16.9622 3.33478 17.2139C3.92304 17.5 4.69311 17.5 6.23325 17.5Z"
            stroke="white" 
            strokeWidth="2"
            fill=""
            className="group-hover:stroke-blue-500 transition-colors duration-300" 
          />
        </svg>
        <span className={` ${hoverId ? "block":"hidden"} ml-2  text-white group-hover:text-blue-500 transition-colors duration-300 `}>
          Mail
        </span>
      </div>
      
      
      ),


    },
    {
      id: 3, label: '', component: <Profile />, icon: (
        <div className="flex w-full items-center group cursor-pointer px-4 py-2 hover:bg-gray-100">
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-white transition-colors duration-300"
    stroke="currentColor"
  >
    <path
      d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
      stroke="white" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="group-hover:stroke-blue-500 transition-colors duration-300" 
    />
  </svg>
  <span className={` ${hoverId ? "block":"hidden"} ml-2  text-white group-hover:text-blue-500 transition-colors duration-300`}>
    Profile
  </span>
</div>

      ),
    },
    {
      id: 4, label: '', component: <Organization />, icon: (
        <div className="flex w-full items-center group cursor-pointer px-4 py-2 hover:bg-gray-100">
        <svg
          width="24"
          height="31"
          viewBox="0 0 24 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white transition-colors duration-300"
          stroke="currentColor"
        >
          <path
            d="M8 8.11139C8 8.80647 7.55228 9.36995 7 9.36995C6.44772 9.36995 6 8.80647 6 8.11139C6 7.4163 6.44772 6.85283 7 6.85283C7.55228 6.85283 8 7.4163 8 8.11139ZM7 13.1456C7.55228 13.1456 8 12.5821 8 11.8871C8 11.192 7.55228 10.6285 7 10.6285C6.44772 10.6285 6 11.192 6 11.8871C6 12.5821 6.44772 13.1456 7 13.1456ZM8 15.6627C8 16.3578 7.55228 16.9213 7 16.9213C6.44772 16.9213 6 16.3578 6 15.6627C6 14.9677 6.44772 14.4042 7 14.4042C7.55228 14.4042 8 14.9677 8 15.6627ZM8 19.4384C8 20.1335 7.55228 20.697 7 20.697C6.44772 20.697 6 20.1335 6 19.4384C6 18.7433 6.44772 18.1799 7 18.1799C7.55228 18.1799 8 18.7433 8 19.4384ZM7 24.4727C7.55228 24.4727 8 23.9092 8 23.2141C8 22.519 7.55228 21.9555 7 21.9555C6.44772 21.9555 6 22.519 6 23.2141C6 23.9092 6.44772 24.4727 7 24.4727ZM14 20.697C14.5523 20.697 15 20.1335 15 19.4384C15 18.7433 14.5523 18.1799 14 18.1799C13.4477 18.1799 13 18.7433 13 19.4384C13 20.1335 13.4477 20.697 14 20.697ZM17 20.697C17.5523 20.697 18 20.1335 18 19.4384C18 18.7433 17.5523 18.1799 17 18.1799C16.4477 18.1799 16 18.7433 16 19.4384C16 20.1335 16.4477 20.697 17 20.697ZM17 16.9213C17.5523 16.9213 18 16.3578 18 15.6627C18 14.9677 17.5523 14.4042 17 14.4042C16.4477 14.4042 16 14.9677 16 15.6627C16 16.3578 16.4477 16.9213 17 16.9213ZM15 15.6627C15 16.3578 14.5523 16.9213 14 16.9213C13.4477 16.9213 13 16.3578 13 15.6627C13 14.9677 13.4477 14.4042 14 14.4042C14.5523 14.4042 15 14.9677 15 15.6627ZM17 13.1456C17.5523 13.1456 18 12.5821 18 11.8871C18 11.192 17.5523 10.6285 17 10.6285C16.4477 10.6285 16 11.192 16 11.8871C16 12.5821 16.4477 13.1456 17 13.1456ZM15 11.8871C15 12.5821 14.5523 13.1456 14 13.1456C13.4477 13.1456 13 12.5821 13 11.8871C13 11.192 13.4477 10.6285 14 10.6285C14.5523 10.6285 15 11.192 15 11.8871ZM14 6.85283V5.90891C14 4.34497 12.9926 3.07715 11.75 3.07715H5.25C4.00736 3.07715 3 4.34497 3 5.90891V26.6751C3 27.1965 3.33579 27.6191 3.75 27.6191H20.25C20.6642 27.6191 21 27.1965 21 26.6751V9.68459C21 8.12065 19.9926 6.85283 18.75 6.85283H14ZM4.5 5.90891C4.5 5.38759 4.83579 4.96499 5.25 4.96499H11.75C12.1642 4.96499 12.5 5.3876 12.5 5.90891V6.85283H12.25C11.0074 6.85283 10 8.12065 10 9.68459V25.7312H4.5V5.90891ZM14.5 25.7312V23.8434H16.5V25.7312H14.5ZM18 22.8995C18 22.3782 17.6642 21.9555 17.25 21.9555H13.75C13.3358 21.9555 13 22.3782 13 22.8995V25.7312H11.5V9.68459C11.5 9.16327 11.8358 8.74067 12.25 8.74067H18.75C19.1642 8.74067 19.5 9.16327 19.5 9.68459V25.7312H18V22.8995Z"
            fill="gray" 
            className="group-hover:stroke-blue-500  transition-colors duration-300" 
          />
        </svg>
        <span className={` ${hoverId ? "block":"hidden"} ml-2  text-white group-hover:text-blue-500 transition-colors duration-300`}>
        Organization
        </span>
      </div>
      
      ),
    },
    {
      id: 5, label: '', component: <Settings />, icon: (

        <div className="flex w-full items-center group cursor-pointer px-4 py-2 hover:bg-gray-100">
        <svg
          width="24"
          height="31"
          viewBox="0 0 24 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 transition-colors duration-300"
        >
          <path
            d="M12.0124 5.25C12.7464 5.25846 13.4775 5.34326 14.1939 5.50304C14.5067 5.57279 14.7406 5.83351 14.7761 6.15196L14.9463 7.67881C15.0233 8.37986 15.6152 8.91084 16.3209 8.91158C16.5105 8.91188 16.6982 8.87238 16.8734 8.79483L18.2741 8.17956C18.5654 8.05159 18.9057 8.12136 19.1232 8.35362C20.1354 9.43464 20.8892 10.7311 21.3279 12.1456C21.4225 12.4506 21.3137 12.782 21.0566 12.9715L19.8151 13.8866C19.461 14.1468 19.2518 14.56 19.2518 14.9995C19.2518 15.4389 19.461 15.8521 19.8159 16.1129L21.0585 17.0283C21.3156 17.2177 21.4246 17.5492 21.3299 17.8543C20.8914 19.2685 20.138 20.5649 19.1264 21.6461C18.9091 21.8783 18.569 21.9483 18.2777 21.8206L16.8714 21.2045C16.4691 21.0284 16.007 21.0542 15.6268 21.274C15.2466 21.4937 14.9935 21.8812 14.9452 22.3177L14.7761 23.8444C14.7413 24.1592 14.5124 24.4182 14.2043 24.4915C12.7558 24.8361 11.2467 24.8361 9.79828 24.4915C9.49015 24.4182 9.26129 24.1592 9.22643 23.8444L9.0576 22.32C9.00802 21.8843 8.75459 21.498 8.37467 21.279C7.99475 21.06 7.53345 21.0343 7.13244 21.2094L5.72582 21.8256C5.43446 21.9533 5.09428 21.8833 4.87703 21.6509C3.86487 20.5685 3.11144 19.2705 2.67344 17.8548C2.57911 17.5499 2.68811 17.2186 2.94509 17.0293L4.18842 16.1133C4.54256 15.8531 4.75172 15.4399 4.75172 15.0005C4.75172 14.561 4.54256 14.1478 4.18796 13.8873L2.94541 12.9728C2.68804 12.7834 2.57894 12.4518 2.67361 12.1466C3.11236 10.7321 3.86619 9.43564 4.87837 8.35462C5.09584 8.12236 5.43618 8.05259 5.72749 8.18056L7.12786 8.79572C7.53081 8.97256 7.99404 8.94585 8.37601 8.72269C8.75633 8.50209 9.00953 8.11422 9.05841 7.67764L9.22849 6.15196C9.26401 5.83335 9.49811 5.57254 9.81105 5.50294C10.5283 5.34342 11.2602 5.25865 12.0124 5.25ZM12.0126 6.7499C11.5586 6.75524 11.1058 6.79443 10.6581 6.86702L10.5491 7.84418C10.4473 8.75368 9.92028 9.56102 9.13066 10.019C8.33622 10.4832 7.36761 10.539 6.52483 10.1692L5.62654 9.77456C5.0546 10.4687 4.59938 11.2514 4.27877 12.0917L5.07656 12.6788C5.81537 13.2216 6.25172 14.0837 6.25172 15.0005C6.25172 15.9172 5.81537 16.7793 5.07734 17.3215L4.27829 17.9102C4.59863 18.752 5.05392 19.5361 5.62625 20.2316L6.53138 19.8351C7.36947 19.4692 8.33149 19.5227 9.12377 19.9794C9.91606 20.4361 10.4446 21.2417 10.5482 22.1526L10.6572 23.1365C11.5468 23.2878 12.4557 23.2878 13.3453 23.1365L13.4543 22.1527C13.5551 21.2421 14.083 20.4337 14.8762 19.9753C15.6695 19.5168 16.6334 19.463 17.473 19.8305L18.3775 20.2267C18.9493 19.5323 19.4044 18.7495 19.7249 17.909L18.927 17.3211C18.1882 16.7783 17.7518 15.9162 17.7518 14.9995C17.7518 14.0827 18.1882 13.2206 18.9261 12.6785L19.7229 12.0911C19.4023 11.2506 18.947 10.4678 18.375 9.77356L17.4785 10.1674C17.1132 10.329 16.718 10.4122 16.3189 10.4116C14.8492 10.41 13.6158 9.30355 13.4554 7.84383L13.3464 6.8667C12.9009 6.7942 12.4529 6.75512 12.0126 6.7499ZM11.9999 11.25C14.071 11.25 15.7499 12.9289 15.7499 15C15.7499 17.071 14.071 18.75 11.9999 18.75C9.92887 18.75 8.24994 17.071 8.24994 15C8.24994 12.9289 9.92887 11.25 11.9999 11.25ZM11.9999 12.75C10.7573 12.75 9.74994 13.7573 9.74994 15C9.74994 16.2426 10.7573 17.25 11.9999 17.25C13.2426 17.25 14.2499 16.2426 14.2499 15C14.2499 13.7573 13.2426 12.75 11.9999 12.75Z"
            stroke="white" 
            strokeWidth="1.5"
            fill="none" 
            className="group-hover:stroke-blue-500 transition-colors duration-300" 
          />
        </svg>
        <span className={`${hoverId ? "block":"hidden"} ml-2  text-white group-hover:text-blue-500 transition-colors duration-300`}>
        Settings
        </span>
      </div>
      
      ),
    },
    {
      id: 6, label: '', component: <Help />, icon: (
        <div className="flex w-full items-center group cursor-pointer px-4 py-2 hover:bg-gray-100">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-colors duration-300 group-hover:stroke-white"
        >
          <path
            d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="white" 
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-blue-500 transition-colors duration-300"
          />
        </svg>
        <span className={` ${hoverId ? "block":"hidden"} ml-2  text-white group-hover:text-blue-500 transition-colors duration-300`}>
             Help
        </span>
      </div>
      
      ),
    },
    {
      id: 7, label: '', component: <Attendence />, icon: (
        <div className="flex items-center group cursor-pointer px-4 py-2 hover:bg-gray-100">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-colors duration-300"
        >
          <path
            d="M21 10H3M16 2V6M8 2V6M10.5 14L12 13V18M10.75 18H13.25M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
            stroke="white" 
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-blue-500 transition-colors duration-300" 
          />
        </svg>
        <span className={` ${hoverId ? "block":"hidden"} ml-2  text-white group-hover:text-blue-500 transition-colors duration-300`}>
        Attendence
        </span>
      </div>
      
      ),
    },
    {
      id: 8, label: '', component: <Referrals />, icon: (
        <div className="flex w-full items-center group cursor-pointer px-4 py-2 hover:bg-gray-100">
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-colors duration-300"
  >
    <path
      d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
      stroke="white" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="group-hover:stroke-blue-500 transition-colors duration-300" 
    />
  </svg>
  <span className={` ${hoverId ? "block":"hidden"} ml-2  text-white group-hover:text-blue-500 transition-colors duration-300`}>
  Referrals
  </span>
</div>

      ),
    },
    {
      id: 9, label: '', component: <Onboarding />, icon: (
      
         <div className="flex w-full items-center group cursor-pointer px-4 py-2 hover:bg-gray-100">
          <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-300 group-hover:text-blue-600 text-white" 
      >
        <path
          d="M17.5 11H12.5M17.5 15H12.5M17.5 7H12.5M9 3L9 21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z"
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:stroke-blue-500 transition-colors duration-300" 
        />
      </svg>
         <span className={` ${hoverId ? "block":"hidden"} ml-2  text-white group-hover:text-blue-500 transition-colors duration-300`}>
         Onboarding
         </span>
       </div>
      
      ),
    },
    {
      id: 10, label: '', component: <Overtime />, icon: (
        <div className="flex w-full items-center group cursor-pointer px-4 py-2 hover:bg-gray-100">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 transition-colors duration-300"
        >
          <path
            d="M21.9208 13.265C21.9731 12.8507 22 12.4285 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.4354 22 12.8643 21.9722 13.285 21.9182M12 6V12L15.7384 13.8692M19 22V16M16 19H22"
            stroke="white" 
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-blue-500 transition-colors duration-300" 
          />
        </svg>
        <span className={ `${hoverId ? "block":"hidden"} ml-2  text-white group-hover:text-blue-500 transition-colors duration-300`}>
        Overtime
        </span>
      </div>
      

      ),
    },
    {
      id: 11, label: '', component: <Leaves />, icon: (
        <div className="flex w-full items-center group cursor-pointer px-4 py-2 hover:bg-gray-100">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white transition-colors duration-300"
        >
          <path
            d="M6 17C6 17.93 6 18.395 6.10222 18.7765C6.37962 19.8117 7.18827 20.6204 8.22354 20.8978C8.60504 21 9.07003 21 10 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H10C9.07003 3 8.60504 3 8.22354 3.10222C7.18827 3.37962 6.37962 4.18827 6.10222 5.22354C6 5.60504 6 6.07003 6 7M12 8L16 12M16 12L12 16M16 12H3"
            stroke="white" 
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-blue-500 transition-colors duration-300" 
          />
        </svg>
        <span className={`${hoverId ? "block":"hidden"} ml-2  text-white group-hover:text-blue-500 transition-colors duration-300`}>
        Leaves
        </span>
      </div>
      
      ),
    },
    {
      id: 12, label: '', component: <Performance />, icon: (
        <div className="flex w-full items-center group cursor-pointer px-4 py-2 hover:bg-gray-100">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 transition-colors duration-300"
        >
          <path
            d="M9 12H4.6C4.03995 12 3.75992 12 3.54601 12.109C3.35785 12.2049 3.20487 12.3578 3.10899 12.546C3 12.7599 3 13.0399 3 13.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H9M9 21H15M9 21L9 8.6C9 8.03995 9 7.75992 9.10899 7.54601C9.20487 7.35785 9.35785 7.20487 9.54601 7.10899C9.75992 7 10.0399 7 10.6 7H13.4C13.9601 7 14.2401 7 14.454 7.10899C14.6422 7.20487 14.7951 7.35785 14.891 7.54601C15 7.75992 15 8.03995 15 8.6V21M15 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3H16.6C16.0399 3 15.7599 3 15.546 3.10899C15.3578 3.20487 15.2049 3.35785 15.109 3.54601C15 3.75992 15 4.03995 15 4.6V8"
            stroke="white" 
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-blue-500 transition-colors duration-300" 
          />
        </svg>
        <span className={` ${hoverId ? "block":"hidden"} ml-2 text-white group-hover:text-blue-500 transition-colors duration-300 sidebar-text `}>
        Performance
        </span>
      </div>
      
      ),
    },
    {
      id: 13, label: '', component: <Reimbursement />, icon: (
        <div className="flex w-full items-center group cursor-pointer px-4 py-2 hover:bg-gray-100">
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-white transition-colors duration-300"
    stroke="currentColor"
  >
    <path
      d="M12 6V4l-3 3 3 3V8c2.76 0 5 2.24 5 5 0 2.76-2.24 5-5 5-2.22 0-4.06-1.45-4.75-3.5H6.1C6.87 17.63 9.24 20 12 20c3.31 0 6-2.69 6-6s-2.69-6-6-6zM6.35 7.5l-1.6-1.6 1.4-1.4L9.85 7.5 6.35 7.5z"
      stroke="white" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="group-hover:stroke-blue-500 transition-colors duration-300" 
    />
  </svg>
  <span className={` ${hoverId ? "block":"hidden"} ml-2  text-white group-hover:text-blue-500 transition-colors duration-300`}>
    Reimbursement
  </span>
</div>

      ),
    },
    {
      id: 14, label: '', component: <Cab />, icon: (
        <div className="flex w-full items-center group cursor-pointer px-4 py-2 hover:bg-gray-100">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 transition-colors duration-300"
        >
          <path
            d="M9 12H4.6C4.03995 12 3.75992 12 3.54601 12.109C3.35785 12.2049 3.20487 12.3578 3.10899 12.546C3 12.7599 3 13.0399 3 13.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H9M9 21H15M9 21L9 8.6C9 8.03995 9 7.75992 9.10899 7.54601C9.20487 7.35785 9.35785 7.20487 9.54601 7.10899C9.75992 7 10.0399 7 10.6 7H13.4C13.9601 7 14.2401 7 14.454 7.10899C14.6422 7.20487 14.7951 7.35785 14.891 7.54601C15 7.75992 15 8.03995 15 8.6V21M15 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3H16.6C16.0399 3 15.7599 3 15.546 3.10899C15.3578 3.20487 15.2049 3.35785 15.109 3.54601C15 3.75992 15 4.03995 15 4.6V8"
            stroke="white" 
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-blue-500 transition-colors duration-300" 
          />
        </svg>
        <span className={` ${hoverId ? "block":"hidden"} ml-2 text-white group-hover:text-blue-500 transition-colors duration-300 sidebar-text `}>
        Cab Service
        </span>
      </div>
      
      ),
    }

  ];



  return (
    <div className="flex flex-col h-[92vh]">


      <div className="flex flex-1">

        {/* Sidebar with hover effect */}
        {/* <div className="bg-blue-600 group w-16 hover:w-64 transition-all duration-300">
          <Sidebar sideBarItems={sideBarItems} onOptionClick={setSelectedId} />
        </div> */}


        {/* Sidebar with options */}
        <Sidebar sideBarItems={sideBarItems} setHoverId={setHoverId} hoverId={hoverId} onOptionClick={setSelectedId} />
        {/* <div className='flex flex-col gap-4 bg-gray-600'>

        
        {sideBarItems.map((item,i)=>{
          return(
            <>
          <div key={i} onClick={()=>{setSelectedId(item.id)}} className='flex gap-3'>
            <img src={item.icon} alt="" />
            <p className='text-lg font-semibold'> {item.label}</p>
          </div>
          </>
          )
        })}
        </div> */}
        {/* Content Area */}
        

        <div className='flex-1 bg-gray-100'>
          {sideBarItems.map((item, i) => {
            if (item.id === selectedId) {


              return (
                <>
                  <div key={i} className='flex gap-3'>

                    {item.component}
                  </div>
                </>
              )
            }
          })}
        </div>

        {/* <div className="flex-1 bg-gray-100">
          {sideBarItems.map((item) => {
            if (item.id === selectedId) {
              return (
                <div className="w-full" key={item.id}>
                  {item.component}
                </div>
              );
            }
            return null;
          })}
        </div> */}
      </div>
    </div>
  );
}

export default MainPage;
