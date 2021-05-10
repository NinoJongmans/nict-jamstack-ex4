const axios = require("axios");
require('dotenv').config();

module.exports = async function() {
  try {
    const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=nl&apiKey=ebfa3f65c3554ecfbbba3630a823faa3&pageSize=5`);
    return response.data;
  } catch (error) {
    console.error(error);
  }

};
