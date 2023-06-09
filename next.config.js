require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {},
  publicRuntimeConfig: {},
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["localhost", "res.cloudinary.com"],
  },
};
