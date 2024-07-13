require('dotenv').config();
const { twitterClient } = require('./twitterClient.js');
const { uploadTwitterMedia } = require('./services');

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

const tweetImage = async (imageUrl) => {
  try {
    // Get the image buffer from URL
    const mediaId = await uploadTwitterMedia(imageUrl);

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
