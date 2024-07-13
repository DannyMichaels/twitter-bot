const { getImageBuffer, uploadMedia } = require('../lib');

const uploadTwitterMedia = async (imageUrl) => {
  const imageBuffer = await getImageBuffer(imageUrl);

  // Upload the image buffer
  const mediaId = await uploadMedia(imageBuffer);

  return mediaId;
};

module.exports = uploadTwitterMedia;
