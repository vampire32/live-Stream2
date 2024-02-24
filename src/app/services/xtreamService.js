import axios from 'axios';

const XTREAM_API_URL = 'http://sonyiptv.net:8080';

const login = async (username, password) => {
  try {
    const response = await axios.post(`http://sonyiptv.net:8080/get.php?username=1234567&password=1234567&type=m3u_plus`);

    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export { login };
