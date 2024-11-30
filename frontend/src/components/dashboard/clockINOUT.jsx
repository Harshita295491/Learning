// import React from 'react';
import React, { useState, useEffect } from 'react';
// import myimg from "../../assets/image.jpeg";
// import profile1 from "../../assets/profile1.jpg";
// import announce from "../../assets/announcement.png";
import axios from "axios"

function ClockINOUT() {
    const [currentTime, setCurrentTime] = useState('00:00:00');
    const [isClockedIn, setIsClockedIn] = useState(false);
    const [ClockIn, setClockIn] = useState(null);
    const [onBreak, setOnBreak] = useState(false);
    let timer;
    const [breakTime, setBreakTime] = useState('00:00:00');
    const [userName, setUserName] = useState(''); // Change to fetch from DB
    const [UserPhoto, setUserPhoto] = useState('');
    const [worktype, setWorkType] = useState('');







    const fetchAttendanceData = async (userid) => {
        try {
            // Replace with your backend API URL
            const response = await axios.get(`http://localhost:3000/api/attendance/today/${userid}`);

            // Assuming the response has the structure like this:
            // { clockInTime: '09:00:00', clockOutTime: '17:00:00', isClockedIn: true, onBreak: false }
            const { clockin, clockout } = response.data;
            setClockIn(clockin);
            setIsClockedIn(clockin);

        } catch (error) {
            setError("Failed to fetch attendance data");
            console.error(error);
        }
    };
    const calculateElapsedTime = (clockinTime) => {
        const clockInDate = new Date(clockinTime); // Parse clockin string to Date
        const now = new Date(); // Current system time

        // Adjust clockInDate to local time
        const clockInLocalDate = new Date(clockInDate.getTime() - clockInDate.getTimezoneOffset() * 60000);

        // Calculate the difference in milliseconds
        const diffMs = now.getTime() - clockInLocalDate.getTime();

        // Handle negative difference (if system time is ahead of clockin time)
        // if (diffMs < 0) {
        //     return "00:00:00";
        // }

        const hours = Math.floor(diffMs / (1000 * 60 * 60));
        const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

        // Format time as HH:mm:ss
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };




    const startTimer = (clockinTime) => {
        if (timer) {
            clearInterval(timer); // Clear any existing timer
        }
        setCurrentTime(calculateElapsedTime(clockinTime)); // Set initial time

        timer = setInterval(() => {
            setCurrentTime(calculateElapsedTime(clockinTime)); // Update time every second
        }, 1000);
    };



    useEffect(() => {
        var userId;
        const fetchUserData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/login/success", {
                    withCredentials: true,
                });
                if (response.data.success) {
                    if (response.data.user.profile.id) {
                        userId = response.data.user.profile.id;
                    }
                    setUserName(response.data.user.profile.displayName);
                    setUserPhoto(response.data.user.profile.photos[0].value) // Assuming the user data contains 'name'
                    await fetchAttendanceData(userId);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();

        let timer;
        if (isClockedIn) {
            if (onBreak) {
                timer = setInterval(updateBreakTime, 1000);
            } else {
                timer = setInterval(updateCurrentTime, 1000);
            }
        } else {
            setCurrentTime('00:00:00');
            setBreakTime('00:00:00');
            setOnBreak(false);
        }
        return () => clearInterval(timer);
    }, [isClockedIn, onBreak]);

    const updateCurrentTime = () => {
        setCurrentTime(prevTime => incrementTime(prevTime));
    };

    const updateBreakTime = () => {
        setBreakTime(prevTime => incrementTime(prevTime));
    };

    const incrementTime = (time) => {
        const [hours, minutes, seconds] = time.split(':').map(Number);
        const newSeconds = (seconds + 1) % 60;
        const newMinutes = minutes + Math.floor((seconds + 1) / 60);
        const newHours = hours + Math.floor(newMinutes / 60);
        return `${String(newHours).padStart(2, '0')}:${String(newMinutes % 60).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`;
    };

    const handleWorkType = (e) => {
        setWorkType(e.target.value);
    }

    const handleClockInOut = async () => {
        if (isClockedIn) {
            setCurrentTime('00:00:00');
            setBreakTime('00:00:00');
            setOnBreak(false);
        }
        setIsClockedIn(!isClockedIn);
        try {
            let userId;
            const fetchUserData = async () => {
                try {
                    const response = await axios.get("http://localhost:3000/login/success", {
                        withCredentials: true,
                    });
                    if (response.data.success && response.data.user.profile.id) {
                        userId = response.data.user.profile.id;
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            };

            // Wait for user data to be fetched
            await fetchUserData();

            // Example value for worktype (should be set based on your application's logic)
            const worktype = "Work From Office";

            console.log('User ID:', userId);
            console.log('Work Type:', worktype);

            // Send the POST request
            const postResponse = await axios.post('http://localhost:3000/api/attendance/clockin', {
                user: userId,
                workType: worktype,
                ipAddress: "127.0.0.1", // Example IP, replace as needed
            });

            console.log('Response from server:', postResponse.data);
        } catch (error) {
            console.error("Error in clock-in/out process:", error);
        }
    };

    const handleClockOut = async () => {
        if (isClockedIn) {
            setCurrentTime('00:00:00');
            setBreakTime('00:00:00');
            setOnBreak(false);
        }
        setIsClockedIn(!isClockedIn);
        try {
            let userId;
            const fetchUserData = async () => {
                try {
                    const response = await axios.get("http://localhost:3000/login/success", {
                        withCredentials: true,
                    });
                    if (response.data.success && response.data.user.profile.id) {
                        userId = response.data.user.profile.id;
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            };

            // Wait for user data to be fetched
            await fetchUserData();

            // Example value for worktype (should be set based on your application's logic)
            const worktype = "Work From Office";

            console.log('User ID:', userId);
            console.log('Work Type:', worktype);

            // Send the POST request
            const postResponse = await axios.post('http://localhost:3000/api/attendance/clockout', {
                user: userId,
            });

            console.log('Response from server:', postResponse.data);
        } catch (error) {
            console.error("Error in clock-in/out process:", error);
        }

    };


    const handleBreakToggle = () => {
        if (isClockedIn) {
            setOnBreak(!onBreak);
            // if (!onBreak) setBreakTime('00:00:00');
        }
    };



    return (
        <div> <div className="bg-white rounded-lg shadow-lg text-center mx-auto py-8 w-[80%]">
            <div className="mb-4">
                <div className='mb-4'>
                    <img src={UserPhoto} alt='Profile Picture' className='w-32 h-32 mx-auto rounded-full border-4 border-gray-200' />
                </div>
                <h1 className="text-xl font-bold">{userName}</h1>
                <p className="text-gray-500">Junior Software Engineer</p>
            </div>
            <div className="flex justify-center gap-4 mb-6">
                <div className="bg-green-100 flex flex-col justify-center items-center rounded-lg border-2 border-green-300 w-40 h-14">
                    <p className="text-green-600">Current Time</p>
                    <p className="text-lg">{currentTime}</p>
                </div>
                <div
                    className="bg-red-100 flex flex-col justify-center items-center py-2 rounded-lg border-2 border-red-300 w-40 h-14 cursor-pointer"
                    onClick={handleBreakToggle}
                >
                    <p className="text-red-600 font-semibold">Break Time</p>
                    <p className="text-lg font-bold">{breakTime}</p>
                </div>
            </div>

            <div className='flex justify-center items-center gap-4'>
                {isClockedIn ? (
                    <div
                        className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 cursor-pointer"
                        onClick={handleBreakToggle}
                    >
                        {/* <p className="text-yellow-600 font-semibold">Break Time</p> */}
                        <p className="text-lg font-bold">{onBreak ? "Break Time" : "Break Time"}</p>
                    </div>
                ) : (
                    <select className='border border-gray-300 p-2 rounded-md' value={worktype} onChange={handleWorkType}>
                        <option>Work From Home</option>
                        <option>Work From Office</option>
                    </select>
                )}
                <button
                    className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
                    onClick={isClockedIn ? handleClockOut : handleClockInOut}
                >
                    {isClockedIn ? 'CLOCK OUT' : 'CLOCK IN'}
                </button>
            </div>
        </div></div>
    )
}

export default ClockINOUT