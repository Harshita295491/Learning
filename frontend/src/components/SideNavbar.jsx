
import React from 'react';

const SideNavbar = ({ sideBarItems, onOptionClick,setHoverId,hoverId }) => {
  return (
    <div onMouseEnter={()=>{setHoverId(true)}} onMouseLeave={()=>{setHoverId(false)}}  className={`${hoverId ? "w-[14%]":"w-[4%]"} transition-all ease-in-out duration-300  bg-[#005FD0] text-white h-full`}>
      <ul className="space-y-2 ">
        {sideBarItems.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer "
            onClick={() => onOptionClick(item.id)}
          >
            {/* <img src={item.icon} alt={`${item.label} icon`} className="" />  icon image */}
            <p  className=''>{item.icon}</p>
            <p></p> 
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SideNavbar;



