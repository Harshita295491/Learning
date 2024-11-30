
import profile1 from "../../assets/profile1.jpg";
import announce from "../../assets/announcement.png";

import ClockINOUT from './clockINOUT';

import Calendar1 from './calendar';


function Dashboard() {
    return (
        <>
            <div className='flex flex-row w-[100%]'>

                <div className='w-[60%] flex flex-col gap-5 pl-5 pt-5 '>
                    <div className='w-[100%] flex flex-row justify-start gap-10 text-white '>
                        <div className='bg-lime-500 p-8 w-[15%]  rounded '>Casual</div>
                        <div className='bg-pink-800 p-8 w-[15%] rounded hover:rounded-lg'>Paternity</div>
                        <div className='bg-amber-900 p-8 w-[15%] rounded hover:rounded-lg'>Earned</div>
                        <div className='bg-cyan-500 p-8 w-[15%] rounded hover:rounded-lg'>Maternity</div>
                        <div className='bg-sky-800 p-8 w-[15%] rounded hover:rounded-lg'>Sick</div>
                    </div>
                    <div className='w-[95%] h-[99px] flex flex-row justify-evenly text-slate-700 bg-white border-slate-300 border-2 rounded-lg'>
                        <div className='p-8 h-24 rounded-lg'>
                            <p>Total</p>
                            <p>20 Days</p>
                        </div>
                        <div className='p-8 h-24 rounded-lg'>
                            <p>Allocated</p>
                            <p>2 Days</p>
                        </div>
                        <div className='p-8 h-24 rounded-lg'>
                            <p>Planned</p>
                            <p>9 Days</p>
                        </div>
                        <div className='p-8 h-24 rounded-lg'>
                            <p>Token</p>
                            <p>3 Days</p>
                        </div>
                        <div className='p-8 h-24 rounded-lg'>
                            <p>Balance</p>
                            <p>12 Days</p>
                        </div>
                    </div>
                    <div className=' w-[95%] bg-white shadow-lg  border-slate-300 border-2 rounded-lg p-6'>
                        <div className='flex flex-col float-start gap-5 mb-4'>
                            <h2 className=' flex text-lg font-semibold text-gray-800 gap-x-3'><img src={announce} alt="" className='w-[3%]' />
                                Announcements <span className='text-sm text-pink-600'>(1 New)</span></h2>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio recusandae asperiores ipsa porro, exercitationem, non accusantium nostrum enim alias culpa ipsam. Alias, dolorum! Harum nam praesentium culpa eum molestiae magni!
                                doloribus.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio recusandae asperiores ipsa porro, exercitationem, non accusantium nostrum enim alias culpa ipsam. Alias, dolorum! Harum nam praesentium culpa eum molestiae magni!
                                doloribus.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio recusandae asperiores ipsa porro, exercitationem, non accusantium nostrum enim alias culpa ipsam. Alias, dolorum! Harum nam praesentium culpa eum molestiae magni!
                                doloribus.</p>

                        </div>
                    </div>
                    <div className='flex w-[90%] justify-around '>
                        <div className='w-[45%] bg-white shadow-lg  border-slate-300 border-2 rounded-lg p-6'>
                            <div className='flex flex-col justify-evenly gap-5'>
                                <h2 className='text-lg font-semibold text-gray-800  '>Absent Today(3) </h2>
                                <h3 className='flex'><img src={profile1} alt="" />Vimal</h3>
                                <h3 className='flex'><img src={profile1} alt="" />Vimal</h3>
                                <h3 className='flex'><img src={profile1} alt="" />Vimal</h3>
                                <h3 className='flex'><img src={profile1} alt="" />Vimal</h3>
                                <h3 className='flex'><img src={profile1} alt="" />Vimal</h3>
                            </div>
                        </div>
                        <div className='w-[45%] bg-white shadow-lg  border-slate-300 border-2 rounded-lg p-6'>
                            <div className='flex flex-col justify-evenly gap-5'>
                                <h2 className='text-lg font-semibold text-gray-800  '>On Leave(3) </h2>
                                <h3 className='flex '><img src={profile1} alt="" />Vimal</h3>
                                <h3 className='flex'><img src={profile1} alt="" />Vimal</h3>
                                <h3 className='flex'><img src={profile1} alt="" />Vimal</h3>
                                <h3 className='flex'><img src={profile1} alt="" />Vimal</h3>
                                <h3 className='flex'><img src={profile1} alt="" />Vimal</h3>
                            </div>
                        </div>
                    </div>
                </div>







                {/* clock in clock out and profile part */}
                <div className='w-[40%] flex flex-col gap-1 pt-5'>

                    <ClockINOUT />

                    {/* calendar section */}


                    <Calendar1 />


                    <div className=' text-center mx-auto flex flex-col justify-evenly py-2 w-[80%]  h-[30vh] '>
                        <div className=' flex justify-center items-center   '>
                            <select className="bg-indigo-200 rounded-lg p-4 flex justify-between items-center cursor-pointer w-[80%]">
                                <option>Upcoming Holidays</option>
                                <option>Work From Office</option>
                            </select>

                        </div>
                        <div className='flex justify-center items-center '>
                            <select className="bg-indigo-200 rounded-lg p-4 flex justify-between items-center cursor-pointer w-[80%]">
                                <option>Upcoming Anniversary</option>
                                <option>Work From Office</option>
                            </select>

                        </div>
                        <div className='flex justify-center items-center '>
                            <select className="bg-indigo-200 rounded-lg p-4 flex justify-between items-center cursor-pointer w-[80%]">
                                <option>Upcoming Birthdays</option>
                                <option>Work From Office</option>
                            </select>

                        </div>

                    </div>





                </div>
            </div>
        </>
    );
}

export default Dashboard;