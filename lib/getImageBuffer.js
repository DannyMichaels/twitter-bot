const axios = require('axios');

const getImageBuffer = async (url) => {
  try {
    const response = await axios({
      url,
      responseType: 'arraybuffer',
    });
    return response.data;
  } catch (error) {
    console.error('Error downloading image:', error);
    throw error;
  }
};

module.exports = getImageBuffer;
