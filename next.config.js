/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.cnn.com",
      "ichef.bbci.co.uk",
      "static01.nyt.com",
      "media.cnn.com",
      "i.ytimg.com",
      "assets.bwbx.io",
      "www.cnbc.com",
      "www.technologymagazine.com", // from your console error
      "upload.wikimedia.org",
      "encrypted-tbn0.gstatic.com",
    ],
  },
};

module.exports = nextConfig;
