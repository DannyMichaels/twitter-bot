const { twitterClient } = require('../twitterClient.js');

const uploadMedia = async (imageBuffer) => {
  try {
    const mediaId = await twitterClient.v1.uploadMedia(imageBuffer, {
      mimeType: 'image/jpeg',
      mediaCategory: 'tweet_image',
    });
    return mediaId;
  } catch (error) {
    console.error('Error uploading media:', error);
    throw error;
  }
};

module.exports = uploadMedia;
