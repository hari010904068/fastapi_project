import axios from "axios";

// Base API URL
const API_URL = "http://127.0.0.1:8000/api";

// Fetch all courses
export const fetchCourses = async () => {
    const response = await axios.get(`${API_URL}/courses`);
    return response.data;
};

// Register user
export const registerUser = async (data) => {
    const response = await axios.post(`${API_URL}/auth/register`, data);
    return response.data;
};
