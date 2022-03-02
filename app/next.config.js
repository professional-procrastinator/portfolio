const withSvgr = require('next-svgr');

module.exports = withSvgr({
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos'],
  },
});
