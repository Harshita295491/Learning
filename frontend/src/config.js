import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:3000/api/attendance/',  
  });export const clockIn = async (_id, workType) => {
    try {
      const response = await api.post('clockin', { _id, workType });
      return response.data;
    } catch (error) {
      console.error("Error clocking in:", error);
      throw error;
    }
  };
  
  // Clock-out function
  export const clockOut = async (_id) => {
    try {
      const response = await api.post('clockout', { _id });
      return response.data;
    } catch (error) {
      console.error("Error clocking out:", error);
      throw error;
    }
  };