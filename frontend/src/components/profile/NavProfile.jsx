
import React, { useState } from 'react';
// import MyProfile from './myProfile';

const NavProfile = ({ sideBarItems, onOptionClick, selectedId }) => {


  if (!sideBarItems) {
    return null; // Or return an empty div or placeholder if necessary
  }


  return (
    <div className="w-[367px] bg-white">
      {/* <MyProfile /> */}

      <div>
        <ul className=" mt-2 overflow-auto h-[57vh] ">
          {sideBarItems.map((item) => (
            <li
              key={item.id}
              className="flex relative flex-col  gap-2  cursor-pointer  py-1 px-3 rounded"
              onClick={() => onOptionClick(item.id)}
            >
              {/* <img src={item.icon} alt={`${item.label} icon`} className="" />  icon image */}
              <hr className='w-full' />
              <p className='hover:text-blue-600 hover:font-semibold'>{item.label}</p>
              {
                selectedId === item.id && <div className='w-48  z-[40] top-9 left-10 bg-white  flex flex-col gap-2'>
                  {item.dropdown.map((dropItems, i) => {
                    return (

                      <p className='hover:text-blue-600 hover:font-semibold ml-4'>{dropItems}</p>
                    )
                  })}
                </div>
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavProfile;



