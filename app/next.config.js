const withSvgr = require('next-svgr');

module.exports = withSvgr({
  reactStrictMode: true,

  env: {
    API_URL: process.env.API_URL,
  },
});
