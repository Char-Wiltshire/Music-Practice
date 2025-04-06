import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/practice_sessions/';

export const getPracticeSessions = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        return [];
    }
};

export const addPracticeSession = async (sessionData) => {
    try {
        const response = await axios.post(API_URL, sessionData);
        return response.data;
    } catch (error) {
        console.error('Error adding data', error);
        return null;
    }
};