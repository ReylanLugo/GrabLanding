// lib/axiosInstance.js
import axios from 'axios';
import https from 'https';

const axiosInstance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false, // Ignore self-signed certificate errors
    }),
});

export default axiosInstance;