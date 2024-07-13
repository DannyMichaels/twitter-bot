require('dotenv').config();
const { twitterClient } = require('./twitterClient.js');
const axios = require('axios');

const tweet = async () => {
  try {
    const result = await twitterClient.v2.tweet({
      text: 'I am a bot tweeting from the Twitter API v2',
    });

    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

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

const tweetImage = async (imageUrl) => {
  try {
    // Get the image buffer from URL
    const imageBuffer = await getImageBuffer(imageUrl);

    // Upload the image buffer
    const mediaId = await uploadMedia(imageBuffer);

    // Post tweet with the media ID
    const result = await twitterClient.v2.tweet({
      text: 'I am bot-tweeting an image from the Twitter API v2',
      media: {
        media_ids: [mediaId],
      },
    });

    console.log(result);
  } catch (error) {
    console.error('Error tweeting image:', error);
  }
};

// tweet();

tweetImage('https://shibiko.ai/outputs/2024-07-11_23-30-30.png');
