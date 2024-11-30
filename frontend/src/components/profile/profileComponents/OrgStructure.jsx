import React from 'react'
import dp from "../../../assets/dp.svg"

function OrgStructure() {

const empArray=[
  {
    id:1,
    name:'Tejaswi Peesapati',
    position: 'Service Delivery Manager',
    profilePic: dp
  },
  {
    id:2,
    name:'Chandramouli Mettapalli',
    position: 'Product Manager',
    profilePic: dp
  },
  {
    id:3,
    name:'Priya Singh',
    position: 'Junior Software Engineer',
    profilePic: dp
  },
  {
    id:4,
    name:'Sai Kiran',
    position: 'Junior Software Engineer',
    profilePic: dp
  },
  {
    id:5,
    name:'Nirvan Reddy',
    position: 'Junior Software Engineer',
    profilePic: dp
  }
  ,
  {
    id:6,
    name:'Sukanya',
    position: 'Junior Software Engineer',
    profilePic: dp
  },
  {
    id:7,
    name:'Harshita',
    position: 'Junior Software Engineer',
    profilePic: dp
  },
  {
    id:8,
    name:'Vimal',
    position: 'Junior Software Engineer',
    profilePic: dp
  },
  {
    id:8,
    name:'Krupa Kokila',
    position: 'Junior Software Engineer',
    profilePic: dp
  },
  {
    id:10,
    name:'Omkar',
    position: 'Junior Software Engineer',
    profilePic: dp
  },
  {
    id:11,
    name:'Richita',
    position: 'Junior Software Engineer',
    profilePic: dp
  },
  {
    id:12,
    name:'Vasavi',
    position: 'Junior Software Engineer',
    profilePic: dp
  },
  {
    id:13,
    name:'Rakesh',
    position: 'Junior Software Engineer',
    profilePic: dp
  }

]



  return (
    <div className='w-full flex flex-col justify-center items-center gap-5'>
     <h1 className='text-[30px] font-medium'>Emergency Contact </h1>
       
     {empArray.map((emp, index) => (
        <div key={emp.id} className="flex flex-col items-center">
          <div className="w-[455px] h-[68px] border-[1px] p-2 pl-8 border-black rounded-[13px] flex justify-between items-center">
            <div>
              <h1 className="text-[20px] font-medium">{emp.name}</h1>
              <h1 className="text-[14px] font-normal">{emp.position}</h1>
            </div>
            <img src={emp.profilePic} alt={`${emp.name}'s profile`} width="50" height="50" />
          </div>

          {/* Render vertical line between the top two employees only */}
          {index < 2 && (
            <div className="w-[1px] h-10 bg-black"></div>  
          )}
        </div>
      ))}
    </div>
  )
}

export default OrgStructure